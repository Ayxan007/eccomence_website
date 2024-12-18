import React from "react";
import "./footer.css";
import Logo from "../../images/GitHub-Mark-ea2971cee799.png";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <p>
          Made with by{" "}
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z"
                fill="#E02D2D"
              ></path>
            </g>
          </svg>{" "}
          <span className="underline">Sahib Singh</span>
        </p>
        <img src={Logo} />
      </div>
    </div>
  );
}

export default Footer;
