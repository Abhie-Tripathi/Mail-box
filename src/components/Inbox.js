import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Inbox.css";



const Inbox = () => {
  const [emails, setEmails] = useState();

  const mail = localStorage.getItem("email");
  const modifiedmail = mail.replace(/[^a-zA-Z0-9 ]/g, "");

  useEffect(() => {
    const fetchdata = () => {
      fetch(`https://expense-tri-default-rtdb.firebaseio.com/Mail/${modifiedmail}/inbox.json`)
        .then((Response) => Response.json())
        .then((data) => {
          if(data){
          const array = Object.keys(data).map((id) => ({ ...data[id], id: id }));
          setEmails(array)}
        });
    }

    fetchdata()

    const interval = setInterval(fetchdata, 5000);

    return () => clearInterval(interval);


}, []);

  const handleDeleteSelected = (id) => {
    fetch(`https://expense-tri-default-rtdb.firebaseio.com/Mail/${modifiedmail}/inbox/${id}.json`,{
      method:"DELETE"
    }).then(setEmails((prevemails)=>prevemails.filter((email)=>email.id !== id)))
  };


  return (
    <Sidebar>
      <div className="inbox-container">
        <h1>Inbox</h1>
        <div className="card-container">
          {emails &&
            emails.map((email) => (
              <Card key={email.id} className="mb-3">
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Link to={`/inbox/${email.id}`} className="card-link">
                      <Card.Title>{email.subject}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {email.by}
                      </Card.Subtitle>
                    </Link>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteSelected(email.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default Inbox;
