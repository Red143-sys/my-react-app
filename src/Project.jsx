import React from "react";
import Ads1Pic from "./images/ads1.png";
import Ads2Pic from ".images/ads2.png;"
import "./index.css";

function Project() {
 return (
    <div className="project">
        <header className="header">
            <h1> My Project </h1>
        </header>

        <section>
            <img src={Ads1Pic} alt="Ads1" className="ads1-pic" />
        </section>
    </div>
 )
}