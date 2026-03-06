function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Sahil Shetty</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Building modern web applications with MongoDB, Express,
          React & Node.js
        </p>

        <div className="hero-buttons">
       { /* <button className="primary-btn">View My Work</button>*/}
          <button className="secondary-btn">Contact Me</button>
        </div>
      </div>

      <div className="hero-right">
        <img src="developer.avif" alt="developer" />
      </div>
    </section>
  );
}

export default Hero;
