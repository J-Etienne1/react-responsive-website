import React from "react";
import images from "./images/images.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={images} alt="beetlejuice" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            "Ah. Well, I attended Juilliard. I'm a graduate of the Harvard
            business school. I travel quite extensively. I lived through the
            Black Plague and had a pretty good time during that. I've seen the
            Exorcist 167 times, and it keeps getting funnier every single time I
            see it. Not to mention the fact that you're talking to a dead guy!
            Now, what do you think!? You think I'm qualified?"
          </p>
          <p>
            “I'll eat anything you want me to eat, I'll swallow anything you
            want me to swallow! So, come on down, and I'll chew on a dog!”
          </p>
          <button className="button">It's Showtime</button>
        </div>
      </div>
    </div>
  );
};

export default About;
