import React from "react";
import aboutCardData from "./AboutCardData";
import AboutCard from "./AboutCard";
import './about.css';

function About(){
    return(
    <>
    <div className="container">
        <div className="about-title">
    <h1>About Us</h1>
    </div>
    <div className="about-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
    </div>
    <div className="about-card-title">
        <h1>Our Products</h1>
    </div>
    <div className="about-cards">
    {aboutCardData.map((aboutCard,index)=>(
        <AboutCard
        key={index}
        image={aboutCard.image}
        title={aboutCard.title}
        />
    ))}
    </div>
    </div>
    </>
    )
}

export default About;