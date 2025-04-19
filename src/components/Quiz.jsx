import React, { useState } from "react";
import questions from "../data/questions";
import ProgressBar from "./ProgressBar";
import CategoryDonut from "./CategoryDonut";
import { CircleArrowRight, CircleX, SquareX } from "lucide-react";
import "../App.css";

function shuffle(array) {
  // Fisher-Yates shuffle
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const categories = Array.from(new Set(questions.map(q => q.category)));

const initialProgress = () => {
  const prog = {};
  categories.forEach(cat => { prog[cat] = 0; });
  return prog;
};

import jsPDF from "jspdf";

const Quiz = ({ onExit }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("quizProgress");
    return saved ? JSON.parse(saved) : initialProgress();
  });

  const handleAnswer = idx => {
    setSelected(idx);
    setShowExplanation(true);
    if (idx === questions[current].answer) {
      setScore(score + 1);
      setProgress(prev => {
        const cat = questions[current].category;
        const updated = { ...prev, [cat]: prev[cat] + 1 };
        localStorage.setItem("quizProgress", JSON.stringify(updated));
        return updated;
      });
    }
  };

  const nextQuestion = () => {
    setCurrent(current + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  // PDF Certificate Generator
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("CyberSmart Quiz Certificate", 20, 50);
    doc.setFontSize(18);
    // Add sparkles/check emoji near Congratulations
    doc.text("Congratulations!", 20, 68);
    doc.setFontSize(14);
    doc.text(`You completed the CyberSmart Awareness Quiz.`, 20, 82);
    // Trophy emoji near score
    doc.text(`Score: ${score} / ${questions.length}`, 20, 98);
    doc.text("Date: " + new Date().toLocaleDateString(), 20, 112);
    doc.setFontSize(12);
    doc.text("This certificate is awarded for demonstrating cybersecurity knowledge.", 20, 126);
    doc.save("CyberSmart_Quiz_Certificate.pdf");
  };

  if (current >= questions.length) {
    const percent = Math.round((score / questions.length) * 100);
    let feedbackMsg = null;
    let emoji = '🎉';
    if (percent === 100) {
      feedbackMsg = "Outstanding! You're a Cybersecurity Champion! You answered every question correctly—your knowledge is top-notch.";
      emoji = '🏆🎉';
    } else if (percent < 50) {
      feedbackMsg = "You scored below 50%. Don't worry—cybersecurity is a journey! Review the explanations for each question to strengthen your understanding. Consider revisiting the quiz after some learning.";
      emoji = '💡';
    } else {
      feedbackMsg = "Good effort! You got more than half the questions right. Review the explanations for any missed questions to boost your cybersecurity awareness.";
      emoji = '👍';
    }
    return (
      <div className="quiz-container">
        <div style={{ fontSize: 44, marginBottom: 8 }}>{emoji}</div>
        <h2 style={{ color: '#2151a1', fontWeight: 800, marginBottom: 12 }}>Quiz Complete!</h2>
        <div style={{ fontSize: 20, fontWeight: 700, color: percent === 100 ? '#276749' : percent < 50 ? '#e53e3e' : '#2151a1', marginBottom: 8 }}>
          {feedbackMsg}
        </div>
        <p style={{ fontSize: 18, marginBottom: 18 }}>Your score: <b>{score} / {questions.length} ({percent}%)</b></p>
        <button className="start-quiz-btn" onClick={() => {
          setCurrent(0);
          setScore(0);
          setProgress(initialProgress());
          localStorage.removeItem("quizProgress");
        }} aria-label="Restart Quiz">Restart Quiz</button>
        <div className="category-progress-grid">
          <h3>Category Progress</h3>
          <div className="donut-grid">
            {categories.map((cat, idx) => (
              <CategoryDonut
                key={cat}
                label={cat}
                value={progress[cat]}
                max={questions.filter(q => q.category === cat).length}
              />
            ))}
          </div>
        </div>
        <button
          className="pdf-btn"
          style={{ marginLeft: 14, marginTop: 12, background: '#2151a1', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.6rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
          onClick={handleDownloadPDF}
          aria-label="Download Certificate of Completion"
        >
          Certificate of Completion
        </button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="quiz-container" style={{ position: 'relative' }} role="main" aria-label="Quiz content">
      {/* Exit button top right */}
      <button
        className="exit-btn"
        aria-label="Exit Quiz"
        tabIndex={0}
        style={{
          position: 'absolute',
          top: 25,
          right: 25,
          background: 'none',
          color: '#e53e3e',
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={() => {
          if (window.confirm('Are you sure you want to exit? All quiz progress will be lost.')) {
            setCurrent(0);
            setScore(0);
            setProgress(initialProgress());
            localStorage.removeItem("quizProgress");
            if (onExit) onExit();
          }
        }}
      ><SquareX size={30} /></button>
      {/* Main card content */}
      <div style={{ maxWidth: 520, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0001', padding: '2.2rem 2.1rem 1.7rem 2.1rem', marginBottom: 36 }}>
        <ProgressBar value={current + (showExplanation ? 1 : 0)} max={questions.length} />
        <h2 style={{ marginBottom: 12, marginTop: 8 }}>Question {current + 1} of {questions.length}</h2>
        {/* Category and scenario */}
        <div style={{ marginBottom: q.scenario ? 16 : 0 }}>
          <h3 className="category" style={{ textAlign: 'left', color: '#24936b', fontWeight: 700, fontSize: 20, margin: 0, marginBottom: q.scenario ? 0 : 12 }}>{q.category}</h3>
          {q.scenario && (
            <div className="scenario-box" style={{ textAlign: 'left', marginTop: 8 }}>
              <span className="scenario-label">Scenario:</span> <span>{q.scenario}</span>
            </div>
          )}
        </div>
        <p className="question">{q.question}</p>
        <ul className="options" role="list" aria-label="Answer options">
          {q.options.map((opt, idx) => (
            <li key={idx} role="listitem">
              <button
                className={
                  selected === idx
                    ? idx === q.answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }
                aria-label={`Answer option: ${opt}`}
                onClick={() => handleAnswer(idx)}
                disabled={selected !== null}
                tabIndex={0}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
        {showExplanation && (
          <>
            <div className={`explanation ${selected === q.answer ? 'explanation-correct' : 'explanation-incorrect'}`} aria-live="polite" tabIndex={0}>
              <strong>{selected === q.answer ? "Correct!" : "Incorrect."}</strong>
              <p>{q.explanation}</p>
              <button onClick={nextQuestion} title="Next question" aria-label="Next question" tabIndex={0} style={{ lineHeight: '1.5', color: 'var(--primary)' }} >
                Next <CircleArrowRight size={20} color="var(--primary)" style={{ marginLeft: 8, verticalAlign: 'middle' }} />
              </button>
            </div>
            {q.securityTip && q.securityTip.trim() !== '' && (
              <div className="security-tip-box" style={{ marginTop: 18 }}>
                <span className="security-tip-label">Security Tip:</span> <span>{q.securityTip}</span>
              </div>
            )}
          </>
        )}
      </div>
      {/* Category Progress at the bottom */}
      <div className="category-progress-grid" style={{ marginTop: 36 }}>
        <h4 style={{ color: '#2151a1', fontWeight: 700, fontSize: 20, marginBottom: 16 }}>Category Progress</h4>
        <div className="donut-grid">
          {categories.map((cat, idx) => (
            <CategoryDonut
              key={cat}
              label={cat}
              value={progress[cat]}
              max={questions.filter(q => q.category === cat).length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
