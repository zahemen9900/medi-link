import React from "react";
import "./aboutUs.css";
import Frame1Pic from "../../assets/Frame 1pic.png";

const aboutUs = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={Frame1Pic} alt="Healthcare Professional" />
        </div>
        <div className="hero-content">
          <h1>About The Referral Partner Network</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            tenetur molestias. Veniam similique nemo tempora delectus pariatur,
            consequuntur id dicta? Distinctio suscipit quidem necessitatibus sed
            consequatur unde aperiam voluptatem dicta?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            minus ut modi sed deleniti enim aperiam? Maiores temporibus
            voluptatibus odit modi non laborum, reprehenderit ut odio. Eaque
            aliquid consectetur voluptate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
