"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const typingWords = [
  "Wedding",
  "Reception",
  "Engagement",
  "Haldi Ceremony",
  "Mehendi Night",
  "Sangeet Evening",
  "Birthday Gala",
  "Anniversary",
];

export default function WelcomeSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = typingWords[wordIndex];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 85);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % typingWords.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, wordIndex]);

  return (
    <>
      <style>{`
        /* inherits :root vars from Navbar/Hero */

        .welcome-section {
          background: var(--ivory, #F7F3EE);
          padding: 100px 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .welcome-inner {
          max-width: 1180px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Left copy ── */
        .welcome-copy { display: flex; flex-direction: column; gap: 0; }

        .welcome-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 20px;
        }

        .welcome-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          line-height: 1.25;
          color: var(--brown, #4A3A2A);
          margin: 0 0 28px;
          letter-spacing: 0.02em;
        }

        /* divider */
        .welcome-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .wd-line {
          height: 1px;
          width: 48px;
          background: var(--gold, #C9A46C);
          opacity: 0.55;
        }

        .wd-gem {
          width: 5px; height: 5px;
          background: var(--gold, #C9A46C);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* typing row */
        .welcome-typing-row {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .typing-prefix {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1rem, 1.6vw, 1.2rem);
          font-weight: 400;
          color: #8a7560;
          letter-spacing: 0.03em;
        }

        .typing-word {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          font-weight: 400;
          font-style: italic;
          color: var(--brown, #4A3A2A);
          letter-spacing: 0.02em;
          min-width: 2px;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--gold, #C9A46C);
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 0.85s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* body text */
        .welcome-body {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(0.95rem, 1.4vw, 1.08rem);
          font-weight: 400;
          line-height: 1.8;
          color: #7a6a55;
          margin-bottom: 40px;
          max-width: 420px;
        }

        /* CTA buttons */
        .welcome-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .wbtn-primary {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold, #C9A46C);
          color: #fff;
          border: 1px solid var(--gold, #C9A46C);
          padding: 13px 30px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.32s ease;
          display: inline-block;
        }

        .wbtn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown, #4A3A2A);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.32s ease;
        }

        .wbtn-primary:hover::before { transform: scaleX(1); transform-origin: left; }
        .wbtn-primary:hover { box-shadow: 0 5px 22px rgba(201,164,108,0.35); }
        .wbtn-primary span { position: relative; z-index: 1; }

        .wbtn-outline {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          background: transparent;
          color: var(--brown, #4A3A2A);
          border: 1px solid rgba(74,58,42,0.35);
          padding: 13px 30px;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
          display: inline-block;
        }

        .wbtn-outline:hover {
          border-color: var(--gold, #C9A46C);
          color: var(--gold, #C9A46C);
        }

        /* ── Right image ── */
        .welcome-image-wrap {
          position: relative;
        }

        /* gold border frame offset */
        .welcome-image-wrap::before {
          content: '';
          position: absolute;
          top: -16px; right: -16px;
          bottom: 16px; left: 16px;
          border: 1px solid rgba(201, 164, 108, 0.45);
          z-index: 0;
          pointer-events: none;
        }

        /* subtle corner accent */
        .welcome-image-wrap::after {
          content: '';
          position: absolute;
          bottom: -16px; left: -16px;
          top: 16px; right: 16px;
          border: 1px solid rgba(201, 164, 108, 0.2);
          z-index: 0;
          pointer-events: none;
        }

        .welcome-img {
          position: relative;
          z-index: 1;
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
        }

        /* gold caption tag */
        .welcome-img-tag {
          position: absolute;
          bottom: 28px;
          left: -20px;
          z-index: 2;
          background: var(--gold, #C9A46C);
          color: #fff;
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.52rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 10px 20px;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .welcome-section { padding: 72px 28px; }
          .welcome-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .welcome-image-wrap { order: -1; }
          .welcome-image-wrap::before,
          .welcome-image-wrap::after { display: none; }
          .welcome-img-tag { left: 0; bottom: 16px; }
          .welcome-body { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .welcome-section { padding: 56px 20px; }
          .welcome-heading { font-size: 1.8rem; }
        }
      `}</style>

      <section className="welcome-section" id="about">
        <div className="welcome-inner">

          {/* Left — copy */}
          <div className="welcome-copy">
            <p className="welcome-eyebrow">A Royal Experience Awaits</p>

            <h2 className="welcome-heading">
              A Perfect Venue for<br />a Perfect Celebration
            </h2>

            <div className="welcome-divider">
              <span className="wd-line" />
              <span className="wd-gem" />
              <span className="wd-line" />
            </div>

            <div className="welcome-typing-row">
              <span className="typing-prefix">Your dream</span>
              <span>
                <span className="typing-word">{displayed}</span>
                <span className="typing-cursor" />
              </span>
              <span className="typing-prefix">deserves a royal setting.</span>
            </div>

            <p className="welcome-body">
              Nestled in the heart of Sangli-Miraj, Rajput Royals is a luxury wedding and event venue, offering breathtaking spaces, impeccable service and timeless elegance, crafted to make
              every moment of your celebration feel truly legendary.
            </p>

            <div className="welcome-ctas">
              <a href="#book" className="wbtn-primary">
                <span>Schedule a Visit</span>
              </a>
              <a href="#contact" className="wbtn-outline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="welcome-image-wrap">
            <Image
              src="/Images/stage.jpg"
              alt="Rajput Royals — Decorated Stage"
              width={620}
              height={465}
              className="welcome-img"
              quality={92}
            />
            <span className="welcome-img-tag">Est. 2005 · Miraj</span>
          </div>

        </div>
      </section>
    </>
  );
}