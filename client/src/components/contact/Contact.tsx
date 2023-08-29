/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './Contact.css';

const Contact = (): JSX.Element => {
  const [isSent, setIsSent] = useState(false);
  const [isNotSent, setIsNotSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fName: e.target.fName.value,
        lName: e.target.lName.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then(() => {
        setIsSent(true);
      })
      .catch(() => {
        setIsNotSent(true);
      });
  };

  return (
    <div className="Contact" id="contact">
      <h1 className="page-title">Let&apos;s get started</h1>
      <div className="form-container">
        <form action="/" method="POST" className="form" autoComplete="off" onSubmit={sendEmail}>
          <div className="inline-group">
            <div className="input-group">
              <input type="text" name="fName" id="fName" placeholder=" " required />
              <label htmlFor="fName">First Name</label>
            </div>
            <div className="input-group">
              <input type="text" name="lName" id="lName" placeholder=" " required />
              <label htmlFor="lName">Last Name</label>
            </div>
          </div>
          <div className="input-group">
            <input type="email" name="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email ID</label>
          </div>
          <div className="input-group">
            <textarea name="message" id="message" placeholder=" " required />
            <label htmlFor="message">Message</label>
          </div>
          <div className="button-holder">
            <button
              type="submit"
              className={isSent || isNotSent ? 'skeleton-btn-disabled' : 'skeleton-btn'}
            >
              {isSent || isNotSent ? '' : 'Send Message'}
              {isSent && 'Message Sent'}
              {isNotSent && 'Sending Failed'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
