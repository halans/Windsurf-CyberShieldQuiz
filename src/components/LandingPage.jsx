import React from "react";
import { ShieldCheck, BookOpenCheck, MessageCircle, BarChart3, Lock, Sparkles, AlertTriangle, Laptop, Smartphone, Server, Mails, Shredder } from "lucide-react";
import "../App.css";

const LandingPage = ({ onStart }) => (
  <div className="landing-container">
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', fontSize: 32 }}>
      <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: -4 }} />
      CyberSmart
    </h1>
    <h2>Cybersecurity Awareness Quiz for SMBs</h2>
    <p className="subtitle">
      Test your knowledge on the 50 most pressing cybersecurity issues affecting small businesses today. This interactive quiz is designed for small business owners and employees to boost awareness of today's cybersecurity threats.
    </p>
    <ul className="landing-features">
      <li><BookOpenCheck size={24} color="var(--primary)" style={{ marginRight: 8, verticalAlign: 'middle' }} />Scenario-based questions on phishing, ransomware, password hygiene, and more</li>
      <li><MessageCircle size={24} color="var(--primary)" style={{ marginRight: 8, verticalAlign: 'middle' }} />Instant feedback and clear explanations</li>
      <li><BarChart3 size={24} color="var(--primary)" style={{ marginRight: 8, verticalAlign: 'middle' }} />Progress tracking across key cybersecurity categories</li>
      <li><Lock size={24} color="var(--primary)" style={{ marginRight: 8, verticalAlign: 'middle' }} />No personal data collected – privacy and security by design</li>
    </ul>

    <section className="learn-section">
      <h3 className="learn-title">Why take this quiz?</h3>
      <p className="learn-desc">Cyber threats are evolving. This quiz will help you and your team recognize risks, learn best practices, and build a strong security culture in your business.</p>
      <h3 className="learn-title">What You'll Learn</h3>
      <div className="learn-grid">
        <div className="learn-item">
          <Mails size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Phishing Protection</div>
            <div className="learn-desc">Identify and avoid sophisticated phishing attempts</div>
          </div>
        </div>
        <div className="learn-item">
          <AlertTriangle size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Ransomware Defense</div>
            <div className="learn-desc">Prevent and respond to ransomware attacks</div>
          </div>
        </div>
        <div className="learn-item">
          <Lock size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Password Hygiene</div>
            <div className="learn-desc">Best practices for secure password management</div>
          </div>
        </div>
        <div className="learn-item">
          <Laptop size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Secure Remote Work</div>
            <div className="learn-desc">Protect your business with a distributed workforce</div>
          </div>
        </div>
        <div className="learn-item">
          <Smartphone size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Device Security</div>
            <div className="learn-desc">Secure all business devices and BYOD policies</div>
          </div>
        </div>
        <div className="learn-item">
          <Shredder size={28} color="var(--primary)" aria-hidden="true" />
          <div>
            <div className="learn-heading">Data Protection</div>
            <div className="learn-desc">Safeguard critical business and customer data</div>
          </div>
        </div>
      </div>
    </section>

    <p>&nbsp;</p>
    <button tabIndex={1} className="start-quiz-btn" onClick={onStart} aria-label="Start Quiz" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: '2.2rem' }}>
      <Sparkles size={22} color="var(--card-bg)" style={{ marginBottom: -2 }} />
      Start Quiz
    </button>
    <p className="landing-footer">Quiz takes approximately 15-20 minutes to complete.</p>
    <p className="landing-footer">&copy; {new Date().getFullYear()} - Created with <a href="https://windsurf.com/refer?referral_code=6sjx7c1wyfoahfqt" target="_blank" rel="noopener noreferrer" aria-label="Windsurf">Windsurf</a>. Hosted on <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer" aria-label="Cloudflare">Cloudflare</a>.
      Find it on <a href="https://github.com/halans/Windsurf-CyberShieldQuiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a></p>
    <p className="landing-footer">This app is designed to educate and does not substitute for professional cybersecurity advice.</p>
  </div>
);

export default LandingPage;
