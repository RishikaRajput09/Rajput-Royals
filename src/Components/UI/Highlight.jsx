"use client";

import Image from "next/image";

const highlights = [
  {
    id: 1,
    eyebrow: "Spaces & Décor",
    title: "Lavish Design & Grandeur",
    desc: "From beautifully designed wedding décor and venue styling to marigold-draped mandaps, crystal chandeliers, and silk-draped arches, every detail is curated to create a stunning and memorable wedding setting.",
    img: "/Images/pot.jpg",
    cta: "Explore Spaces",
    href: "#amenities",
  },
  {
    id: 2,
    eyebrow: "Ceremonies & Events",
    title: "Weddings Woven in Royalty",
    desc: "From intimate Haldi and Mehendi functions to grand wedding ceremonies and Baraat processions, our expert team manages every event with seamless planning, ensuring a smooth and unforgettable celebration.",
    img: "/Images/fav.jpg",
    cta: "View Events",
    href: "/Gallery",
  },
  {
    id: 3,
    eyebrow: "Hospitality & Service",
    title: "Service That Inspires",
    desc: "From arrival to farewell, our dedicated team ensures every guest feels cherished. Experience premium wedding hospitality, catering services, and seamless event coordination, with care that goes beyond expectation.",
    img: "/Images/deco.jpg",
    cta: "Learn More",
    href: "#about",
  },
];

export default function HighlightsSection() {
  return (
    <>
      <style>{`
        .hl-section {
          background: var(--ivory, #F7F3EE);
          padding: 100px 48px;
          overflow: hidden;
        }

        /* ── Header ── */
        .hl-header {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          margin-bottom: 64px;
        }

        .hl-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem; letter-spacing: 0.48em;
          font-weight: 600;   
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 14px;
        }

        .hl-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 300; letter-spacing: 0.02em;
          color: var(--brown, #4A3A2A);
          margin: 0 0 20px;
        }

        .hl-rule { display: flex; align-items: center; gap: 10px; }
        .hl-rl   { width: 56px; height: 1px; background: rgba(201,164,108,0.45); }
        .hl-gem  { width: 5px; height: 5px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink: 0; }

        /* ── Cards grid ── */
        .hl-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* ── Single card ── */
        .hl-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3/4;
        }

        /* image zoom on hover */
        .hl-card-img {
          position: absolute !important;
          inset: 0;
          z-index: 0;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .hl-card:hover .hl-card-img {
          transform: scale(1.08);
        }

        /* persistent dark gradient at bottom */
        .hl-card-grad {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(20,12,4,0.08) 0%,
            rgba(20,12,4,0.12) 40%,
            rgba(20,12,4,0.72) 75%,
            rgba(20,12,4,0.92) 100%
          );
          transition: background 0.5s ease;
        }

        .hl-card:hover .hl-card-grad {
          background: linear-gradient(
            to bottom,
            rgba(20,12,4,0.15) 0%,
            rgba(20,12,4,0.25) 35%,
            rgba(20,12,4,0.82) 68%,
            rgba(20,12,4,0.96) 100%
          );
        }

        /* gold top accent line */
        .hl-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold, #C9A46C);
          z-index: 3;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s ease;
        }

        .hl-card:hover::after {
          transform: scaleX(1);
        }

        /* ── Card content ── */
        .hl-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
          /* text slides up on hover */
          transform: translateY(52px);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hl-card:hover .hl-card-body {
          transform: translateY(0);
        }

        .hl-card-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.5rem; letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 10px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
        }

        .hl-card:hover .hl-card-eyebrow {
          opacity: 1; transform: translateY(0);
        }

        .hl-card-title {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.35rem, 2vw, 1.75rem);
          font-weight: 300; line-height: 1.2;
          color: #fff; letter-spacing: 0.02em;
          margin: 0 0 14px;
        }

        /* thin gold rule under title */
        .hl-card-rule {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 14px;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .hl-card:hover .hl-card-rule { opacity: 1; transform: translateY(0); }

        .hcr-line { width: 32px; height: 1px; background: rgba(201,164,108,0.6); }
        .hcr-gem  { width: 4px; height: 4px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink:0; }

        .hl-card-desc {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(247,243,238,0.72);
          margin-bottom: 20px;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
        }

        .hl-card:hover .hl-card-desc { opacity: 1; transform: translateY(0); }

        .hl-card-cta {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.52rem; letter-spacing: 0.28em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--gold, #C9A46C);
          display: flex; align-items: center; gap: 8px;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s, color 0.3s;
        }

        .hl-card:hover .hl-card-cta { opacity: 1; transform: translateY(0); }
        .hl-card-cta:hover { color: #fff; }

        .cta-arrow {
          display: inline-block;
          width: 20px; height: 1px;
          background: var(--gold, #C9A46C);
          position: relative;
          transition: width 0.3s ease;
        }

        .cta-arrow::after {
          content: '';
          position: absolute; right: 0; top: -3px;
          width: 6px; height: 6px;
          border-top: 1px solid var(--gold, #C9A46C);
          border-right: 1px solid var(--gold, #C9A46C);
          transform: rotate(45deg);
        }

        .hl-card-cta:hover .cta-arrow { width: 30px; }

        /* ── Bottom tagline ── */
        .hl-footer {
          max-width: 1200px;
          margin: 52px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .hl-footer-line { flex: 1; height: 1px; background: rgba(74,58,42,0.12); }

        .hl-footer-text {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-style: italic;
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 300;
          color: rgba(74,58,42,0.45);
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hl-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .hl-card:nth-child(3) { grid-column: 1 / -1; aspect-ratio: 16/7; }
        }

        @media (max-width: 580px) {
          .hl-section { padding: 72px 20px; }
          .hl-grid { grid-template-columns: 1fr; }
          .hl-card:nth-child(3) { grid-column: auto; aspect-ratio: 3/4; }
          .hl-card-body { transform: translateY(0); }
          .hl-card-eyebrow,
          .hl-card-rule,
          .hl-card-desc,
          .hl-card-cta { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hl-section" id="highlights">

        {/* Header */}
        <div className="hl-header">
          <p className="hl-eyebrow">The Rajput Royals Experience</p>
          <h2 className="hl-heading">Everything a Royal Wedding Deserves</h2>
          <div className="hl-rule">
            <span className="hl-rl" /><span className="hl-gem" /><span className="hl-rl" />
          </div>
        </div>

        {/* Cards */}
        <div className="hl-grid">
          {highlights.map((h) => (
            <div className="hl-card" key={h.id}>

              {/* Background image */}
              <Image
                src={h.img}
                alt={h.title}
                fill
                className="hl-card-img"
                quality={90}
              />

              {/* Gradient overlay */}
              <div className="hl-card-grad" />

              {/* Slide-up text */}
              <div className="hl-card-body">
                <span className="hl-card-eyebrow">{h.eyebrow}</span>
                <h3 className="hl-card-title">{h.title}</h3>

                <div className="hl-card-rule">
                  <span className="hcr-line" /><span className="hcr-gem" /><span className="hcr-line" />
                </div>

                <p className="hl-card-desc">{h.desc}</p>

                <a href={h.href} className="hl-card-cta">
                  {h.cta}
                  <span className="cta-arrow" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="hl-footer">
          <span className="hl-footer-line" />
          <p className="hl-footer-text">~ Where every celebration becomes a legacy ~</p>
          <span className="hl-footer-line" />
        </div>

      </section>
    </>
  );
}