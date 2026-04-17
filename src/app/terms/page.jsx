"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing our premises, making a reservation, or engaging with Rajput Royals in any capacity — whether in person, by telephone, by email, or through our website — you shall be deemed to have agreed to each of the conditions set out below without modification. If you do not accept these Conditions, you must refrain from engaging with our services.\n\nThese Terms & Conditions ("Conditions") apply to all clients, guests, vendors, and third parties who interact with Rajput Royals. These Conditions must be read in conjunction with any other applicable terms, notices, or policies governing the use of our services.\n\nNo contract shall subsist between you and Rajput Royals in respect of any services unless and until Rajput Royals accepts your enquiry or reservation by written confirmation via email or official communication.`,
  },
  {
    id: "venue",
    title: "Venue Rules & Conduct",
    content: `All guests and event organisers are expected to conduct themselves in a respectful and dignified manner at all times within the Rajput Royals estate. Any behaviour deemed disruptive, offensive, or harmful to other guests, staff, or property will result in immediate removal from the premises without refund.\n\nThe use of open flames, unauthorised fireworks, or pyrotechnics is strictly prohibited unless prior written approval has been obtained from venue management. Any approved effects must be handled exclusively by licensed professionals.\n\nDecorations, signage, and modifications to the venue must be approved in writing in advance. Nails, adhesives, or any fixtures that may damage walls, ceilings, or flooring are not permitted. All external decorators are responsible for complete removal of their materials by the agreed time.\n\nPets are not permitted within the venue unless they form a designated part of a pre-approved ceremonial procession. Service animals are welcome at all times.\n\nSmoking is strictly prohibited inside all enclosed areas of the estate. Designated smoking zones must be used at all times.\n\nNoise levels, including amplified music and public address systems, must remain within the limits prescribed by local municipal regulations. Music must cease by the timings stipulated in your event agreement.`,
  },
  {
    id: "forcemajeure",
    title: "Force Majeure",
    content: `Rajput Royals shall not be held liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, floods, earthquakes, fire, severe weather, epidemic or pandemic, government-imposed restrictions, civil unrest, riots, war, terrorism, or any other event that could not reasonably have been anticipated or prevented ("Force Majeure Event").\n\nIn the event of a Force Majeure Event, Rajput Royals will notify the client as soon as reasonably practicable and will endeavour, wherever possible, to offer an alternative date or a partial credit towards a future booking. However, we cannot guarantee a full refund in such circumstances, and any resolution will be handled in good faith on a case-by-case basis.\n\nClients are strongly encouraged to obtain comprehensive event insurance to protect against losses arising from force majeure events, cancellations, or other unforeseen circumstances.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `Rajput Royals takes every reasonable precaution to ensure the safety, security, and comfort of all guests and clients on its premises. However, Rajput Royals shall not be held responsible for any loss, theft, or damage to personal property brought onto the premises by guests, clients, vendors, or any other party.\n\nOur total liability to any client, in connection with any event or booking, shall not exceed the total amount paid by that client to Rajput Royals for the relevant event. We shall not be liable for any indirect, consequential, or special losses — including but not limited to loss of enjoyment, loss of business opportunity, or emotional distress.\n\nRajput Royals does not accept liability for the actions, omissions, or defaults of third-party vendors, contractors, or suppliers engaged independently by the client, even if such parties are operating on the venue premises.\n\nNothing in these Conditions excludes or limits our liability for death or personal injury caused by our proven negligence, or for any matter which it would be unlawful for us to exclude or limit under applicable Indian law.`,
  },
  {
    id: "governing",
    title: "Governing Law",
    content: `These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these Conditions shall be subject to the exclusive jurisdiction of the courts located in Sangli, Maharashtra.`,
  },
  {
    id: "arbitration",
    title: "Arbitration",
    content: `In the event of any dispute, both parties agree to first attempt resolution through good-faith negotiation. Should a resolution not be reached within thirty (30) days of formal notice, the matter may be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996 (as amended), before formal legal proceedings are initiated.`,
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    content: `The courts of Sangli-Miraj, Maharashtra shall have exclusive jurisdiction over all disputes, claims, or matters arising out of or in connection with these Terms & Conditions or any event, booking, or visit at Rajput Royals. By engaging with our services, you expressly consent to the jurisdiction of such courts.`,
  },
  {
    id: "amendments",
    title: "Amendments",
    content: `Rajput Royals reserves the right to revise, update, or amend these Terms & Conditions at any time and without prior notice. The most current version will at all times be available on our official website. Your continued use of our services following any such revision constitutes your acceptance of the updated Conditions.\n\nFor any questions regarding these Terms & Conditions, please contact us at rajputroyalmiraj@gmail.com or call +91 98225 44956.`,
  },
];

export default function TermsPage() {
  const [openId, setOpenId] = useState("acceptance");

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500;600&display=swap');

        :root {
          --ivory: #F7F3EE;
          --brown: #4A3A2A;
          --gold:  #C9A46C;
          --font-display: 'Cormorant Garamond', serif;
          --font-caps:    'Cinzel', serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .tc-page {
          background: var(--ivory);
          min-height: 100vh;
          font-family: var(--font-display);
        }

        /* ── Nav ── */
        .tc-nav {
          padding: 20px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--ivory);
          border-bottom: 1px solid rgba(74,58,42,0.1);
          position: sticky; top: 0; z-index: 100;
        }

        .tc-logo { text-decoration: none; }

        .tc-logo-name {
          font-family: var(--font-caps);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          color: var(--brown);
          display: block;
        }

        .tc-logo-sub {
          font-family: var(--font-caps);
          font-size: 0.42rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-top: 2px;
        }

        .tc-back {
          font-family: var(--font-caps);
          font-size: 0.5rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(74,58,42,0.4);
          display: flex; align-items: center; gap: 8px;
          transition: color 0.3s;
        }

        .tc-back:hover { color: var(--gold); }

        .tc-back-arrow {
          display: inline-block;
          width: 16px; height: 1px;
          background: currentColor; position: relative;
        }

        .tc-back-arrow::before {
          content: '';
          position: absolute; left: 0; top: -3px;
          width: 6px; height: 6px;
          border-left: 1px solid currentColor;
          border-bottom: 1px solid currentColor;
          transform: rotate(45deg);
        }

        /* ── Hero title block — centered like Taj ── */
        .tc-hero {
          text-align: center;
          padding: 64px 48px 48px;
        }

        .tc-hero-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 16px;
        }

        .tc-hero-line {
          width: 80px; height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .tc-hero-title {
          font-family: var(--font-caps);
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .tc-hero-sub {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-weight: 300;
          color: rgba(74,58,42,0.55);
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        /* T&C sub heading row */
        .tc-hero-sub-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 12px;
        }

        .tc-hero-sub-title {
          font-family: var(--font-caps);
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--brown);
        }

        .tc-hero-meta {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 600;
          font-size: 0.92rem;
          color: rgba(74,58,42,0.38);
          letter-spacing: 0.04em;
          margin-bottom: 48px;
        }

        /* ── Intro text ── */
        .tc-intro-wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 48px 40px;
          border-bottom: 1px solid rgba(74,58,42,0.1);
        }

        .tc-intro-heading {
          font-family: var(--font-caps);
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 20px;
        }

        .tc-intro-p {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.9;
          color: rgba(74,58,42,0.65);
          margin-bottom: 16px;
        }

        /* ── Accordion ── */
        .tc-accordion {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .tc-item {
          border-bottom: 1px solid rgba(74,58,42,0.12);
        }

        .tc-item:first-of-type {
          border-top: 1px solid rgba(74,58,42,0.12);
        }

        /* accordion trigger */
        .tc-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }

        .tc-trigger-title {
          font-family: var(--font-caps);
          font-size: clamp(0.62rem, 1.1vw, 0.75rem);
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brown);
          transition: color 0.3s;
        }

        .tc-trigger:hover .tc-trigger-title,
        .tc-item.open .tc-trigger-title {
          color: var(--gold);
        }

        /* +/- icon exactly like Taj */
        .tc-icon {
          flex-shrink: 0;
          width: 20px; height: 20px;
          position: relative;
          color: var(--gold);
        }

        .tc-icon::before,
        .tc-icon::after {
          content: '';
          position: absolute;
          background: var(--gold);
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        /* horizontal bar */
        .tc-icon::before {
          width: 14px; height: 1px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* vertical bar */
        .tc-icon::after {
          width: 1px; height: 14px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* when open — vertical bar disappears = becomes minus */
        .tc-item.open .tc-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
          opacity: 0;
        }

        /* answer panel */
        .tc-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s ease, padding 0.3s ease;
        }

        .tc-item.open .tc-answer {
          max-height: 1000px;
          padding-bottom: 28px;
        }

        .tc-answer-inner {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tc-answer-p {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.9;
          color: rgba(74,58,42,0.65);
        }

        /* ── Footer ── */
        .tc-footer {
          background: var(--brown);
          padding: 32px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .tc-footer-brand {
          font-family: var(--font-caps);
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.5);
        }

        .tc-footer-brand span { color: var(--gold); }

        .tc-footer-links {
          display: flex; align-items: center; gap: 8px;
        }

        .tc-footer-link {
          font-family: var(--font-caps);
          font-size: 0.48rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(247,243,238,0.35);
          transition: color 0.3s;
        }

        .tc-footer-link:hover { color: var(--gold); }

        .tc-footer-sep {
          width: 3px; height: 3px;
          background: rgba(201,164,108,0.3);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .tc-nav         { padding: 16px 20px; }
          .tc-hero        { padding: 48px 20px 36px; }
          .tc-intro-wrap  { padding: 0 20px 32px; }
          .tc-accordion   { padding: 0 20px 64px; }
          .tc-footer      { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          .tc-hero-line   { width: 40px; }
        }
      `}</style>

      <div className="tc-page">
        {/* Hero — centered like Taj */}
        <div className="tc-hero">
          <div className="tc-hero-title-row">
            <span className="tc-hero-line" />
            <h1 className="tc-hero-title">Terms of Use</h1>
            <span className="tc-hero-line" />
          </div>

          <p className="tc-hero-sub">
            We welcome you to Rajput Royals and encourage you to carefully review these Terms & Conditions before making any booking or visiting our wedding venue. These terms outline important information regarding bookings, services, and your experience at Rajput Royals.
          </p>

          <div className="tc-hero-sub-title-row">
            <span className="tc-hero-line" />
            <h2 className="tc-hero-sub-title">Terms and Conditions</h2>
            <span className="tc-hero-line" />
          </div>

          <p className="tc-hero-meta">
            Effective: 1st January 2025 &nbsp;·&nbsp; Last Updated: March 2026
          </p>
        </div>

        {/* Intro */}
        <div className="tc-intro-wrap">
          <h3 className="tc-intro-heading">Introduction</h3>
          <p className="tc-intro-p">
            "Rajput Royals and its associated venues (collectively, the "Venue") make available services relating to weddings, receptions, and celebratory events hosted at our estate in Sangli, Maharashtra. The Venue, and the services of each of its offerings, is operated exclusively by Rajput Royals."
          </p>
          <p className="tc-intro-p">
            The Terms & Conditions set out below ("Conditions") apply to your use of our services, including all bookings, visits, and engagements with Rajput Royals.
          </p>
          <p className="tc-intro-p">
            In accessing, using, or booking our services, you shall be deemed to have agreed to each and all of the Conditions without modification. You agree to be bound by these Conditions so please read this section carefully before proceeding. If you do not accept these Conditions, you must refrain from using our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="tc-accordion">
          {sections.map((s) => (
            <div
              key={s.id}
              className={`tc-item ${openId === s.id ? "open" : ""}`}
            >
              <button
                className="tc-trigger"
                onClick={() => toggle(s.id)}
                aria-expanded={openId === s.id}
              >
                <span className="tc-trigger-title">{s.title}</span>
                <span className="tc-icon" aria-hidden="true" />
              </button>

              <div className="tc-answer">
                <div className="tc-answer-inner">
                  {s.content.split("\n\n").map((para, i) => (
                    <p className="tc-answer-p" key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}