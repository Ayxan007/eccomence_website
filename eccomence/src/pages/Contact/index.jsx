import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact-title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact">
          <div className="name">
            <h2>Name</h2>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="email">
            <h2>Email</h2>
            <input type="text" placeholder="name@example.com" />
          </div>
          <div className="message">
            <h2>Message</h2>
            <input type="text" placeholder="Enter your message" />
          </div>
          <div className="send-btn">
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
