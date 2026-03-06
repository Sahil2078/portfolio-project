function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo" aria-label="Home">
          <div style={{display:'flex',flexDirection:'column'}}>
            <span style={{fontWeight:700}}>Sahil Shetty</span>
            <small style={{fontSize:'11px', color:'#6b7280'}}>Full‑Stack Developer</small>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <a className="admin-btn" href="/Sahil Resume.pdf">Download CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
