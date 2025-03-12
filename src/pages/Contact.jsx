import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // To show success/error messages

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    emailjs.send(
      "service_zd79uqp", 
      "template_86v017u", 
      formData,
      "dyZJNzwsYKM2kSIVs"
    )
    .then(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("❌ Failed to send message. Try again later."));
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>📬 Contact Me</h1>
        <p>Have a question or want to collaborate? Send me a message!</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}
