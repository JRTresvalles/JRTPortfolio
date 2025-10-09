import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7yit19", 
        "template_gc9am14", 
        form.current,
        "NVKL_UBizPpMKwiU1"  
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="bx bx-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+639774654463</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="bx bx-message-dots contact__icon"></i>
            <div>
              <h3 className="contact__title">Email Me</h3>
              <span className="contact__subtitle">jhyar171@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="bx bx-current-location contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Cebu - Philippines</span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                name="user_name"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                name="user_email"
                className="contact__input"
                required
              />
            </div>
          </div>

          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              rows="7"
              className="contact__input"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="contact__button button button--flex">
              Send Message
              <i className="bx bx-right-arrow-alt button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
