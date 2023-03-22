import React from "react";
import "./Contact.css";
import { MdLocationOn, MdPhone, MdEmail, MdSend } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-container-overlay"></div>
      <div className="contact-wrapper">
        <div className="contact-left-content">
          <form className="send-message-form">
            <h1>Send Message</h1>
            <label htmlFor="for">Full Name</label>
            <input type="text" required />
            <label htmlFor="for">Email</label>
            <input type="email" required />
            <label htmlFor="for">Message</label>
            <textarea placeholder="Type your message" />
            <button>
              <span>Send Message</span> <MdSend />
            </button>
          </form>
        </div>
        <div className="contact-right-content">
          <div className="address-card">
            <div className="address-icon">
              <MdLocationOn />
            </div>
            <div className="address-text">
              <h2>Address</h2>
              <p>Road# 03, Block# A, Section# 11, Mirpur, Dhaka# 1216</p>
            </div>
          </div>
          <div className="address-card">
            <div className="address-icon">
              <MdPhone />
            </div>
            <div className="address-text">
              <h2>Phone</h2>
              <p>501-2589362</p>
            </div>
          </div>
          <div className="address-card">
            <div className="address-icon">
              <MdEmail />
            </div>
            <div className="address-text">
              <h2>Email</h2>
              <p>inzamum.inu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
