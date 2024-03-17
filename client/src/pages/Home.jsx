import React from "react";
import home_img from "../../public/images/home.png";
import help_img from "../../public/images/help.png";

const Home = () => {
  return (
    <main>
      <section className="section_hero">
        <div className="container grid grid_two_cols ">
          <div className="hero_container">
            <p>We are the World Best IT Company</p>
            <h1>Welcome to Kartik Technical</h1>
            <p>
              Welcome to Kartik Technical – where innovation reigns supreme. As
              the world's premier IT company, we blend cutting-edge solutions
              with unmatched expertise to propel your business forward. Join us
              on a journey where possibilities are endless and success is
              inevitable. Welcome to the future, welcome to Kartik Technical.
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
              src={home_img}
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
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Know Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      {/* 3rd section */}

      <section className="section_hero">
        <div className="container grid grid_two_cols ">
          <div className="hero_image">
            <img
              src={help_img}
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
          <div className="hero_container">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Let's embark on your journey together, where expert guidance meets
              your aspirations. Start now and experience the transformative
              power of our solutions.
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
        </div>
      </section>
    </main>
  );
};

export default Home;
