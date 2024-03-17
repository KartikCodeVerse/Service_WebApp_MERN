import React from "react";
import { useAuth } from "../store/auth";
import about_img from "../../public/images/about.png";

const About = () => {
  const { user } = useAuth();
  return (
    <main>
      <section className="section_hero">
        <div className="container grid grid_two_cols ">
          <div className="hero_container">
            <p>
              Welcome{" "}
              {user ? `${user.username} To About Page` : "To About Page"}
            </p>
            <h1>Why Choose Us?</h1>
            <p>
              <b>Proven Track Record:</b> With a history of successful projects
              and satisfied clients, we have demonstrated our ability to deliver
              high-quality IT solutions.
            </p>
            <p>
              <b>Expert Team:</b> Our team consists of highly skilled
              professionals with expertise in various IT domains, ensuring that
              we can handle diverse project requirements effectively.
            </p>
            <p>
              <b>Innovative Solutions:</b> We stay at the forefront of
              technological advancements and continuously innovate to provide
              cutting-edge solutions that meet the evolving needs of our
              clients.
            </p>
            <p>
              <b>Customer-Centric Focus:</b> Our priority is customer
              satisfaction, and we strive to exceed expectations by providing
              exceptional service, timely communication, and ongoing support.
            </p>
            <p>
              <b>Quality Assurance:</b> Our rigorous quality assurance processes
              guarantee that our solutions are reliable, secure, and perform
              optimally, giving our clients peace of mind.
            </p>
            <div className="btn_group">
              <a href="/contact">
                <button className="btn">Contact Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary_btn">Learn More</button>
              </a>
            </div>
          </div>
          <div className="hero_image">
            <img
              src={about_img}
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>

      {/* 2nd section */}

      <section className="section_analytics">
        <div className="container grid grid_four_cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Companies Registers</p>
          </div>
          <div className="div1">
            <h2>150+</h2>
            <p>Project Done</p>
          </div>
          <div className="div1">
            <h2>250+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>650K+</h2>
            <p>YouTube Subscribers</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
