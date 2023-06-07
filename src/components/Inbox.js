import React, { useState } from "react";

const Inbox = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "john@example.com",
      subject: "Hello",
      date: "2023-06-01",
      content: "This is the email content.",
    },
    {
      id: 2,
      sender: "jane@example.com",
      subject: "Meeting Reminder",
      date: "2023-06-02",
      content: "Don't forget about the meeting tomorrow.",
    },
    // Add more email objects here...
  ]);

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
          {emails.map((email) => (
            <tr key={email.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEmails.includes(email.id)}
                  onChange={() => handleSelectEmail(email.id)}
                />
              </td>
              <td>{email.sender}</td>
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
  );
};

export default Inbox;
