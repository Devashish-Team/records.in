import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp,faFile,faMobile } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"><FontAwesomeIcon icon={faFile} className="text-[#f99a1c]"/> Se <FontAwesomeIcon icon={faMobile} className="text-[#f99a1c]"/> Tak</p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
          My-records.in is a digital health platform for uploading, storing and 
          maintaining health records of patients /users through mobile app and accessible through web and mobile application.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <span>My-Records.in</span>
            <span className="border-r border-l border-white border-opacity-20 px-3"> <FaGooglePlay/></span>
            <span><FaApple/></span>    
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p></p>
              <p></p>
            </div>

            <div className="text-stats-container">
              <p></p>
              <p></p>
            </div>

            <div className="text-stats-container">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;