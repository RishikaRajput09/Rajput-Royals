"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    id: "general",
    title: "General Cancellation Policy",
    content: `All bookings made with Rajput Royals are subject to this Cancellation Policy, which forms part of our Terms & Conditions. By confirming a booking, you acknowledge and agree to the cancellation terms set out herein.\n\nCancellation requests must be submitted in writing via email to rajputroyalmiraj@gmail.com or by registered post to our venue address. Verbal cancellations will not be accepted. The date of cancellation shall be the date on which written confirmation of receipt is issued by Rajput Royals.\n\nAll refunds, where applicable, will be processed within fourteen (14) working days of the cancellation being confirmed, via the original payment method.`,
  },
  {
    id: "schedule",
    title: "Cancellation Schedule & Refunds",
    content: `The following cancellation schedule applies to all confirmed bookings:\n\nMore than 180 days before the event date: 80% of the total booking amount will be refunded. The remaining 20% is retained as a non-refundable administration and holding fee.\n\n90 to 179 days before the event date: 50% of the total booking amount will be refunded.\n\n30 to 89 days before the event date: 25% of the total booking amount will be refunded.\n\nFewer than 30 days before the event date: No refund will be issued. The full booking amount is non-refundable.\n\nThe above schedule applies to the total confirmed booking value, inclusive of all deposits and advance payments made at the time of booking.`,
  },
  {
    id: "deposits",
    title: "Deposits & Advance Payments",
    content: `A non-refundable booking deposit of 20% of the total estimated event value is required at the time of confirmation to secure your event date. This deposit is strictly non-refundable under all circumstances, including cancellation, postponement, or date change.\n\nThe remaining balance is payable in accordance with the payment schedule agreed at the time of booking. Failure to make payments on time may result in the cancellation of your booking, with the applicable cancellation charges applied.`,
  },
  {
    id: "postponement",
    title: "Postponement & Date Changes",
    content: `Requests to postpone or change the date of a confirmed event must be submitted in writing at least ninety (90) days prior to the original event date. Subject to availability, Rajput Royals will endeavour to accommodate a date change on the following terms:\n\nOne complimentary date change is permitted if requested more than 180 days before the original event date, subject to availability of the new date.\n\nDate changes requested between 90 and 179 days before the event will incur an administrative fee equivalent to 10% of the total booking value.\n\nDate change requests made fewer than 90 days before the event will be treated as a cancellation, and the cancellation schedule above will apply.\n\nAll date changes are subject to availability and the pricing applicable at the time of the new booking date.`,
  },
  {
    id: "force",
    title: "Cancellation Due to Force Majeure",
    content: `In the event that Rajput Royals is required to cancel or suspend your event due to a Force Majeure Event (as defined in our Terms & Conditions) — including but not limited to natural disasters, pandemic, government-imposed restrictions, or civil unrest — we will notify you as soon as reasonably practicable.\n\nIn such circumstances, Rajput Royals will offer one of the following remedies at its discretion:\n\nA complimentary date change to an alternative available date within twelve (12) months of the original event date.\n\nA credit note equivalent to the amount paid, valid for twelve (12) months from the date of cancellation, redeemable against any future booking at Rajput Royals.\n\nA partial refund, where deemed appropriate, on a case-by-case basis.\n\nRajput Royals strongly recommends that all clients obtain comprehensive event insurance to cover losses arising from Force Majeure Events.`,
  },
  {
    id: "vendor",
    title: "Third-Party Vendors & External Services",
    content: `This Cancellation Policy applies solely to amounts paid directly to Rajput Royals. Any payments made to third-party vendors, decorators, caterers, photographers, or other external service providers engaged independently by the client are subject to those vendors' own cancellation and refund policies.\n\nRajput Royals accepts no liability for any costs, losses, or penalties incurred in relation to third-party vendors, regardless of the reason for cancellation.`,
  },
  {
    id: "noshow",
    title: "No-Show Policy",
    content: `In the event that the client fails to attend or commence the booked event on the confirmed date without prior written notice, the booking shall be treated as a cancellation with fewer than 30 days' notice. No refund will be issued, and the full booking amount will be forfeited.\n\nRajput Royals reserves the right to reallocate the venue space and resources in the event of a no-show.`,
  },
  {
    id: "amendments",
    title: "Amendments to This Policy",
    content: `Rajput Royals reserves the right to update or amend this Cancellation Policy at any time. The version of this policy in effect at the time your booking is confirmed shall govern your booking, unless both parties agree otherwise in writing.\n\nFor any questions regarding this Cancellation Policy, please contact our events team at rajputroyalmiraj@gmail.com or call +91 9822544956. We are happy to discuss your specific circumstances and work with you to find the most suitable resolution.`,
  },
];

export default function CancellationPage() {
  const [openId, setOpenId] = useState("general");
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

        .cp-page {
          background: var(--ivory);
          min-height: 100vh;
        }

        /* ── Nav ── */
        .cp-nav {
          padding: 20px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          background: var(--ivory);
          border-bottom: 1px solid rgba(74,58,42,0.1);
          position: sticky; top: 0; z-index: 100;
        }

        .cp-logo { text-decoration: none; }

        .cp-logo-name {
          font-family: var(--font-caps);
          font-size: 1rem; font-weight: 500;
          letter-spacing: 0.16em; color: var(--brown); display: block;
        }

        .cp-logo-sub {
          font-family: var(--font-caps);
          font-size: 0.42rem; letter-spacing: 0.38em;
          text-transform: uppercase; color: var(--gold);
          display: block; margin-top: 2px;
        }

        .cp-back {
          font-family: var(--font-caps);
          font-size: 0.5rem; letter-spacing: 0.26em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(74,58,42,0.4);
          display: flex; align-items: center; gap: 8px;
          transition: color 0.3s;
        }

        .cp-back:hover { color: var(--gold); }

        .cp-back-arrow {
          display: inline-block; width: 16px; height: 1px;
          background: currentColor; position: relative;
        }

        .cp-back-arrow::before {
          content: ''; position: absolute; left: 0; top: -3px;
          width: 6px; height: 6px;
          border-left: 1px solid currentColor;
          border-bottom: 1px solid currentColor;
          transform: rotate(45deg);
        }

        /* ── Hero ── */
        .cp-hero { text-align: center; padding: 64px 48px 48px; }

        .cp-hero-title-row {
          display: flex; align-items: center;
          justify-content: center; gap: 20px; margin-bottom: 16px;
        }

        .cp-line { width: 80px; height: 1px; background: var(--gold); flex-shrink: 0; }

        .cp-hero-title {
          font-family: var(--font-caps);
          font-size: clamp(1.4rem, 3vw, 2.6rem);
          font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
        }

        .cp-hero-sub {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-weight: 300; color: rgba(74,58,42,0.55);
          line-height: 1.7; max-width: 600px;
          margin: 0 auto 40px;
        }

        .cp-hero-sub-title-row {
          display: flex; align-items: center;
          justify-content: center; gap: 20px; margin-bottom: 12px;
        }

        .cp-hero-sub-title {
          font-family: var(--font-caps);
          font-size: clamp(1.1rem, 2.2vw, 1.8rem);
          font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--brown);
        }

        .cp-hero-meta {
          font-family: var(--font-display);
          font-style: italic; font-size: 0.92rem;
          color: rgba(74,58,42,0.38);
          letter-spacing: 0.04em; margin-bottom: 48px;
        }

        /* ── Quick summary table ── */
        .cp-summary-wrap {
          max-width: 960px; margin: 0 auto;
          padding: 0 48px 48px;
          border-bottom: 1px solid rgba(74,58,42,0.1);
        }

        .cp-summary-label {
          font-family: var(--font-caps);
          font-size: 0.7rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--brown); margin-bottom: 20px; display: block;
        }

        .cp-table {
          width: 100%;
          border-collapse: collapse;
        }

        .cp-table th {
          font-family: var(--font-caps);
          font-size: 0.52rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--ivory);
          background: var(--brown);
          padding: 14px 20px; text-align: left;
          font-weight: 500;
        }

        .cp-table td {
          font-family: var(--font-display);
          font-size: 1rem; font-weight: 400;
          color: rgba(74,58,42,0.7);
          padding: 14px 20px;
          border-bottom: 1px solid rgba(74,58,42,0.08);
        }

        .cp-table tr:last-child td { border-bottom: none; }

        .cp-table tr:nth-child(even) td {
          background: rgba(201,164,108,0.05);
        }

        .cp-table .refund-nil {
          color: rgba(74,58,42,0.4);
          font-style: italic;
        }

        .cp-table .refund-full {
          color: var(--brown);
          font-weight: 600;
        }

        /* ── Intro ── */
        .cp-intro-wrap {
          max-width: 960px; margin: 0 auto;
          padding: 40px 48px;
          border-bottom: 1px solid rgba(74,58,42,0.1);
        }

        .cp-intro-heading {
          font-family: var(--font-caps);
          font-size: 0.7rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--brown); margin-bottom: 20px;
        }

        .cp-intro-p {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 400;
          line-height: 1.9; color: rgba(74,58,42,0.65);
          margin-bottom: 16px;
        }

        /* ── Accordion ── */
        .cp-accordion {
          max-width: 960px; margin: 0 auto;
          padding: 0 48px 80px;
        }

        .cp-item { border-bottom: 1px solid rgba(74,58,42,0.12); }
        .cp-item:first-of-type { border-top: 1px solid rgba(74,58,42,0.12); }

        .cp-trigger {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between;
          padding: 22px 0; background: none;
          border: none; cursor: pointer; text-align: left; gap: 16px;
        }

        .cp-trigger-title {
          font-family: var(--font-caps);
          font-size: clamp(0.62rem, 1.1vw, 0.75rem);
          font-weight: 400; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--brown);
          transition: color 0.3s;
        }

        .cp-trigger:hover .cp-trigger-title,
        .cp-item.open .cp-trigger-title { color: var(--gold); }

        .cp-icon {
          flex-shrink: 0; width: 20px; height: 20px;
          position: relative;
        }

        .cp-icon::before, .cp-icon::after {
          content: ''; position: absolute; background: var(--gold);
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .cp-icon::before { width: 14px; height: 1px; top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .cp-icon::after  { width: 1px; height: 14px; top: 50%; left: 50%; transform: translate(-50%,-50%); }

        .cp-item.open .cp-icon::after {
          transform: translate(-50%,-50%) rotate(90deg); opacity: 0;
        }

        .cp-answer {
          overflow: hidden; max-height: 0;
          transition: max-height 0.5s ease, padding 0.3s ease;
        }

        .cp-item.open .cp-answer { max-height: 1200px; padding-bottom: 28px; }

        .cp-answer-inner { display: flex; flex-direction: column; gap: 14px; }

        .cp-answer-p {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 400;
          line-height: 1.9; color: rgba(74,58,42,0.65);
        }

        /* ── Footer ── */
        .cp-footer {
          background: var(--brown); padding: 32px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }

        .cp-footer-brand {
          font-family: var(--font-caps);
          font-size: 0.58rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: rgba(247,243,238,0.5);
        }

        .cp-footer-brand span { color: var(--gold); }

        .cp-footer-links { display: flex; align-items: center; gap: 8px; }

        .cp-footer-link {
          font-family: var(--font-caps);
          font-size: 0.48rem; letter-spacing: 0.2em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(247,243,238,0.35); transition: color 0.3s;
        }

        .cp-footer-link:hover { color: var(--gold); }

        .cp-footer-sep {
          width: 3px; height: 3px;
          background: rgba(201,164,108,0.3);
          transform: rotate(45deg); flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .cp-nav           { padding: 16px 20px; }
          .cp-hero          { padding: 48px 20px 36px; }
          .cp-summary-wrap  { padding: 0 20px 36px; }
          .cp-intro-wrap    { padding: 32px 20px; }
          .cp-accordion     { padding: 0 20px 64px; }
          .cp-footer        { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          .cp-line          { width: 40px; }
          .cp-table th,
          .cp-table td      { padding: 10px 12px; font-size: 0.9rem; }
        }
      `}</style>

      <div className="cp-page">
        <div className="cp-hero">
          <div className="cp-hero-title-row">
            <span className="cp-line" />
            <h1 className="cp-hero-title">Cancellation Policy</h1>
            <span className="cp-line" />
          </div>
          <p className="cp-hero-sub">
            We understand that plans can change. Please read our cancellation
            and refund terms carefully before confirming your booking with us.
          </p>
          <div className="cp-hero-sub-title-row">
            <span className="cp-line" />
            <h2 className="cp-hero-sub-title">Cancellation & Refund Terms</h2>
            <span className="cp-line" />
          </div>
          <p className="cp-hero-meta">
            Effective: 1st January 2025 &nbsp;·&nbsp; Last Updated: March 2026
          </p>
        </div>

        {/* Quick reference table */}
        <div className="cp-summary-wrap">
          <span className="cp-summary-label">Quick Reference — Refund Schedule</span>
          <table className="cp-table">
            <thead>
              <tr>
                <th>Cancellation Notice</th>
                <th>Refund Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>More than 180 days before event</td>
                <td className="refund-full">80% refund</td>
              </tr>
              <tr>
                <td>90 – 179 days before event</td>
                <td>50% refund</td>
              </tr>
              <tr>
                <td>30 – 89 days before event</td>
                <td>25% refund</td>
              </tr>
              <tr>
                <td>Fewer than 30 days before event</td>
                <td className="refund-nil">No refund</td>
              </tr>
              <tr>
                <td>Booking deposit (at any time)</td>
                <td className="refund-nil">Non-refundable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cp-intro-wrap">
          <h3 className="cp-intro-heading">Introduction</h3>
          <p className="cp-intro-p">
            "All bookings at Rajput Royals are subject to this Cancellation Policy. We are committed to being transparent and fair in all matters relating to cancellations, postponements, and refunds."
          </p>
          <p className="cp-intro-p">
            Please read this policy carefully before confirming your booking. By making a payment or confirming a reservation, you agree to be bound by these terms.
          </p>
        </div>

        <div className="cp-accordion">
          {sections.map((s) => (
            <div key={s.id} className={`cp-item ${openId === s.id ? "open" : ""}`}>
              <button className="cp-trigger" onClick={() => toggle(s.id)} aria-expanded={openId === s.id}>
                <span className="cp-trigger-title">{s.title}</span>
                <span className="cp-icon" aria-hidden="true" />
              </button>
              <div className="cp-answer">
                <div className="cp-answer-inner">
                  {s.content.split("\n\n").map((para, i) => (
                    <p className="cp-answer-p" key={i}>{para}</p>
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