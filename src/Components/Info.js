import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth,faBaby,faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { IoWoman } from "react-icons/io5";
import { MdElderlyWoman, MdHealthAndSafety } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Newborn Baby Immunization"
          description="Stay on top of your newborn's health with our immunization tracker. Receive personalized schedules for vaccinations based on your baby's age and region. Get reminders for upcoming shots and access educational resources on vaccine safety. With our app, ensure your baby receives essential protection for a healthy start in life."
          icon={faBaby}
        />
       
         <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <IoWoman/>
      </span>
      <p className="info-card-title">Women health management</p>
      <p className="info-card-description">Our health tracking app empowers women to prioritize their well-being. Track menstrual cycles, monitor fertility windows, and receive personalized health insights. Stay on top of appointments with reminders for screenings and check-ups. With comprehensive data analysis and expert advice, take control of your health journey effortlessly.</p>
    </div>

    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <MdElderlyWoman/>
      </span>
      <p className="info-card-title">Senior Citizens health Management</p>
      <p className="info-card-description">Elevate senior health with our intuitive tracking app. Monitor vitals, medication schedules, and appointments seamlessly. Receive reminders for exercise, medication intake, and doctor visits. Access tailored resources on nutrition, mental wellness, and preventive care. With user-friendly features and caregiver connectivity, ensure seniors thrive with holistic support.</p>
    </div>

    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <TiCloudStorage/>
      </span>
      <p className="info-card-title"> Secure data storage</p>
      <p className="info-card-description">Our health management app prioritizes the security of your personal data. Utilizing industry-leading encryption protocols, your information is safeguarded both in transit and at rest. With robust access controls and regular security audits, rest assured that your health data remains confidential and protected against unauthorized access or breaches.</p>
    </div>

    <InformationCard
          title="Appointment Management"
          description="Effortlessly organize your healthcare appointments with our intuitive app. Schedule, reschedule, and cancel appointments with ease, all in one place. Receive timely reminders and notifications to ensure you never miss an important visit. Seamlessly sync appointments with your calendar for convenient access anytime, anywhere. Take control of your healthcare journey effortlessly."
          icon={faCalendarCheck}
        />

        <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       <MdHealthAndSafety/>
      </span>
      <p className="info-card-title"> Health Insurance Policy </p>
      <p className="info-card-description">Explore comprehensive health insurance options seamlessly within our app. Compare policies, premiums, and coverage to find the perfect fit for your needs. Access personalized recommendations based on your health profile and budget. With convenient features for policy management and claims processing, secure your peace of mind with the right coverage.</p>
    </div>
      </div>
    </div>
  );
}

export default Info;