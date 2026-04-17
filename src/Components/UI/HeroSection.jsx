"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    num: "01",
    label: "THE DAY WE MET",
    sub: "Grand Banquet · Miraj",
    img: "/Images/ban1.jpg",
  },
  {
    num: "02",
    label: "STORIES UNFOLDING",
    sub: "Open Sky Lawn · Sangli",
    img: "/Images/fav.jpg",
  },
  {
    num: "03",
    label: "THE NEXT JOURNEY",
    sub: "Vidhi Mandap · Rajput Royals",
    img: "/Images/lawn1.jpg",
  },
];

const stats = [
  { value: "500+",      label: "Royal Weddings" },
  { value: "Est. 2005", label: "Miraj, Sangli" },
  { value: "7 Acres",   label: "Royal Venue" },
  { value: "1500",      label: "Guest Capacity" },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hr-wrap {
          position: relative;
          min-height: 100svh;
          background: #F7F3EE;
          display: flex;
          flex-direction: column;
          padding-top: 75px;
          overflow: hidden;
        }

        /* ── main two-col row ── */
        .hr-body {
          flex: 1;
          display: grid;
          grid-template-columns: 42% 58%;
          align-items: center;
          padding: 32px 72px 8px 72px;
          gap: 0;
          min-height: 0;
        }

        /* ── LEFT ── */
        .hr-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 8px;
          margin-left: 100px;
        }

        .hr-pre {
          font-family: 'Cinzel', serif;
          font-size: 0.54rem;
          letter-spacing: 0.46em;
          text-transform: uppercase;
          color: #C9A46C;
          margin-bottom: 20px;
          display: block;
          font-weight: 600;
        }

        .hr-h1 { margin: 0; line-height: 0.88; }

        .hr-word-up {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4.6rem, 7vw, 8.5rem);
          font-weight: 300;
          color: #4A3A2A;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          display: block;
        }

        .hr-word-it {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4.6rem, 7vw, 8.5rem);
          font-weight: 300;
          font-style: italic;
          color: #C9A46C;
          letter-spacing: 0.02em;
          display: block;
        }

        .hr-rule {
          display: flex; align-items: center; gap: 10px;
          margin: 26px 0 28px;
        }
        .hr-rl  { width: 44px; height: 1px; background: rgba(201,164,108,0.38); }
        .hr-gem { width: 5px; height: 5px; background: #C9A46C; transform: rotate(45deg); flex-shrink: 0; }

        .hr-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 1.3vw, 1.12rem);
          font-style: italic;
          color: rgba(74,58,42,0.58);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 360px;
        }

        .hr-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        .hr-btn-fill {
          font-family: 'Cinzel', serif;
          font-size: 0.52rem; letter-spacing: 0.28em;
          text-transform: uppercase;
          background: #C9A46C; color: #fff;
          border: none; padding: 14px 30px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background .25s;
        }
        .hr-btn-fill:hover { background: #4A3A2A; }

        .hr-btn-ghost {
          font-family: 'Cinzel', serif;
          font-size: 0.52rem; letter-spacing: 0.28em;
          text-transform: uppercase;
          background: transparent; color: #4A3A2A;
          border: 1px solid rgba(74,58,42,0.28);
          padding: 14px 30px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color .25s, color .25s;
        }
        .hr-btn-ghost:hover { border-color: #C9A46C; color: #C9A46C; }

        /* ── RIGHT: arch cards ── */
        .hr-right {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 22px;
          padding-left: 16px;
          height: 100%;
          margin-top: -30px;
        }

        .hr-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
          max-width: 230px;
        }

        .hr-arch {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 999px 999px 5px 5px;
          box-shadow:
            0 22px 56px rgba(74,58,42,0.2),
            0 8px 20px rgba(74,58,42,0.1);
        }

        .hr-card:nth-child(1) .hr-arch { aspect-ratio: 3 / 4.3; }
        .hr-card:nth-child(2) .hr-arch { aspect-ratio: 3 / 5.2; }
        .hr-card:nth-child(3) .hr-arch { aspect-ratio: 3 / 4.6; }

        .hr-arch::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 999px 999px 5px 5px;
          border: 1.5px solid rgba(201,164,108,0.3);
          pointer-events: none; z-index: 2;
        }

        .hr-arch-inner {
          position: absolute; inset: 0;
          transition: transform .7s ease;
        }
        .hr-arch:hover .hr-arch-inner { transform: scale(1.055); }

        .hr-card-foot { text-align: center; }

        .hr-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 3.2vw, 3.8rem);
          font-weight: 500;
          color: rgba(74,58,42,0.22);
          line-height: 1;
          display: block;
          margin-bottom: -2px;
        }

        .hr-card-lbl {
          font-family: 'Cinzel', serif;
          font-size: 0.41rem; letter-spacing: 0.2em;
          font-weight: 600;
          text-transform: uppercase; color: #4A3A2A;
          display: block; margin-bottom: 3px;
        }

        .hr-card-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.82rem; font-style: italic;
          font-weight: 500;
          color: #C9A46C; display: block;
        }

        /* ── STATS BAR ── */
        .hr-stats {
          background: #2A1F14;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(201,164,108,0.18);
        }

        .hr-stat {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 5px; padding: 22px 16px;
          border-right: 1px solid rgba(201,164,108,0.1);
        }
        .hr-stat:last-child { border-right: none; }

        .hr-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          font-weight: 300; color: #C9A46C; line-height: 1;
        }

        .hr-stat-lbl {
          font-family: 'Cinzel', serif;
          font-size: 0.45rem; letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.4);
        }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */

        /* ── iPad / tablet ── */
        @media (max-width: 1080px) {
          .hr-body {
            grid-template-columns: 1fr;
            padding: 40px 48px 24px;
            gap: 40px;
          }

          .hr-left {
            margin-left: 0;
            padding-right: 0;
            align-items: center;
            text-align: center;
          }

          .hr-rule {
            justify-content: center;
          }

          .hr-sub {
            text-align: center;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }

          .hr-ctas {
            justify-content: center;
          }

          .hr-right {
            justify-content: center;
            align-items: flex-end;
            height: auto;
            padding-left: 0;
            margin-top: 0;
          }

          .hr-card { max-width: 180px; }
        }

        /* ── Phone ── */
        @media (max-width: 640px) {
          .hr-wrap  { padding-top: 70px; }

          .hr-body  { padding: 28px 24px 16px; gap: 32px; }

          .hr-left {
            margin-left: 0;
            align-items: center;
            text-align: center;
          }

          .hr-rule {
            justify-content: center;
          }

          .hr-sub {
            text-align: center;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .hr-ctas {
            justify-content: center;
          }

          .hr-right {
            padding-left: 0;
            margin-top: 0;
            justify-content: center;
          }

          .hr-stats { grid-template-columns: repeat(2, 1fr); }
          .hr-stat:nth-child(2) { border-right: none; }
          .hr-stat:nth-child(3),
          .hr-stat:nth-child(4) { border-top: 1px solid rgba(201,164,108,0.1); }
          .hr-stat:nth-child(4) { border-right: none; }

          .hr-card:nth-child(3) { display: none; }
          .hr-card { max-width: 148px; }
        }
      `}</style>

      <section className="hr-wrap">

        <div className="hr-body">

          {/* LEFT */}
          <div className="hr-left">
            <span className="hr-pre">Welcome to Rajput Royals</span>

            <h1 className="hr-h1">
              <span className="hr-word-up">Save</span>
              <span className="hr-word-up">The</span>
              <span className="hr-word-it">Date</span>
            </h1>

            <div className="hr-rule">
              <span className="hr-rl" /><span className="hr-gem" /><span className="hr-rl" />
            </div>

            <p className="hr-sub">
              Experience a luxury wedding venue in Sangli-Miraj where every detail is thoughtfully curated to elevate your celebration. Rajput Royals offers a premium destination for weddings, receptions, and special events, blending refined aesthetics with impeccable hospitality.
            </p>
          </div>

          {/* RIGHT */}
          <div className="hr-right">
            {events.map((e, i) => (
              <div className="hr-card" key={i}>
                <div className="hr-arch">
                  <div className="hr-arch-inner">
                    <Image
                      src={e.img}
                      alt={e.label}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width:640px) 148px, (max-width:1080px) 180px, 230px"
                    />
                  </div>
                </div>
                <div className="hr-card-foot">
                  <span className="hr-card-num">{e.num}.</span>
                  <span className="hr-card-lbl">{e.label}</span>
                  <span className="hr-card-sub">{e.sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* STATS */}
        <div className="hr-stats">
          {stats.map((s) => (
            <div className="hr-stat" key={s.label}>
              <span className="hr-stat-val">{s.value}</span>
              <span className="hr-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}