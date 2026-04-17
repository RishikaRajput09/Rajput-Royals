"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Folder: /public/Images/amenities/
// Name files like: banquet-1.png, banquet-2.png ... banquet-5.png etc.
const amenities = [
  {
    id: 1, tab: "Banquet Hall", title: "The Grand Banquet Hall",
    desc: "An opulent ballroom draped in crystal chandeliers and gilded arches, accommodating up to 1,500 guests. Designed for grand weddings and lavish receptions, every corner exudes timeless royalty.",
    imgs: Array.from({ length: 4 }, (_, i) => `/Images/ban${i + 1}.jpg`),
    tag: "Capacity · 1500 Guests",
  },
  {
    id: 2, tab: "Haldi Stage", title: "Haldi & Ritual Stage",
    desc: "A vibrant, floral-adorned stage built for the sacred Haldi ceremony. Bathed in warm marigold tones and natural light, it creates the perfect backdrop for your most cherished pre-wedding ritual.",
    imgs: Array.from({ length: 6 }, (_, i) => `/Images/hal${i + 1}.jpg`),
    tag: "Open · Floral Decor",
  },
  {
    id: 3, tab: "Open Sky Lawn", title: "Open Sky Royal Lawn",
    desc: "Sprawling 2-acre wedding lawns, beautifully manicured beneath a canopy of stars. Ideal for outdoor weddings, cocktail evenings, and sundowner receptions, with complete lighting and sound infrastructure for seamless celebrations.",
    imgs: Array.from({ length: 10 }, (_, i) => `/Images/lawn${i + 1}.jpg`),
    tag: "2 Acres · Open Air",
  },
  {
    id: 4, tab: "Grand Entrance", title: "The Royal Grand Entrance",
    desc: "Make an arrival fit for royalty with our palace-inspired wedding entrance, featuring floral corridors and elegant golden arches that set the tone from the moment your guests step into the venue.",
    imgs: [
      ...Array.from({ length: 4 }, (_, i) => `/Images/entrance${i + 1}.jpg`),
      ...Array.from({ length: 4 }, (_, i) => `/Images/entrance${i + 5}.jpeg`)
    ],
    tag: "Welcome in Style",
  },
  {
    id: 5, tab: "Buffet Section", title: "Royal Buffet & Dining",
    desc: "Enjoy a curated fine-dining and wedding catering experience, featuring live counters, regional delicacies, and international cuisine. Our in-house culinary team crafts personalized menus tailored to your celebration.",
    imgs: Array.from({ length: 5 }, (_, i) => `/Images/buffet${i + 1}.jpg`),
    tag: "Multi-Cuisine · Live Counters",
  },
  {
    id: 6, tab: "Vidhi Mandap", title: "Sacred Vidhi Mandap",
    desc: "A consecrated wedding mandap adorned with fresh flowers, draped silks, and Vedic motifs. Designed for sacred Hindu wedding rituals, it offers a serene and spiritually resonant setting for your vows.",
    imgs: [
      ...Array.from({ length: 1 }, (_, i) => `/Images/vidhi${i + 1}.jpg`),
      ...Array.from({ length: 2 }, (_, i) => `/Images/vidhi${i + 2}.jpeg`),
      ...Array.from({ length: 2 }, (_, i) => `/Images/vidhi${i + 4}.jpg`)
    ],  
    tag: "Sacred · Traditional",
  },
  // {
  //   id: 7, tab: "Mehendi", title: "Mehendi Pavilion",
  //   desc: "A dedicated indoor-outdoor pavilion for your Mehendi evening, with low seating, vibrant textiles, and ambient lighting. An intimate yet festive space for laughter and artistry.",
  //   imgs: Array.from({ length: 5 }, (_, i) => `/Images/amenities/mehendi-${i + 1}.png`),
  //   tag: "Intimate · Festive",
  // },
  {
    id: 7, tab: "Rooms & Dorms", title: "Luxury Rooms & Suites",
    desc: "Over 30 elegantly appointed rooms and dormitories for your guests and family. From clean, well-maintained rooms to comfortable group dormitories, every stay is infused with warmth and comfort.",
    imgs: Array.from({ length: 3 }, (_, i) => `/Images/room${i + 1}.jpeg`),
    tag: "30+ Rooms · Suites",
  },
];

export default function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);
  const current = amenities[activeTab];

  // Reset slide index when tab changes
  useEffect(() => {
    setActiveImg(0);
  }, [activeTab]);

  // Auto-play every 3s
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveImg((i) => (i + 1) % current.imgs.length);
        setFading(false);
      }, 380);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [activeTab, current.imgs.length]);

  const goToImg = (i) => {
    clearInterval(intervalRef.current);
    setFading(true);
    setTimeout(() => { setActiveImg(i); setFading(false); }, 300);
  };

  const goToTab = (i) => setActiveTab(i);

  return (
    <>
      <style>{`
        .am-section {
          background: var(--brown, #4A3A2A);
          padding: 100px 48px;
          overflow: hidden;
        }

        /* ── Header ── */
        .am-header {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          margin-bottom: 60px;
        }
        .am-eyebrow {
          font-family: var(--font-caps,'Cinzel',serif);
          font-weight: 600;     
          font-size: 0.58rem; letter-spacing: 0.48em;
          text-transform: uppercase; color: var(--gold,#C9A46C);
          margin-bottom: 14px;
        }
        .am-heading {
          font-family: var(--font-display,'Cormorant Garamond',serif);
          font-size: clamp(2.2rem,4vw,3.5rem); font-weight: 300;
          color: var(--ivory,#F7F3EE); margin: 0 0 18px;
          letter-spacing: 0.02em;
        }
        .am-rule { display:flex; align-items:center; gap:10px; }
        .am-rl   { width:56px; height:1px; background:rgba(201,164,108,0.4); }
        .am-gem  { width:5px; height:5px; background:var(--gold,#C9A46C); transform:rotate(45deg); flex-shrink:0; }

        /* ── Tabs ── */
        .am-tabs {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 6px;
          margin-bottom: 52px;
        }
        .am-tab {
          font-family: var(--font-caps,'Cinzel',serif);
          font-size: 0.58rem; letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.5);
          background: transparent;
          border: 1px solid rgba(247,243,238,0.12);
          padding: 10px 20px; cursor: pointer;
          transition: color .3s, border-color .3s, background .3s;
        }
        .am-tab:hover { color:var(--gold,#C9A46C); border-color:rgba(201,164,108,0.4); }
        .am-tab.active { color:#fff; background:var(--gold,#C9A46C); border-color:var(--gold,#C9A46C); }

        /* ── Panel grid ── */
        .am-panel {
          max-width: 1180px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          animation: amIn .5s ease both;
        }
        @keyframes amIn {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Slideshow ── */
        .am-slide-wrap { position: relative; }

        /* offset gold frame */
        .am-slide-wrap::before {
          content:''; position:absolute; inset:0;
          border: 1px solid rgba(201,164,108,0.3);
          transform: translate(14px,14px);
          z-index:0; pointer-events:none;
        }

        .am-img {
          position:relative; z-index:1;
          width:100%; aspect-ratio:4/3;
          object-fit:cover; display:block;
          transition: opacity .38s ease;
        }
        .am-img.fading { opacity:0; }

        /* top-left counter */
        .am-counter {
          position:absolute; top:14px; left:14px; z-index:3;
          font-family: var(--font-caps,'Cinzel',serif);
          font-size:0.46rem; letter-spacing:0.22em;
          color:rgba(247,243,238,0.8);
          background:rgba(15,8,2,0.5); backdrop-filter:blur(6px);
          padding:5px 10px;
        }

        /* dots top-right */
        .am-dots {
          position:absolute; top:14px; right:14px;
          z-index:3; display:flex; gap:7px;
        }
        .am-dot {
          width:7px; height:7px; border-radius:50%;
          background:rgba(247,243,238,0.3);
          border:none; cursor:pointer; padding:0;
          transition: background .3s, transform .3s;
        }
        .am-dot.active { background:var(--gold,#C9A46C); transform:scale(1.35); }

        /* gold tag bottom-right */
        .am-tag {
          position:absolute; bottom:0; right:0; z-index:2;
          background:var(--gold,#C9A46C); color:#fff;
          font-family:var(--font-caps,'Cinzel',serif);
          font-size:0.5rem; letter-spacing:0.28em;
          text-transform:uppercase; padding:9px 18px;
        }

        /* progress bar bottom */
        .am-progress {
          position:absolute; bottom:0; left:0; z-index:3;
          height:2px; background:var(--gold,#C9A46C);
          animation: amProg 3s linear infinite;
        }
        @keyframes amProg { from{width:0%} to{width:100%} }

        /* ── Copy ── */
        .am-copy { display:flex; flex-direction:column; gap:0; }

        .am-big-num {
          font-family:var(--font-display,'Cormorant Garamond',serif);
          font-size:5rem; font-weight:300;
          color:rgba(201,164,108,0.18); line-height:1;
          margin-bottom:4px;
        }
        .am-copy-title {
          font-family:var(--font-display,'Cormorant Garamond',serif);
          font-size:clamp(1.8rem,2.8vw,2.5rem); font-weight:300;
          color:var(--ivory,#F7F3EE); margin:0 0 18px;
          letter-spacing:0.02em; line-height:1.2;
        }
        .am-div  { display:flex; align-items:center; gap:10px; margin-bottom:22px; }
        .am-dl   { width:40px; height:1px; background:rgba(201,164,108,0.45); }
        .am-dg   { width:4px; height:4px; background:var(--gold,#C9A46C); transform:rotate(45deg); flex-shrink:0; }

        .am-desc {
          font-family:var(--font-display,'Cormorant Garamond',serif);
          font-size:clamp(0.95rem,1.3vw,1.08rem); font-weight:400;
          line-height:1.85; color:rgba(247,243,238,0.6);
          margin-bottom:36px;
        }

        /* amenity prev/next */
        .am-nav { display:flex; align-items:center; gap:14px; }
        .am-nav-btn {
          width:44px; height:44px;
          border:1px solid rgba(201,164,108,0.35);
          background:transparent; color:rgba(247,243,238,0.6);
          font-size:1rem; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition: background .3s, color .3s, border-color .3s;
        }
        .am-nav-btn:hover { background:var(--gold,#C9A46C); color:#fff; border-color:var(--gold,#C9A46C); }
        .am-nav-count {
          font-family:var(--font-caps,'Cinzel',serif);
          font-size:0.58rem; letter-spacing:0.22em;
          color:rgba(247,243,238,0.35);
        }
        .am-nav-count span { color:var(--gold,#C9A46C); }

        /* ── Responsive ── */
        @media (max-width:860px) {
          .am-section  { padding:72px 24px; }
          .am-panel    { grid-template-columns:1fr; gap:40px; }
          .am-slide-wrap { order:-1; }
          .am-slide-wrap::before { display:none; }
          .am-big-num  { font-size:3.5rem; }
        }
        @media (max-width:480px) {
          .am-section { padding:56px 16px; }
          .am-tab     { font-size:0.5rem; padding:8px 14px; }
        }
      `}</style>

      <section className="am-section" id="amenities">

        {/* Header */}
        <div className="am-header">
          <p className="am-eyebrow">What We Offer</p>
          <h2 className="am-heading">Our Royal Amenities</h2>
          <div className="am-rule">
            <span className="am-rl" /><span className="am-gem" /><span className="am-rl" />
          </div>
        </div>

        {/* Tabs */}
        <div className="am-tabs">
          {amenities.map((a, i) => (
            <button key={a.id} className={`am-tab ${activeTab === i ? "active" : ""}`} onClick={() => goToTab(i)}>
              {a.tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="am-panel" key={activeTab}>

          {/* Slideshow */}
          <div className="am-slide-wrap">
            <span className="am-counter">
              {String(activeImg + 1).padStart(2, "0")} / {String(current.imgs.length).padStart(2, "0")}
            </span>

            <div className="am-dots">
              {current.imgs.map((_, i) => (
                <button key={i} className={`am-dot ${activeImg === i ? "active" : ""}`} onClick={() => goToImg(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>

            <Image
              src={current.imgs[activeImg]}
              alt={`${current.title} — ${activeImg + 1}`}
              width={620} height={465}
              className={`am-img ${fading ? "fading" : ""}`}
              quality={90}
            />

            <span className="am-tag">{current.tag}</span>
            <div className="am-progress" key={`${activeTab}-${activeImg}`} />
          </div>

          {/* Copy */}
          <div className="am-copy">
            <span className="am-big-num">{String(activeTab + 1).padStart(2, "0")}</span>
            <h3 className="am-copy-title">{current.title}</h3>
            <div className="am-div">
              <span className="am-dl" /><span className="am-dg" /><span className="am-dl" />
            </div>
            <p className="am-desc">{current.desc}</p>

            <div className="am-nav">
              <button className="am-nav-btn" onClick={() => goToTab((activeTab - 1 + amenities.length) % amenities.length)} aria-label="Prev">←</button>
              <button className="am-nav-btn" onClick={() => goToTab((activeTab + 1) % amenities.length)} aria-label="Next">→</button>
              <span className="am-nav-count">
                <span>{String(activeTab + 1).padStart(2, "0")}</span> / {String(amenities.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}