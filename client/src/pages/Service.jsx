import React, { useEffect } from "react";
import service_img from "../../public/images/service.png";
import { useAuth } from "../store/auth.jsx";
import loading_gif from "../../public/images/loading.gif";

const Service = () => {
  const { services } = useAuth();
  // Check if services is an array before attempting to map
  if (!Array.isArray(services)) {
    // Return a loading state or handle the absence of services data
    return (
      <div className="center container">
        <img src={loading_gif} width={100} alt="Loading..." />
      </div>
    );
  }

  return (
    <section className="section_services">
      <div className="container">
        <h1 className="main_heading">Services</h1>
      </div>
      <div className="container grid grid_three_cols ">
        {services.map((curElem, i) => {
          const { price, description, provider, service } = curElem;

          return (
            <div className="card" key={i}>
              <div className="card_img">
                <img src={service_img} width={200} alt="our services info" />
              </div>
              <div className="card_details">
                <div className="grid grid_two_cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
