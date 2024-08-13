import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.scss";

export const Contact: FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    emailjs.init("t7t37e8OIJE-vJEQw");
  }, []);

  const { name, email, subject, message } = formData;

  const handleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const formErrors = validate();

    setErrors(formErrors);

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const formErrors: { [key: string]: string } = {};

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formData.email = "Email is invalid";
    }

    if (!subject) {
      formErrors.subject = "Subject is required";
    }

    if (!message) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validate();

    if (!Object.keys(formErrors).length) {
      emailjs.send("service_hs7xo4h", "template_lyyb65a", formData).then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h3 className="contact__title">Contact</h3>
        <p className="contact__heading">
          Contact with me via phone{" "}
          <span className="contact__heading-phone">+34632371875</span> or email{" "}
          <a
            href="mailto:turbo.lukoshko@gmail.com"
            className="contact__heading-email"
          >
            turbo.lukoshko@gmail.com
          </a>
        </p>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-field">
            <input
              type="text"
              placeholder="Name"
              className="contact__form-field-input"
              value={name}
              onChange={(e) => handleForm(e)}
              name="name"
            />
            {errors.name && (
              <p className="contact__form-field-error">{errors.name}</p>
            )}
          </div>
          <div className="contact__form-field">
            <input
              type="text"
              placeholder="Email"
              className="contact__form-field-input"
              value={email}
              onChange={(e) => handleForm(e)}
              name="email"
            />
            {errors.email && (
              <p className="contact__form-field-error">{errors.email}</p>
            )}
          </div>
          <div className="contact__form-field">
            <input
              type="text"
              placeholder="Subject"
              className="contact__form-field-input"
              value={subject}
              onChange={(e) => handleForm(e)}
              name="subject"
            />
            {errors.subject && (
              <p className="contact__form-field-error">{errors.subject}</p>
            )}
          </div>
          <div className="contact__form-field">
            <textarea
              className="contact__form-field-message"
              placeholder="Your message"
              value={message}
              onChange={(e) => handleForm(e)}
              name="message"
            />
            {errors.message && (
              <p className="contact__form-field-error">{errors.message}</p>
            )}
          </div>
          <button className="contact__form-button button">Submit</button>
        </form>
      </div>
    </section>
  );
};
