function ContactHero() {
  return (
    <>
      <div className="hero-bg">
        <div className="container py-5">
          <div className="text-center text-white mt-5">
            <div className="bespokeSerif text-vibrant-yellow">
              // Contact //
            </div>
            <div className="h1">Let's Build Your Tech Future Together</div>
            <div className="h5 mx-auto" style={{ maxWidth: "650px" }}>
              Whether you're looking to enroll, ask questions, or partner with
              us, we'd love to hear from you.
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/2348034262759?text=Hi%20GCTechies!%20I%27m%20interested%20in%20your%20Web%20Development%20courses."
                className="px-3 py-2 nav-acct-links rounded-pill bg-vibrant-yellow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
