import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setStatus(`Thanks ${name}! Message received. I'll reply to ${email} soon.`);
    e.target.reset();
  }

  return (
    <section className="page">
      <div className="card">
        <h1>Contact</h1>
        <p style={{color:"rgba(230,238,248,0.82)"}}>
          For internships, projects, or collaboration, reach out:
        </p>

        <p style={{marginTop:8}}>
          <strong>Email:</strong> <a href="mailto:adithyaani135@gmail.com" style={{color:"#9be3ff"}}>adithyaani135@gmail.com</a><br />
          <strong>GitHub:</strong> <a href="https://github.com/aadi090204" target="_blank" rel="noreferrer">aadi090204</a><br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adithya-anil-8a247a255/" target="_blank" rel="noreferrer">adithya-anil</a>
        </p>

        <form onSubmit={handleSubmit} style={{marginTop:12}}>
          <div className="form-row">
            <input name="name" className="input" placeholder="Your name" required />
            <input name="email" className="input" placeholder="Your email" type="email" required />
          </div>

          <div style={{marginBottom:12}}>
            <textarea name="message" placeholder="Message" required />
          </div>

          <div style={{display:"flex", gap:10}}>
            <button type="submit" className="btn">Send Message</button>
            <a className="btn secondary" href="mailto:adithyaani135@gmail.com">Email Me</a>
          </div>

          {status && <p style={{marginTop:12, color:"#9be3ff"}}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
