import React from "react";
import "../App.css";

const LandingPage = ({ onStart }) => (
  <div className="landing-container">
    <h1>CyberShield</h1>
    <h2>Cybersecurity Awareness Quiz for SMBs</h2>
    <p className="subtitle">
      Welcome! This interactive quiz is designed for small business owners and employees to boost awareness of the most pressing cybersecurity threats facing SMBs today.
    </p>
    <ul className="landing-features">
      <li>✔️ Scenario-based questions on phishing, ransomware, password hygiene, and more</li>
      <li>✔️ Instant feedback and clear explanations</li>
      <li>✔️ Progress tracking across key cybersecurity categories</li>
      <li>✔️ No personal data collected – privacy and security by design</li>
    </ul>
    <p>
      <strong>Why take this quiz?</strong><br />
      Cyber threats are evolving. This quiz will help you and your team recognize risks, learn best practices, and build a strong security culture in your business.
    </p>
    <button className="start-quiz-btn" onClick={onStart} aria-label="Start Quiz" autoFocus>Start Quiz</button>
  </div>
);

export default LandingPage;
