function Hero() {
  return (
    <section id="hero" className="hero text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm Your Name</h1>
        <p className="lead mt-3">
          Front-End Developer | React Enthusiast | Web Designer
        </p>

        <a href="/resume.pdf" download className="btn btn-light btn-lg mt-4">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
