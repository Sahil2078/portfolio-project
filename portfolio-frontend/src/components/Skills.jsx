import "./Skills.css";

function Skills() {
  const skills = [
    { name: "React", level: "Advanced", percent: 90, icon: "/react.svg" },
    { name: "Node.js", level: "Advanced", percent: 85, icon: "/node1.png" },
    { name: "Express", level: "Advanced", percent: 80, icon: "/express.png" },
    { name: "MongoDB", level: "Intermediate", percent: 75, icon: "/mongodb1.webp" },
    { name: "JavaScript", level: "Advanced", percent: 95, icon: "/js icon.webp" },
    { name: "HTML/CSS", level: "Advanced", percent: 90, icon: "/html & css.jpg" },
    { name: "Java", level: "Advanced", percent: 95, icon: "/java.j.png" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-desc">I build full‑stack web applications — here are core technologies I use and my proficiency.</p>

        <div className="skill-grid">
          {skills.map((s, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon"><img src={s.icon} alt={s.name} /></div>
                <div>
                  <div className="skill-name">{s.name}</div>
                  {/* <div className="skill-level">{s.level}</div> */}
                </div>
              </div>

              <div className="progress" aria-hidden>
                <div className="progress-fill" style={{ width: `${s.percent}%` }} />
              </div>

              {/* <div className="skill-footer">
                <div className="skill-percent">{s.percent}%</div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="certificate-section">
          <h3 className="certificate-title">📜 Certifications</h3>
          <p className="certificate-desc">View my professional certifications and achievements</p>
          <a href="#" className="certificate-btn" onClick={(e) => {
            e.preventDefault();
            window.open('/java-certificate.pdf', '_blank');
          }}>
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Skills;
