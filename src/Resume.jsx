import React from "react";
import ProfilePic from "./images/profile.jpg"; // make sure this exists
import "./index.css";

function Resume() {
  return (
    <div className="resume">
      <header className="header">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <h1>Ken Baquirin</h1>
        <p className="name-title">Web Developer</p>
        <p className="contact-info">Email: kdbaquirin17@gmail.com | Phone: 09651379920</p>
      </header>

            <section>
                <h2>Profile</h2>
                <p> Motivated web developer with basic experience in React, PHP,
          and MySQL. Eager to learn and grow in real-world projects.
          </p>

            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>PHP&MYSQL</li>
                    <li>HTML</li>
                </ul>
            </section>

            <section>
                <h2>Educations</h2>
                <strong>BSIT Information Technology</strong><br/>
                School Name<br/>
                2026-present
            </section>

            <section>
                <h2>Projects</h2>
                <ul>
                    <li>Attendance System</li>
                    <li>CRUD Application</li>
                    <li>Simple Calculator</li>
                </ul>
            </section>

        </div>
    )
}
export default Resume;