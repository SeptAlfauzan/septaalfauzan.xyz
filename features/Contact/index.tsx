import React from "react";
import Form from "./components/Form";
import SocialMedia from "./components/SocialMedia";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen h-auto" id="contact">
      <Form />;
      <SocialMedia />
    </div>
  );
};

export default Contact;
