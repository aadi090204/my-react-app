import React from "react";

export default function About() {
  return (
    <section className="page">
      <div className="card">
        <h1>About Me</h1>
        <p>
          I’m <strong>Adithya Anil</strong>, a Computer Science Engineering student building
          full-stack projects and learning DevOps & applied AI. I emphasize clean architecture,
          automated workflows, and practical project delivery.
        </p>

        <div className="grid-2" style={{marginTop:18}}>
          <div className="card">
            <h3>Deepfake Video Detection (Short)</h3>
            <p style={{color:"rgba(230,238,248,0.82)"}}>
              Research project using neST (Nested Spatio-Temporal) transformers + rPPG-based signal analysis
              to detect subtle manipulations in videos. Status: Literature review; Implementation from Dec 2025.
            </p>
          </div>

          <div className="card">
            <h3>Rudhirasena (Short)</h3>
            <p style={{color:"rgba(230,238,248,0.82)"}}>
              Blood donation management web app (Django backend, Tailwind CSS frontend) with donor matching and request flows.
            </p>
          </div>
        </div>

        <div className="card" style={{marginTop:18}}>
          <h3>Hospital Management System (Short)</h3>
          <p style={{color:"rgba(230,238,248,0.82)"}}>
            Python (Tkinter) desktop app integrated with MySQL to manage hospital records, appointments and users.
          </p>

          <h3 style={{marginTop:14}}>Achievements</h3>
          <ul style={{color:"rgba(230,238,248,0.82)", lineHeight:1.6}}>
            <li>Volunteer Secretary — NSS FISAT (2023–24)</li>
            <li>Active in academic projects and research</li>
          </ul>

          <h3 style={{marginTop:14}}>Skills</h3>
          <div className="skills" style={{marginTop:8}}>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23e34f26'/></svg>" alt="html" /> HTML</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23007acc'/></svg>" alt="css" /> CSS</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%231db954'/></svg>" alt="django" /> Django</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23999'/></svg>" alt="sql" /> SQL</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23ffb86b'/></svg>" alt="python" /> Python</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%238ea2ff'/></svg>" alt="c" /> C</div>
          </div>
        </div>
      </div>
    </section>
  );
}
