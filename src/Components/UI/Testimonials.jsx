"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Rajput Royals didn't just host our wedding — they orchestrated a dream. Every flower, every light, every moment was crafted with such care that our guests still talk about it to this day.",
    name: "Sagar Thakur",
    event: "Royal Wedding",
    img: "/Images/ban4.jpg",
    stars: 5,
  },
  {
    id: 2,
    quote: "From the very first meeting to the final farewell, the team at Rajput Royals made us feel like royalty. The mandap was breathtaking and the food was absolutely divine.",
    name: "Tushar Meghani",
    event: "Wedding & Reception",
    img: "/Images/LAWN.jpg",
    stars: 5,
  },
  {
    id: 3,
    quote: "We hosted our daughter's engagement here and could not have asked for a more magical setting. The open sky lawn at dusk was something straight out of a fairytale.",
    name: "Jitesh Kukreja",
    event: "Engagement Ceremony",
    img: "/Images/lawn9.jpg",
    stars: 5,
  },
  {
    id: 4,
    quote: "The Haldi and Mehendi setups were beyond our expectations. So much thought had gone into the decor and the staff ensured every ritual ran seamlessly. Truly world-class.",
    name: "Pratik Shaha",
    event: "Haldi & Mehendi",
    img: "/Images/hal3.jpg",
    stars: 5,
  },
  {
    id: 5,
    quote: "We've attended many weddings, but Rajput Royals stands out as a well-managed wedding venue in Sangli–Miraj. The attention to detail and the warmth of the staff make it a truly pleasant and memorable experience.",
    name: "Dipali Salve",
    event: "Reception",
    img: "/Images/lawn10.jpg",
    stars: 5,
  },  
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(null);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (i) => {
    if (animating || i === active) return;
    setAnimating(true);
    setPrevActive(active);
    setActive(i);
    setTimeout(() => {
      setPrevActive(null);
      setAnimating(false);
    }, 600);
  };

  const next = () => goTo((active + 1) % testimonials.length);
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate every 5s
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const current = testimonials[active];

  return (
    <>
      <style>{`
        .tm-section {
          background: var(--brown, #4A3A2A);
          overflow: hidden;
          position: relative;
        }

        /* ── Split layout ── */
        .tm-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 620px;
        }

        /* ════════════════════
           LEFT — quote side
        ════════════════════ */
        .tm-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 64px 90px 72px;
          position: relative;
          z-index: 2;
        }

        /* eyebrow */
        .tm-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 600;   
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 32px;
        }

        /* giant decorative quote mark */
        .tm-big-quote {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 9rem;
          line-height: 0.6;
          color: rgba(201,164,108,0.18);
          margin-bottom: 24px;
          user-select: none;
          display: block;
        }

        /* quote text */
        .tm-quote {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.75;
          color: rgba(247,243,238,0.88);
          letter-spacing: 0.02em;
          margin-bottom: 36px;
          animation: tmQuoteIn 0.6s ease both;
        }

        @keyframes tmQuoteIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* divider */
        .tm-div {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 24px;
        }

        .tm-dl { width: 36px; height: 1px; background: rgba(201,164,108,0.4); }
        .tm-dg { width: 4px; height: 4px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink:0; }

        /* author */
        .tm-author {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
          animation: tmQuoteIn 0.6s ease 0.1s both;
        }

        .tm-name {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          color: var(--ivory, #F7F3EE);
        }

        .tm-meta {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.88rem;
          font-style: italic;
          color: var(--gold, #C9A46C);
          letter-spacing: 0.05em;
        }

        /* stars */
        .tm-stars {
          display: flex; gap: 4px;
          margin-bottom: 48px;
          animation: tmQuoteIn 0.6s ease 0.15s both;
        }

        .tm-star {
          color: var(--gold, #C9A46C);
          font-size: 0.75rem;
        }

        /* ── Controls ── */
        .tm-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .tm-btn {
          width: 46px; height: 46px;
          border: 1px solid rgba(201,164,108,0.35);
          background: transparent;
          color: rgba(247,243,238,0.6);
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }

        .tm-btn:hover {
          background: var(--gold, #C9A46C);
          color: #fff;
          border-color: var(--gold, #C9A46C);
        }

        /* dots */
        .tm-dots {
          display: flex; gap: 8px; align-items: center;
        }

        .tm-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(201,164,108,0.25);
          border: none; cursor: pointer; padding: 0;
          transition: background 0.3s, transform 0.3s;
        }

        .tm-dot.active {
          background: var(--gold, #C9A46C);
          transform: scale(1.4);
        }

        .tm-count {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.5rem;
          letter-spacing: 0.25em;
          color: rgba(247,243,238,0.3);
          margin-left: 4px;
        }

        .tm-count span { color: var(--gold, #C9A46C); }

        /* ════════════════════
           RIGHT — image side
        ════════════════════ */
        .tm-right {
          position: relative;
          overflow: hidden;
        }

        /* vertical gold divider line */
        .tm-right::before {
          content: '';
          position: absolute;
          top: 10%; bottom: 10%;
          left: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(201,164,108,0.4) 30%,
            rgba(201,164,108,0.4) 70%,
            transparent
          );
          z-index: 3;
        }

        .tm-img {
          object-fit: cover;
          transition: opacity 0.6s ease, transform 0.8s ease;
        }

        .tm-img.fade-out {
          opacity: 0;
          transform: scale(1.04);
        }

        /* dark overlay on image */
        .tm-img-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to right,
            rgba(20,12,4,0.35) 0%,
            transparent 50%
          );
        }

        /* image label */
        .tm-img-label {
          position: absolute;
          bottom: 28px; right: 28px;
          z-index: 2;
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.48rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.5);
          background: rgba(15,8,2,0.4);
          backdrop-filter: blur(6px);
          padding: 7px 14px;
          border: 1px solid rgba(201,164,108,0.2);
        }

        /* progress bar on image bottom */
        .tm-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: var(--gold, #C9A46C);
          z-index: 4;
          animation: tmProg 5s linear infinite;
        }

        @keyframes tmProg {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .tm-inner { grid-template-columns: 1fr; min-height: auto; }
          .tm-right { height: 320px; }
          .tm-right::before { display: none; }
          .tm-left { padding: 64px 32px; }
        }

        @media (max-width: 480px) {
          .tm-left { padding: 56px 20px; }
          .tm-big-quote { font-size: 6rem; }
        }
      `}</style>

      <section className="tm-section" id="testimonials">
        <div className="tm-inner">

          {/* ── Left: Quote ── */}
          <div className="tm-left">
            <p className="tm-eyebrow">What Our Families Say</p>

            <span className="tm-big-quote">"</span>

            <p className="tm-quote" key={`quote-${active}`}>
              {current.quote}
            </p>

            <div className="tm-div">
              <span className="tm-dl" /><span className="tm-dg" /><span className="tm-dl" />
            </div>

            <div className="tm-author" key={`author-${active}`}>
              <span className="tm-name">{current.name}</span>
              <span className="tm-meta">{current.event} </span>
            </div>

            <div className="tm-stars" key={`stars-${active}`}>
              {Array.from({ length: current.stars }).map((_, i) => (
                <span className="tm-star" key={i}>★</span>
              ))}
            </div>

            {/* Controls */}
            <div className="tm-controls">
              <button className="tm-btn" onClick={prev} aria-label="Previous">←</button>
              <button className="tm-btn" onClick={next} aria-label="Next">→</button>

              <div className="tm-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`tm-dot ${active === i ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <span className="tm-count">
                <span>{String(active + 1).padStart(2, "0")}</span>
                {" / "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="tm-right">
            <Image
              src={current.img}
              alt={current.name}
              fill
              className={`tm-img ${animating ? "fade-out" : ""}`}
              quality={90}
              key={`img-${active}`}
            />
            <div className="tm-img-overlay" />
            <span className="tm-img-label">{current.event}</span>
            <div className="tm-progress" key={`prog-${active}`} />
          </div>

        </div>
      </section>
    </>
  );
}