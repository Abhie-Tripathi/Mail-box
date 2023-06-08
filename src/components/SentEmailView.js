import React, { useState, useEffect } from "react";
import "./EmailView.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import CircularJSON from 'circular-json';

const SentEmailView = () => {
  const { id } = useParams();
  const [email, setEmail] = useState();
  const mail = localStorage.getItem("email");
  const modifiedMail = mail.replace(/[^a-zA-Z0-9 ]/g, "");

  useEffect(() => {
    fetch(`https://expense-tri-default-rtdb.firebaseio.com/Mail/${modifiedMail}/sentbox.json`)
      .then((response) => response.json())
      .then((data) => {
        const array = Object.keys(data).map((id) => ({ ...data[id], id: id }));
        const selectedEmail = array.filter((email) => email.id === id);
        setEmail(selectedEmail[0]);
      });
  }, []);

  const convertToHtml = () => {
    const retrievedContent = CircularJSON.parse(email.content);
    const html = draftToHtml(retrievedContent);
    return { __html: html };
  };

  return (
    <Sidebar>
      {email && (
        <div className="email-view">
          <div className="email-header">
            <h2 className="email-subject">{email.subject}</h2>
            <p className="email-details">
              From: <span className="email-from">{email.by}</span>
              <br />
              Date: <span className="email-date">{"04-03-2023"}</span>
            </p>
          </div>
          <div className="email-content" dangerouslySetInnerHTML={convertToHtml()}></div>
        </div>
      )}
    </Sidebar>
  );
};

export default SentEmailView;
