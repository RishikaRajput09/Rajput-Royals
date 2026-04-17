"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { num: "20+", label: "Years of Excellence" },
  { num: "500+", label: "Royal Weddings" },
  { num: "10+", label: "Signature Settings" },
  { num: "7", label: "Acres of Estate" },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        .about-section {
          background: var(--ivory, #F7F3EE);
          padding: 110px 48px;
          overflow: hidden;
        }

        /* ── Layout ── */
        .about-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: center;
        }

        /* ════════════════════════
           LEFT — image
        ════════════════════════ */
        .about-img-wrap {
          position: relative;
          /* room for offset frame */
          padding: 20px 20px 0 0;
        }

        /* main image */
        .about-img {
          position: relative;
          z-index: 1;
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
        }

        /* back gold frame — offset bottom-right */
        .about-img-wrap::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border: 1px solid rgba(201,164,108,0.5);
          transform: translate(20px, 20px);
          z-index: 0;
          pointer-events: none;
        }

        /* front subtle inner frame */
        .about-img-wrap::after {
          content: '';
          position: absolute;
          top: 20px; left: 0;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border: 1px solid rgba(201,164,108,0.18);
          transform: translate(-8px, -8px);
          z-index: 2;
          pointer-events: none;
        }

        /* gold tag on image */
        .about-img-tag {
          position: absolute;
          bottom: 28px;
          right: -1px;
          z-index: 3;
          background: var(--gold, #C9A46C);
          color: #fff;
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 10px 20px;
        }

        /* year badge — floats top-left */
        .about-year-badge {
          position: absolute;
          top: 0; left: -24px;
          z-index: 4;
          background: var(--brown, #4A3A2A);
          color: var(--ivory, #F7F3EE);
          width: 88px; height: 88px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 1px;
        }

        .badge-since {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.42rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
        }

        .badge-year {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--ivory, #F7F3EE);
          line-height: 1;
        }

        /* ════════════════════════
           RIGHT — copy
        ════════════════════════ */
        .about-copy {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .about-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 600;   
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 16px;
        }

        .about-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 300;
          line-height: 1.15;
          color: var(--brown, #4A3A2A);
          margin: 0 0 10px;
          letter-spacing: 0.02em;
        }

        .about-heading em {
          font-style: italic;
          color: rgba(74,58,42,0.7);
        }

        /* mission line */
        .about-mission {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          font-style: italic;
          font-weight: 300;
          color: var(--gold, #C9A46C);
          letter-spacing: 0.05em;
          margin-bottom: 28px;
        }

        .about-divider {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 28px;
        }

        .about-dl  { width: 40px; height: 1px; background: rgba(201,164,108,0.45); }
        .about-dg  { width: 5px; height: 5px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink: 0; }

        /* story paragraphs */
        .about-p {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(0.95rem, 1.3vw, 1.08rem);
          font-weight: 400;
          line-height: 1.85;
          color: #7a6a55;
          margin-bottom: 16px;
        }

        .about-p:last-of-type { margin-bottom: 40px; }

        /* ── Stats strip ── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(201,164,108,0.25);
          margin-bottom: 40px;
        }

        .about-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 12px;
          gap: 4px;
          border-right: 1px solid rgba(201,164,108,0.2);
          transition: background 0.3s;
        }

        .about-stat:last-child { border-right: none; }
        .about-stat:hover { background: rgba(201,164,108,0.06); }

        .about-stat-num {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          font-weight: 300;
          color: var(--brown, #4A3A2A);
          line-height: 1;
        }

        .about-stat-lbl {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.52rem;          
          font-weight: 500;            
          letter-spacing: 0.22em;      
          text-transform: uppercase;
          color: rgba(74,58,42,0.75);  
          text-align: center;
        }

        /* CTA */
        .about-cta {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold, #C9A46C);
          color: #fff;
          border: 1px solid var(--gold, #C9A46C);
          padding: 13px 32px;
          position: relative;
          overflow: hidden;
          display: inline-block;
          align-self: flex-start;
          transition: box-shadow 0.32s ease;
        }

        .about-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown, #4A3A2A);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.32s ease;
        }

        .about-cta:hover::before { transform: scaleX(1); transform-origin: left; }
        .about-cta:hover { box-shadow: 0 5px 22px rgba(201,164,108,0.32); }
        .about-cta span { position: relative; z-index: 1; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-section { padding: 80px 28px; }
          .about-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .about-img-wrap { padding: 16px 16px 0 0; max-width: 480px; margin: 0 auto; }
          .about-year-badge { left: -12px; width: 76px; height: 76px; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-stats .about-stat:nth-child(2) { border-right: none; }
          .about-stats .about-stat:nth-child(1),
          .about-stats .about-stat:nth-child(2) {
            border-bottom: 1px solid rgba(201,164,108,0.2);
          }
        }

        @media (max-width: 480px) {
          .about-section { padding: 64px 20px; }
          .about-heading { font-size: 1.9rem; }
          .about-cta { align-self: stretch; text-align: center; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-inner">

          {/* ── Left: Image ── */}
          <div className="about-img-wrap">
            {/* Est. year badge */}
            <div className="about-year-badge">
              <span className="badge-since">Since</span>
              <span className="badge-year">2005</span>
            </div>

            {/* Place your about image at /public/Images/about.png */}
            <Image
              src="/Images/entrance4.jpg"
              alt="Rajput Royals — Our Story"
              width={560}
              height={747}
              className="about-img"
              quality={92}
            />

            <span className="about-img-tag">Est. 2005 · Sangli-Miraj</span>
          </div>

          {/* ── Right: Copy ── */}
          <div className="about-copy">
            <p className="about-eyebrow">Our Story</p>

            <h2 className="about-heading">
              A Legacy Built on<br /><em>Love & Grandeur</em>
            </h2>

            <p className="about-mission">
              "Creating celebrations that echo through generations."
            </p>

            <div className="about-divider">
              <span className="about-dl" />
              <span className="about-dg" />
              <span className="about-dl" />
            </div>

            <p className="about-p">
              Founded in 2005 by the Rajput family, Rajput Royals was born from a
              singular dream, to offer families a venue where their most sacred
              celebrations could unfold in surroundings worthy of royalty. What
              began as a single banquet hall has grown into one of Sangli's
              most cherished wedding destinations.
            </p>

            <p className="about-p">
              Sprawling across 7 acres of lush, serene surroundings, tucked away from the hustle and bustle of the city, yet easily accessible. Located near the Miraj Bus Stand on the Ratnagiri–Nagpur Highway, this wedding venue in Sangli–Miraj offers easy access, ample parking, and flexible capacity to host gatherings of all sizes. The venue features a beautifully designed Haldi ceremony stage, a spacious dining area with a dedicated buffet section, and expansive outdoor lawns for weddings and events, creating the perfect setting for memorable celebrations supported by impeccable service that has defined us for two decades.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            <Link href="#contact" className="about-cta">
              <span>Get in Touch</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}