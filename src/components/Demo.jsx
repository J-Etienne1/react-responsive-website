import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>Let's turn on the juice and see what shakes loose.</p>
          <p>
            These aren't my rules. Come to think of it, I don't have any rules.
          </p>
          <p>
            What's The Good Of Being A Ghost If You Can't Frighten People Away?
          </p>
          <button className="button">Get your FREE Consultation</button>
        </div>
        <div className="col-2"></div>
        <iframe width="570" height="320" src="https://www.youtube.com/embed/wLw3SVzu4rk?clip=UgkxYGE5M7VmWn0xjLSci_WqTtxeZyOqaTHA&amp;clipt=EIPlCxjf1w0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  );
};

export default Demo;
