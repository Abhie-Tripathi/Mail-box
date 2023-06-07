import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Inbox = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emails, setEmails] = useState();

  const mail = localStorage.getItem("email")
  const modifiedmail = mail.replace(/[^a-zA-Z0-9 ]/g, '')

  useEffect(()=>{
    fetch(`https://expense-tri-default-rtdb.firebaseio.com/Mail/${modifiedmail}.json`)
    .then((Response)=>Response.json()).then((data)=>{
     const array = Object.keys(data).map((id)=>({...(data[id]),id:id}))
     setEmails(array)
    })
  },[])

  const handleSelectEmail = (emailId) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter((id) => id !== emailId));
    } else {
      setSelectedEmails([...selectedEmails, emailId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedEmails = emails.filter((email) => !selectedEmails.includes(email.id));
    setEmails(updatedEmails);
    setSelectedEmails([]);
  };

  return (
    <Sidebar>
    <div className="inbox-container">
      <h1>Inbox</h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Sender</th>
            <th>Subject</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {emails && emails.map((email) => (
            <tr key={email.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEmails.includes(email.id)}
                  onChange={() => handleSelectEmail(email.id)}
                />
              </td>
              <td>{email.by}</td>
              <td>{email.subject}</td>
              <td>{email.date}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteSelected(email.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmails.length > 0 && (
        <div className="selected-emails">
          <p>Selected emails: {selectedEmails.join(", ")}</p>
          <button className="btn btn-danger btn-sm" onClick={handleDeleteSelected}>
            Delete Selected
          </button>
        </div>
      )}
    </div>
    </Sidebar>
  );
};

export default Inbox;
