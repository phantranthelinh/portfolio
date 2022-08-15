import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_2mzeuo9",
      "template_t4h5hds",
      form.current,
      "WE5s0CJTN_oJQjokx"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thelinh032000@gmail.com</h5>
            <a href="mailto:thelinh032000@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsFacebook className="contact__option-icon" />
            <h4>Messager</h4>
            <h5>Phan Tran The Linh</h5>
            <a href="https://m.me/thelinh.info">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>0766 865 878</h5>
            <a href="tel:+84766865878 ">Call</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />

          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
