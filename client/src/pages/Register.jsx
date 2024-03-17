import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import regirtration_img from "../../public/images/registration.png";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Registration Successful");
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          isAdmin: false,
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      alert("Registration:", error);
    }
  };
  return (
    <section>
      <main>
        <div className="section_registration">
          <div className="container">
            <div className="reg_img">
              <img
                src={regirtration_img}
                alt="let's fill the form"
                width={500}
                height={500}
              />
            </div>

            <div className="registration_form">
              <h1>Registration From</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="Enter Your Username"
                    id="username"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter Your email"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter Your phone"
                    id="phone"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter Your password"
                    id="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="isAdmin">Are you an admin?</label>
                  <input
                    type="checkbox"
                    name="isAdmin"
                    checked={user.isAdmin}
                    onChange={handleInput}
                    id="isAdmin"
                  />
                </div>
                <br />
                <button type="submit" className="btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
