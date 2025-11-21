function Contact() {
  return (
    <section id="contact" className="bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Contact</h2>

        <p className="lead">Feel free to reach out anytime!</p>

        <div className="mt-4">
          <p><strong>Email:</strong> youremail@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>

          <a
            href="mailto:youremail@example.com"
            className="btn btn-primary mt-3"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
