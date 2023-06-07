import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleComposeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Email Client</h1>
        <button className="btn btn-primary compose-btn" onClick={handleComposeClick}>
          Compose
        </button>
      </div>
      <hr />

      <div className="row">
        <div className="col-lg-2">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">Inbox</a>
            <a href="#" className="list-group-item list-group-item-action">Sent</a>
            <a href="#" className="list-group-item list-group-item-action">Drafts</a>
            <a href="#" className="list-group-item list-group-item-action">Spam</a>
          </div>
        </div>

        <div className="col-lg-10">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Example Subject</td>
                  <td>June 1, 2023</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Another Subject</td>
                  <td>May 30, 2023</td>
                </tr>
                {/* Add more rows for email messages */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <h2>Compose Email</h2>
            <form>
              <div className="form-group">
                <label htmlFor="recipient">To:</label>
                <input type="text" id="recipient" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" className="form-control" rows="5"></textarea>
              </div>
              <div className="modal-btns">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
