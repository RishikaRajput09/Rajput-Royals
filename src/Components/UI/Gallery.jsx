"use client";

import Image from "next/image";
import Link from "next/link";

// Use 3 of your best images
// Left: portrait/tall works best | Right top & bottom: landscape works best
const images = {
  left: {
    src: "/Images/lawn9.jpg", 
    alt: "Enchanting Lawn Ambience",
    category: "Venues",
  },
  rightTop: {
    src: "/Images/buffet5.jpg",
    alt: "Luxury Cocktail Bar Setup",
    category: "Weddings",
  },
  rightBottom: {
    src: "/Images/lawn2.jpg",
    alt: "Elegant Buffet Counter",
    category: "Celebrations",
  },
};

export default function GalleryTeaser() {
  return (
    <>
      <style>{`
        .gt-section {
          background: var(--brown, #4A3A2A);
          padding: 110px 48px;
          overflow: hidden;
        }

        /* ── Header ── */
        .gt-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 52px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .gt-header-left {}

        .gt-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 600;   
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 12px;
          display: block;
        }

        .gt-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--ivory, #F7F3EE);
          margin: 0;
          line-height: 1.1;
        }

        .gt-heading em {
          font-style: italic;
          color: rgba(247,243,238,0.6);
        }

        /* right side of header — stat + cta */
        .gt-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        .gt-stat {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(0.9rem, 1.3vw, 1rem);
          font-style: italic;
          color: rgba(247,243,238,0.4);
          letter-spacing: 0.05em;
          text-align: right;
        }

        .gt-stat span {
          font-style: normal;
          font-weight: 400;
          color: var(--gold, #C9A46C);
        }

        .gt-view-all {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(247,243,238,0.7);
          border-bottom: 1px solid rgba(201,164,108,0.5);
          padding-bottom: 3px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s, border-color 0.3s;
        }

        .gt-view-all:hover {
          color: var(--gold, #C9A46C);
          border-color: var(--gold, #C9A46C);
        }

        .gt-arrow {
          display: inline-block;
          width: 22px; height: 1px;
          background: currentColor;
          position: relative;
          transition: width 0.3s;
        }

        .gt-arrow::after {
          content: '';
          position: absolute; right: 0; top: -3px;
          width: 6px; height: 6px;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
          transform: rotate(45deg);
        }

        .gt-view-all:hover .gt-arrow { width: 32px; }

        /* ── Asymmetric grid ── */
        .gt-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 14px;
          height: 640px;
        }

        /* left cell spans both rows */
        .gt-cell-left {
          grid-row: 1 / 3;
        }

        /* ── Each cell ── */
        .gt-cell {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        /* image zoom */
        .gt-cell-img {
          position: absolute !important;
          inset: 0;
          object-fit: cover; 
          transition: transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gt-cell:hover .gt-cell-img {
          transform: scale(1.06);
        }

        /* gradient overlay */
        .gt-cell-grad {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(20,12,4,0.05) 0%,
            rgba(20,12,4,0.1) 100%
          );
          transition: background 0.5s ease;
        }

        .gt-cell:hover .gt-cell-grad {
          background: linear-gradient(
            to bottom,
            rgba(20,12,4,0.1) 0%,
            rgba(20,12,4,0.75) 100%
          );
        }

        /* gold top sweep */
        .gt-cell::before {
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

        .gt-cell:hover::before { transform: scaleX(1); }

        /* content block */
        .gt-cell-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 28px 26px;
          transform: translateY(8px);
          transition: transform 0.45s ease;
        }

        .gt-cell:hover .gt-cell-body {
          transform: translateY(0);
        }

        /* category pill */
        .gt-cell-cat {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.48rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          display: block;
          margin-bottom: 8px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
        }

        .gt-cell:hover .gt-cell-cat { opacity: 1; transform: translateY(0); }

        /* image title */
        .gt-cell-title {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(247,243,238,0.92);
          letter-spacing: 0.03em;
          line-height: 1.2;
        }

        /* thin gold rule under title */
        .gt-cell-rule {
          display: flex; align-items: center; gap: 8px;
          margin-top: 10px;
          opacity: 0; transform: translateY(6px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .gt-cell:hover .gt-cell-rule { opacity: 1; transform: translateY(0); }

        .gcr-line { width: 28px; height: 1px; background: rgba(201,164,108,0.55); }
        .gcr-gem  { width: 4px; height: 4px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink:0; }

        /* ── Bottom CTA strip ── */
        .gt-bottom {
          max-width: 1200px;
          margin: 40px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gt-bottom-line {
          flex: 1; height: 1px;
          background: rgba(201,164,108,0.15);
        }

        .gt-bottom-text {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-style: italic;
          font-size: clamp(0.9rem, 1.3vw, 1.05rem);
          color: rgba(247,243,238,0.3);
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .gt-cta-btn {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold, #C9A46C);
          color: #fff;
          border: 1px solid var(--gold, #C9A46C);
          padding: 12px 30px;
          position: relative; overflow: hidden;
          display: inline-block;
          transition: box-shadow 0.32s;
        }

        .gt-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown, #4A3A2A);
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.32s ease;
        }

        .gt-cta-btn:hover::before { transform: scaleX(1); transform-origin: left; }
        .gt-cta-btn:hover { box-shadow: 0 5px 22px rgba(201,164,108,0.3); }
        .gt-cta-btn span { position: relative; z-index: 1; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .gt-section { padding: 80px 28px; }
          .gt-grid {
            grid-template-columns: 1fr 1fr;
            height: 480px;
          }
          .gt-header { flex-direction: column; align-items: flex-start; }
          .gt-header-right { align-items: flex-start; }
          .gt-stat { text-align: left; }
        }

        @media (max-width: 560px) {
          .gt-section { padding: 64px 20px; }
          .gt-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 380px 220px 220px;
            height: auto;
          }
          .gt-cell-left { grid-row: auto; }
          .gt-bottom { flex-direction: column; align-items: center; text-align: center; }
          .gt-bottom-line { display: none; }
        }
      `}</style>

      <section className="gt-section" id="gallery">

        {/* Header */}
        <div className="gt-header">
          <div className="gt-header-left">
            <span className="gt-eyebrow">Captured Moments</span>
            <h2 className="gt-heading">
              Moments Fit<br />for <em>Royalty</em>
            </h2>
          </div>

          <div className="gt-header-right">
            <p className="gt-stat">
              <span>120+</span> photographs &nbsp;·&nbsp; <span>500+</span> celebrations
            </p>
            <Link href="/Gallery" className="gt-view-all">
              View Full Gallery
              <span className="gt-arrow" />
            </Link>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="gt-grid">

          {/* Left — large tall */}
          <div className="gt-cell gt-cell-left">
            <Image
              src={images.left.src}
              alt={images.left.alt}
              fill
              className="gt-cell-img"
              quality={90}
            />
            <div className="gt-cell-grad" />
            <div className="gt-cell-body">
              <span className="gt-cell-cat">{images.left.category}</span>
              <p className="gt-cell-title">{images.left.alt}</p>
              <div className="gt-cell-rule">
                <span className="gcr-line" /><span className="gcr-gem" /><span className="gcr-line" />
              </div>
            </div>
          </div>

          {/* Right top */}
          <div className="gt-cell">
            <Image
              src={images.rightTop.src}
              alt={images.rightTop.alt}
              fill
              className="gt-cell-img"
              quality={90}
            />
            <div className="gt-cell-grad" />
            <div className="gt-cell-body">
              <span className="gt-cell-cat">{images.rightTop.category}</span>
              <p className="gt-cell-title">{images.rightTop.alt}</p>
              <div className="gt-cell-rule">
                <span className="gcr-line" /><span className="gcr-gem" /><span className="gcr-line" />
              </div>
            </div>
          </div>

          {/* Right bottom */}
          <div className="gt-cell">
            <Image
              src={images.rightBottom.src}
              alt={images.rightBottom.alt}
              fill
              className="gt-cell-img"
              quality={90}
            />
            <div className="gt-cell-grad" />
            <div className="gt-cell-body">
              <span className="gt-cell-cat">{images.rightBottom.category}</span>
              <p className="gt-cell-title">{images.rightBottom.alt}</p>
              <div className="gt-cell-rule">
                <span className="gcr-line" /><span className="gcr-gem" /><span className="gcr-line" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="gt-bottom">
          <span className="gt-bottom-line" />
          <p className="gt-bottom-text">~ Every celebration deserves to be remembered ~</p>
          <span className="gt-bottom-line" />
          <Link href="/Gallery" className="gt-cta-btn">
            <span>Explore Gallery</span>
          </Link>
        </div>

      </section>
    </>
  );
}