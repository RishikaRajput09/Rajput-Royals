"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { id: 1,  src: "/Images/ban2.jpg",  alt: "Vidhi Mandap Ceremony",    category: "weddings",     span: "short" },
  { id: 2,  src: "/Images/hal2.jpg",  alt: "Grand Banquet Hall",       category: "venues",       span: "tall" },
  { id: 3,  src: "/Images/lawn4.jpg",  alt: "Haldi Stage Setup",        category: "celebrations", span: "short" },
  { id: 4,  src: "/Images/entrance1.jpg",  alt: "Bridal Entry",             category: "weddings",     span: "tall" },
  { id: 5,  src: "/Images/fav.jpg",    alt: "Mehendi Ceremony",         category: "celebrations", span: "tall" },
  { id: 6,  src: "/Images/lawn6.jpg",    alt: "Floral Arch Decor",        category: "decor",        span: "short" },
  { id: 7,  src: "/Images/6.jpeg",    alt: "Open Sky Lawn at Night",   category: "venues",       span: "tall" },
  { id: 8,  src: "/Images/buffet4.jpg",    alt: "Table Setup & Buffet",     category: "decor",        span: "short" },
  { id: 9,  src: "/Images/sangeet.jpeg",    alt: "Sangeet Night",            category: "celebrations", span: "short" },
  { id: 10, src: "/Images/entrance4.jpg",   alt: "Couple Portrait",          category: "weddings",     span: "tall" },
  { id: 11, src: "/Images/entrance3.jpg",   alt: "Grand Entrance Gate",      category: "venues",       span: "short" },
  { id: 12, src: "/Images/entrance8.jpeg",   alt: "Mandap Close-up",          category: "decor",        span: "tall" },
  { id: 13, src: "/Images/chandelier.jpg",   alt: "Royal Suite Room",         category: "venues",       span: "tall" },
  { id: 14, src: "/Images/vidhi3.jpeg",   alt: "Baraat Procession",        category: "weddings",     span: "short" },
  { id: 15, src: "/Images/deco.jpg",   alt: "Royal Suite Room",         category: "venues",       span: "tall" },
  { id: 16, src: "/Images/vidhi2.jpeg",   alt: "Engagement Ring Ceremony", category: "celebrations", span: "short" },
];

const filters = [
  { key: "all",          label: "All" },
  { key: "weddings",     label: "Weddings" },
  { key: "decor",        label: "Décor" },
  { key: "celebrations", label: "Celebrations" },
  { key: "venues",       label: "Venues" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() => setLightbox((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImg = useCallback(() => setLightbox((i) => (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prevImg, nextImg, closeLightbox]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

        :root {
          --ivory: #F7F3EE;
          --brown: #4A3A2A;
          --gold:  #C9A46C;
          --font-display: 'Cormorant Garamond', serif;
          --font-caps:    'Cinzel', serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .gp-page {
          background: var(--ivory);
          min-height: 100vh;
        }

        /* ── Page Hero Banner ── */
        .gp-banner {
          background: var(--brown);
          padding: 120px 48px 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* subtle diagonal pattern */
        .gp-banner::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(201,164,108,0.03) 0px,
            rgba(201,164,108,0.03) 1px,
            transparent 1px,
            transparent 40px
          );
          pointer-events: none;
        }

        /* bottom gold fade */
        .gp-banner::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,164,108,0.5), transparent);
        }

        .gp-banner-back {
          position: absolute;
          top: 28px; left: 48px;
          z-index: 2;
          font-family: var(--font-caps);
          font-size: 0.52rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(247,243,238,0.45);
          display: flex; align-items: center; gap: 8px;
          transition: color 0.3s;
        }

        .gp-banner-back:hover { color: var(--gold); }

        .gp-banner-back-arrow {
          display: inline-block;
          width: 18px; height: 1px;
          background: currentColor;
          position: relative;
        }

        .gp-banner-back-arrow::before {
          content: '';
          position: absolute; left: 0; top: -3px;
          width: 6px; height: 6px;
          border-left: 1px solid currentColor;
          border-bottom: 1px solid currentColor;
          transform: rotate(45deg);
        }

        .gp-banner-eyebrow {
          font-family: var(--font-caps);
          font-size: 0.58rem;
          letter-spacing: 0.48em;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }

        .gp-banner-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 300;
          color: var(--ivory);
          letter-spacing: 0.03em;
          margin-bottom: 10px;
          position: relative; z-index: 1;
        }

        .gp-banner-title em {
          font-style: italic;
          color: rgba(247,243,238,0.7);
        }

        .gp-banner-sub {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-style: italic;
          font-weight: 300;
          color: rgba(247,243,238,0.75);
          letter-spacing: 0.05em;
          position: relative; z-index: 1;
          margin-top: 10px;
        }

        .gp-banner-rule {
          display: flex; align-items: center;
          gap: 10px; margin: 20px 0 0;
          position: relative; z-index: 1;
        }

        .gbr-line { width: 56px; height: 1px; background: rgba(201,164,108,0.4); }
        .gbr-gem  { width: 5px; height: 5px; background: var(--gold); transform: rotate(45deg); flex-shrink:0; }

        /* ── Main content ── */
        .gp-main {
          padding: 72px 48px 100px;
        }

        /* ── Filters ── */
        .gp-filters {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px;
          margin-bottom: 16px;
        }

        .gp-filter {
          font-family: var(--font-caps);
          font-size: 0.58rem; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5c4a36;
          background: transparent;
          border: 1px solid rgba(74,58,42,0.25);
          padding: 10px 24px; cursor: pointer;
          transition: color .3s, border-color .3s, background .3s;
        }

        .gp-filter:hover {
          color: var(--gold);
          border-color: rgba(201,164,108,0.5);
        }

        .gp-filter.active {
          color: #fff;
          background: var(--gold);
          border-color: var(--gold);
        }

        /* count label */
        .gp-count-label {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-style: italic;
          color: #7a6a55;
          text-align: center;
          letter-spacing: 0.05em;
          margin-bottom: 48px;
        }

        .gp-count-label span { color: var(--gold); font-style: normal; }

        /* ── Masonry grid ── */
        .gp-masonry {
          max-width: 1280px;
          margin: 0 auto;
          columns: 4;
          column-gap: 14px;
        }

        /* ── Single tile ── */
        .gp-tile {
          break-inside: avoid;
          margin-bottom: 14px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: block;
          animation: tileIn 0.45s ease both;
        }

        @keyframes tileIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gp-tile.tall  .gp-tile-inner { padding-bottom: 133%; }
        .gp-tile.short .gp-tile-inner { padding-bottom: 75%;  }

        .gp-tile-inner { position: relative; width: 100%; }

        .gp-tile-img {
          position: absolute !important;
          inset: 0;
          object-fit: cover; 
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .gp-tile:hover .gp-tile-img { transform: scale(1.07); }

        /* hover overlay — darker on ivory bg for contrast */
        .gp-tile-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to bottom, transparent 35%, rgba(20,12,4,0.82) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gp-tile:hover .gp-tile-overlay { opacity: 1; }

        .gp-tile-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2; padding: 18px 16px;
          transform: translateY(8px); opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .gp-tile:hover .gp-tile-caption { transform: translateY(0); opacity: 1; }

        .gp-tile-alt {
          font-family: var(--font-display);
          font-size: 0.95rem; font-style: italic;
          color: rgba(247,243,238,0.9);
          display: block; margin-bottom: 5px;
        }

        .gp-tile-zoom {
          font-family: var(--font-caps);
          font-size: 0.44rem; letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* gold border on hover */
        .gp-tile::after {
          content: '';
          position: absolute; inset: 0; z-index: 3;
          border: 1px solid rgba(201,164,108,0);
          transition: border-color 0.4s ease;
          pointer-events: none;
        }

        .gp-tile:hover::after { border-color: rgba(201,164,108,0.55); }

        /* thin gold top line sweep */
        .gp-tile::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 4; pointer-events: none;
        }

        .gp-tile:hover::before { transform: scaleX(1); }

        /* ── CTA strip ── */
        .gp-cta-strip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(74,58,42,0.1);
        }

        .gp-cta-text {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: rgba(74,58,42,0.45);
          letter-spacing: 0.04em;
        }

        .gp-cta-btn {
          font-family: var(--font-caps);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold);
          color: #fff;
          border: 1px solid var(--gold);
          padding: 13px 36px;
          position: relative; overflow: hidden;
          display: inline-block;
          transition: box-shadow 0.32s;
        }

        .gp-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown);
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.32s ease;
        }

        .gp-cta-btn:hover::before { transform: scaleX(1); transform-origin: left; }
        .gp-cta-btn:hover { box-shadow: 0 5px 22px rgba(201,164,108,0.3); }
        .gp-cta-btn span { position: relative; z-index: 1; }

        /* ── Lightbox ── */
        .gp-lightbox {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(10,5,2,0.97);
          display: flex; align-items: center; justify-content: center;
          animation: lbIn 0.3s ease both;
        }

        @keyframes lbIn { from{opacity:0} to{opacity:1} }

        .gp-lb-img-wrap {
          position: relative;
          max-width: 88vw; max-height: 86vh;
          width: 900px; aspect-ratio: 4/3;
        }

        .gp-lb-img { object-fit: contain !important; }

        .gp-lb-close {
          position: fixed; top: 28px; right: 32px;
          font-family: var(--font-caps);
          font-size: 0.58rem; letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.5);
          background: none; border: none; cursor: pointer;
          transition: color 0.3s;
          z-index: 10000;
          display: flex; align-items: center; gap: 8px;
        }

        .gp-lb-close:hover { color: var(--gold); }

        .gp-lb-prev,
        .gp-lb-next {
          position: fixed; top: 50%; z-index: 10000;
          transform: translateY(-50%);
          width: 52px; height: 52px;
          border: 1px solid rgba(201,164,108,0.35);
          background: rgba(15,8,2,0.5);
          color: rgba(247,243,238,0.7);
          font-size: 1.1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }

        .gp-lb-prev { left: 24px; }
        .gp-lb-next { right: 24px; }

        .gp-lb-prev:hover,
        .gp-lb-next:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: #fff;
        }

        .gp-lb-footer {
          position: fixed; bottom: 28px; left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px; text-align: center;
        }

        .gp-lb-alt {
          font-family: var(--font-display);
          font-style: italic; font-size: 1.05rem;
          color: rgba(247,243,238,0.7);
          letter-spacing: 0.04em;
        }

        .gp-lb-count {
          font-family: var(--font-caps);
          font-size: 0.5rem; letter-spacing: 0.35em;
          color: rgba(201,164,108,0.6);
          text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .gp-masonry { columns: 3; } }
        @media (max-width: 700px)  { .gp-masonry { columns: 2; } }
        @media (max-width: 480px)  {
          .gp-masonry  { columns: 1; }
          .gp-main     { padding: 72px 48px 40px; }
          .gp-banner   { padding: 100px 24px 56px; }
          .gp-lb-prev  { left: 8px; }
          .gp-lb-next  { right: 8px; }
          .gp-banner-back { left: 20px; }
        }
      `}</style>

      <div className="gp-page">

        {/* ── Banner ── */}
        <div className="gp-banner">
          <p className="gp-banner-eyebrow">Rajput Royals · Visual Diary</p>
          <h1 className="gp-banner-title">Our <em>Gallery</em></h1>
          <div className="gp-banner-rule">
            <span className="gbr-line" /><span className="gbr-gem" /><span className="gbr-line" />
          </div>
          <p className="gp-banner-sub">
            Every photograph tells the story of a celebration crafted with love
          </p>
        </div>

        {/* ── Main ── */}
        <div className="gp-main">

          {/* Filters */}
          <div className="gp-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`gp-filter ${activeFilter === f.key ? "active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="gp-count-label">
            Showing <span>{filtered.length}</span> of <span>{galleryItems.length}</span> photographs
          </p>

          {/* Masonry */}
          <div className="gp-masonry">
            {filtered.map((item, idx) => (
              <div
                key={`${activeFilter}-${item.id}`}
                className={`gp-tile ${item.span}`}
                onClick={() => setLightbox(idx)}
                style={{ animationDelay: `${(idx % 8) * 0.05}s` }}
              >
                <div className="gp-tile-inner">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="gp-tile-img"
                    quality={88}
                  />
                  <div className="gp-tile-overlay" />
                  <div className="gp-tile-caption">
                    <span className="gp-tile-alt">{item.alt}</span>
                    <span className="gp-tile-zoom">View ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="gp-cta-strip">
            <p className="gp-cta-text">
              ~ Ready to make your own royal memories? ~
            </p>
            <Link href="/#contact" className="gp-cta-btn">
              <span>Book Your Celebration</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="gp-lightbox" onClick={closeLightbox}>
          <button className="gp-lb-close" onClick={closeLightbox}>✕ &nbsp;Close</button>

          <button
            className="gp-lb-prev"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            aria-label="Previous"
          >←</button>

          <div className="gp-lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              className="gp-lb-img"
              quality={95}
            />
          </div>

          <button
            className="gp-lb-next"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            aria-label="Next"
          >→</button>

          <div className="gp-lb-footer">
            <span className="gp-lb-alt">{filtered[lightbox].alt}</span>
            <span className="gp-lb-count">
              {String(lightbox + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </>
  );
}