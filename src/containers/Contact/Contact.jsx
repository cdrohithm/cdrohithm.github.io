import React from "react";
import Input from "../../components/Input/Input";
import "./Contact.scss";
const Contact = (props) => {
  const handleChange = () => {
      
  }
  return (
    <div className="contact-container">
      <label for="">Name</label>
      <Input />
      <label for="">Email</label>
      <Input />
      <label for="">Subject</label>
      <Input />
      <label for="">Message</label>
      <textarea rows="6" />
    </div>
  );
};

export default Contact;
