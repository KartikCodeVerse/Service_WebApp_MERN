import React, { useState } from "react";
import { useAuth } from "../store/auth";
import contact_img from "../../public/images/contact.png";

const Contact = () => {
  const [userData, setUserData] = useState(true);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/contact/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // localStorage.setItem("token", res_data.token);
        alert("Message Send Successful");
        setContact({ username: user.username, email: user.email, message: "" });
      }
    } catch (error) {
      alert("Contact:", error);
    }
  };
  return (
    <main>
      <section className="section_contact">
        <div className="contact_content container">
          <h1 className="main_heading">Contact us</h1>
        </div>
        <div className="container grid grid_two_cols ">
          <div className="contact_image">
            <img src={contact_img} alt="we are always ready to help" />
          </div>

          <div className="section_form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                  id="username"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  id="email"
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  value={contact.message}
                  autoComplete="off"
                  onChange={handleInput}
                  id="message"
                  cols="30"
                  rows="6"
                />
              </div>
              <br />
              <div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114841820136!2d77.20496574586234!3d28.628901609040007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1709364595163!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </main>
  );
};

export default Contact;
