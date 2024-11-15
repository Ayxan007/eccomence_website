import React from "react";

const AboutCard = ({image, title}) => {
    return (
        <div className="about-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default AboutCard;