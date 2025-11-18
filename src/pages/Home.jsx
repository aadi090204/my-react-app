import React from "react";

/* small inline SVG icons for skills (data URLs or inline SVG) are used here.
   For best look you can replace src of <img> with file paths inside /public/icons/... */

export default function Home() {
  function scrollToProjects() {
  const el = document.getElementById("projects");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

  return (
    <section className="page">
      <div className="hero">
        <div className="hero-left">
          <h1>Hi — I'm <span style={{color:"#9be3ff"}}>Adithya Anil</span></h1>
          <div className="title">Computer Science Engineering Student | Full-Stack Developer (Beginner)</div>

          <p>
            I build modern, maintainable web apps and set up automated deployment pipelines.
            Currently focusing on CI/CD, Firebase hosting, and applied AI research.
          </p>

          <div className="skills" aria-hidden>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23e34f26'/></svg>" alt="html" /> HTML</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23007acc'/></svg>" alt="css" /> CSS</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%231db954'/></svg>" alt="django" /> Django</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23999'/></svg>" alt="sql" /> SQL</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%23ffb86b'/></svg>" alt="python" /> Python</div>
            <div className="skill-pill"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect width='18' height='18' rx='3' fill='%238ea2ff'/></svg>" alt="c" /> C</div>
          </div>

          <div className="hero-cta">
            <button className="btn" onClick={scrollToProjects}>View Projects</button>
            <a className="btn secondary" href="/contact">Contact Me</a>
          </div>

        </div>

        <aside className="hero-right">
          <div className="abstract" aria-hidden>
            <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{width:"85%", height:"85%", opacity:0.95}}>
              <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#6fb6ff"/><stop offset="1" stopColor="#1aa0ff"/></linearGradient></defs>
              <g fill="url(#g1)" transform="translate(-20,-10)"><path d="M85,240 C40,170 60,60 180,60 C300,60 360,160 480,140 C620,120 540,300 420,320 C300,340 160,310 85,240 Z"/></g>
            </svg>
          </div>

          <div style={{marginTop:14}}>
            <h4 style={{marginBottom:8}}>Quick Highlights</h4>
            <ul style={{lineHeight:1.6, color:"rgba(230,238,248,0.82)"}}>
              <li>Built and deployed a React app with Firebase hosting.</li>
              <li>Comfortable with Git, GitHub, and GitHub Actions basics.</li>
              <li>Strong foundation in Python, Django, and SQL.</li>
            </ul>
          </div>
        </aside>
      </div>

      <div id="projects" className="grid-2">
        <div className="card">
          <h3>Deepfake Video Detection — neST + rPPG (Research)</h3>
          <p style={{color:"rgba(230,238,248,0.82)"}}>
            Detecting deepfakes by combining a Nested Spatio-Temporal (neST) transformer with remote PPG-based heart-rate consistency analysis.
            Status: Literature review (implementation begins Dec 2025). Focus: fusion-based anomaly classifier for REAL / DEEPFAKE.
          </p>
        </div>

        <div className="card">
          <h3>Rudhirasena — Blood Donation System</h3>
          <p style={{color:"rgba(230,238,248,0.82)"}}>
            Web app built with Django backend and Tailwind CSS + JavaScript frontend. Features: user auth, donor/request management, certificate generation.
          </p>
        </div>

        <div className="card">
          <h3>Hospital Management System</h3>
          <p style={{color:"rgba(230,238,248,0.82)"}}>
            Desktop application using Python (Tkinter) and MySQL for managing patients, doctors, appointments, and departments.
          </p>
        </div>

        <div className="card">
          <h3>Learning Roadmap</h3>
          <p style={{color:"rgba(230,238,248,0.82)"}}>
            Focused on CI/CD, Docker, transformer-based ML, and production deployment workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
