import React, { Suspense, lazy, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Grainient from "./components/Grainient"; 
import ProfileCard from "./components/ProfileCard";
import profile from "./assets/avatar.png";
import Carousel from "./components/Carousel";
import Contacts from "./Contacts";


const Resume = lazy(() => import("./Resume"));

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Ken Baquirin</h1>
        <p>Web Developer | React Enthusiast | Problem Solver</p>
      </div>

      <div className="header-right">
        <ProfileCard
          avatarUrl={profile}
          name="Ken Baquirin"
          title="Traine Developer"
          handle="kenbaquirin"
          status="Online"
            showUserInfo={false} 
          innerGradient="linear-gradient(135deg, rgba(30, 58, 41, 0.2), rgba(60, 65, 62, 0.15))"
          behindGlowColor="rgba(14, 23, 18, 0.4)"
          behindGlowSize="50%"
          onContactClick={() => alert('Contact clicked!')}
        />
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <section className="main-content">
      {/* About Me Card */}
      <div className="about-card">
        <h3>About Me</h3>
        <p>
          I am passionate about building modern web applications using React, 
          JavaScript, and backend technologies.
        </p>
      </div>

      <div className="cards-container">
        {/* Skills Card */}
        <div className="skills-card">
          <h3>Skills</h3>
          <p>HTML & CSS, JavaScript, React, PHP & MySQL</p>
        </div>

        {/* Projects Card */}
        <div className="projects-card">
          <h3>Projects</h3>
          <p>Inventory System, Attendance Monitoring System, CRUD Web Applications</p>
          <a
            href="https://www.canva.com/design/DAHAIzcNfkI/D0EJkX_cr25uSASVAN4fyw/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            view full my project →
          </a>
        </div>
        {/* Carousel + Contacts side by side */}
          <div className="carousel-contacts-wrapper">
            <div className="carousel-wrapper">
              <Carousel baseWidth={300} autoplay loop round={false} />
            </div>
            <div className="contacts-wrapper">
              <Contacts />
            </div>
          </div>
      
      </div>
    </section>
  );
}

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="app-container">
      {/* 1️⃣ Grainient Background */}
      <Grainient
        className="grainient-background"
        timeSpeed={0.3}
        color1="#5a455a"
        color2="#8cd6e5"
        color3="#7bc0aa"
        grainAmount={0.05}
        zoom={1.0}
      />

      {/* 2️⃣ Main Content */}
      <div className="content">
        <Header />

        <div className="buttons-container">
          <button
            className="resume-button"
            onClick={() => setShowResume(!showResume)}
          >
            {showResume ? "Hide Resume" : "Show Resume"}
          </button>
        </div>

        {showResume && (
          <Suspense fallback={<div>Loading resume...</div>}>
            <Resume />
          </Suspense>
        )}

        <MainContent />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
