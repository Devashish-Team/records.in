import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At My-Records.in, we're dedicated to empowering individuals to take control of their health journey. Our comprehensive health management app provides users with tools to track and manage their medical records efficiently. With a commitment to privacy and security, we strive to simplify healthcare management for everyone, ensuring peace of mind and well-being.
        </p>

        <SolutionStep
          title="Vision"
          description="Empowering individuals to take control of their health journey through intuitive,
           user friendly health tech solutions that prioritize transparency, education and empowerment.  "
        />

        <SolutionStep
          title="Mission"
          description="At the intersection of healthcare and technology our mission is to pioneer 
          innovative solutions that revolutionize patient experiences, on able better clinical outcomes, and drive programs towards healthier future for everyone. "
        />

       
      </div>
    </div>
  );
}

export default About;