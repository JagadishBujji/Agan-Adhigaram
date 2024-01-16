import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
} from "../../utils/validator";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import "./ContactUsFrom.css";

const ContactUsFrom = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    if (!isValidName(contact.name)) {
      errorNotification("Invalid Name");
    } else if (!isValidEmail(contact.email)) {
      errorNotification("Invalid Email");
    } else if (!isValidPhoneNumber(contact.phone)) {
      errorNotification("Invalid - Please enter 10 digit mobile number");
    } else if (contact.subject === "") {
      errorNotification("Invalid - Subject should not be empty");
    } else if (contact.message === "") {
      errorNotification("Invalid - Message should not be empty");
    } else {
      console.log("contact: ", contact);
      const templateParams = {
        from_name: "Agan-Adhigaram-Contactus",
        to_name: "Agan Adhigaram",
        reply_to: "aganadhigaram@gmail.com",
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        subject: contact.subject,
        message: contact.message,
      };
      // console.log("email: ", email, isValid);
      emailjs
        .send(
          "agan-adhigaram-gmail", //"service_oqj0u95",
          "agan-adhigaram-contactus", // "template_vm0im08",
          templateParams,
          "X998DiJQe-3yW7KbL" // D2kbT-B5keOM5qWXb
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            successNotification(
              "Thank you for registering newletter with us!!!"
            );
            setContact({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          },
          function (error) {
            console.log("FAILED...", error);
          }
        )
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <section class="contact-page-sec">
        <div class="container">
          <div class="row contant-details">
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-map-marked"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>address</h2>
                    <span>
                      Agan Adhigaram publishing house,
                      <br />
                      No. 35, Gandhi salai, Chengalpattu – 603002,
                    </span>
                    <span>Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>E-mail</h2>
                    <span>books@aganadhigaram.com</span>
                    <span>aganadhigaram@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>Phone Number</h2>
                    <span>+91 9363123828</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row contactfrom">
            <div class="col-md-8">
              <div class="contact-page-form" method="post">
                <h2>Get in Touch</h2>
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={onChangeHandler}
                        value={contact.name}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={onChangeHandler}
                        value={contact.email}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={onChangeHandler}
                        value={contact.phone}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        onChange={onChangeHandler}
                        value={contact.subject}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-12 message-input">
                    <div class="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                        onChange={onChangeHandler}
                        value={contact.message}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* <input
                      type="button"
                      value="Send Now"
                      className="sendnow"
                      onClick={submitHandler}
                    /> */}
                  <button onClick={submitHandler} className="sendnow">
                    Send Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-page-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen
                ></iframe> */}
                <iframe
                  title="Agan Adhigaram Location"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3892.3003235721417!2d79.97303617477684!3d12.693810820908347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQxJzM3LjciTiA3OcKwNTgnMzIuMiJF!5e0!3m2!1sen!2sin!4v1705237919424!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsFrom;
