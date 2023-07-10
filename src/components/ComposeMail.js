import React, { useState } from "react";
import { EditorState, convertToRaw} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeMail.css"
import Sidebar from "./Sidebar";
import CircularJSON from 'circular-json';




const ComposeMail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };


  const handleSendEmail = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState, true);
    const jsonString = CircularJSON.stringify(rawContentState);
    const modifiedto = to.replace(/[^a-zA-Z0-9 ]/g, '');
    const email = localStorage.getItem("email")
    const modifiedby = email.replace(/[^a-zA-Z0-9 ]/g, '');

    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Content:", jsonString);
    

    fetch(`https://mail-box-97e37-default-rtdb.firebaseio.com/Mail/${modifiedto}/inbox.json`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        by: email,
        subject:subject,
        content:jsonString
      })
    }).then(fetch(`https://mail-box-97e37-default-rtdb.firebaseio.com/Mail/${modifiedby}/sentbox.json`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        by: email,
        subject:subject,
        content:jsonString
      })
    })).then(()=>{setTo("")
    setSubject("")
    setEditorState(EditorState.createEmpty())})

    
  };

  return (<Sidebar>
    <div className="Outer">
      <h1 className="compose-header">Compose Mail</h1>
      <div className="compose-field">
        <label htmlFor="to">To:</label>
        <input type="text" id="to" className="compose-input" value={to} onChange={handleToChange} />
      </div>
      <div className="compose-field">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          className="compose-input"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
     
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
          toolbar={{
            options: ["inline", "blockType", "list", "link", "history"],
          }}
        />
      </div>
      <button className="compose-button" onClick={handleSendEmail}>
        Send
      </button>
    </div>
    </Sidebar>
  );
};

export default ComposeMail;
