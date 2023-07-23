import React from "react";

const Footer = () => {
  const marginLeft = "3rem";
  return (
    <div style={{ backgroundColor: "#99d8cd", padding: "5rem 0" }}>
      <h4 style={{ fontSize: "2rem", fontWeight: 700, opacity: 0.65 }}>
        sunnyside
      </h4>
      <ul
        style={{
          alignItems: "center",
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          opacity: 0.65,
          margin: "1rem",
        }}
      >
        <li>About</li>
        <li style={{ marginLeft: marginLeft }}>Services</li>
        <li style={{ marginLeft: marginLeft }}>Projects</li>
      </ul>
      <div>
        <img
          style={{ marginLeft: "4rem" }}
          src="./images/icon-facebook.svg"
          alt="facebook"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-instagram.svg"
          alt="instagram"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-twitter.svg"
          alt="twitter"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-pinterest.svg"
          alt="pinterest"
        />
      </div>
    </div>
  );
};

export default Footer;
