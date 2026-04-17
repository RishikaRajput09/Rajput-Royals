"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content: `When you engage with Rajput Royals — whether through our website, telephone, email, or in person — we may collect the following categories of personal information:\n\nIdentification Information: Your full name, date of birth, and government-issued identification where required for event registration or accommodation.\n\nContact Information: Your postal address, email address, and telephone number(s).\n\nEvent Information: Details relating to your event, including the nature of the celebration, guest count, preferred dates, and any special requirements or preferences you share with us.\n\nPayment Information: Billing address and transaction details. Please note that Rajput Royals does not store complete payment card details on its servers. All payment processing is handled through secure, PCI-compliant third-party providers.\n\nCommunication Records: Correspondence exchanged between you and our team via email, telephone, or written communication.\n\nWebsite Usage Data: If you visit our website, we may collect technical information such as your IP address, browser type, pages visited, and time spent on the site, through standard web analytics tools.`,
  },
  {
    id: "use",
    title: "How We Use Your Information",
    content: `Rajput Royals uses the personal information we collect solely for legitimate business purposes directly related to the services we provide. These include:\n\nTo process and confirm your event booking or enquiry.\n\nTo communicate with you regarding your event, including sending confirmations, updates, reminders, and post-event correspondence.\n\nTo personalise your experience and ensure that your event requirements are met to the highest standard.\n\nTo process payments and maintain accurate financial records as required by law.\n\nTo improve our services, venue offerings, and overall guest experience based on feedback and usage patterns.\n\nTo comply with applicable legal obligations, including those under Indian law.\n\nWe do not use your personal information for automated decision-making or profiling purposes.`,
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: `Rajput Royals does not sell, rent, or trade your personal information to any third party for marketing or commercial purposes.\n\nWe may share your information only in the following limited circumstances:\n\nService Providers: With trusted third-party vendors and service providers — such as caterers, decorators, photographers, and payment processors — who require access to your information solely to deliver services in connection with your event, and who are bound by confidentiality obligations.\n\nLegal Requirements: Where we are required by law, court order, or governmental authority to disclose information, we will do so in compliance with applicable legal obligations.\n\nBusiness Transfers: In the unlikely event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to equivalent privacy protections.\n\nIn all cases, we limit the information shared to only what is strictly necessary for the stated purpose.`,
  },
  {
    id: "retention",
    title: "Data Retention",
    content: `We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law.\n\nEvent-related records are typically retained for a period of seven (7) years following your event, in accordance with standard financial and legal record-keeping requirements under Indian law.\n\nWhere you have subscribed to receive communications from us, we will retain your contact information until you choose to unsubscribe or request deletion.\n\nUpon expiry of the applicable retention period, your personal information will be securely deleted or anonymised.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    content: `You have the following rights with respect to your personal information held by Rajput Royals:\n\nRight to Access: You may request a copy of the personal information we hold about you at any time.\n\nRight to Correction: You may request that we correct any inaccurate or incomplete information.\n\nRight to Deletion: You may request that we delete your personal information, subject to any legal obligations requiring us to retain it.\n\nRight to Withdraw Consent: Where we process your information on the basis of consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.\n\nTo exercise any of these rights, please contact us at rajputroyalmiraj@gmail.com. We will respond to all requests within thirty (30) days.`,
  },
  {
    id: "cookies",
    title: "Cookies & Website Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and to analyse website traffic. Cookies are small text files stored on your device that help us understand how visitors interact with our site.\n\nWe use the following types of cookies:\n\nEssential Cookies: Required for the basic functionality of our website and cannot be disabled.\n\nAnalytics Cookies: Used to collect anonymised data about how visitors use our website, helping us improve our content and user experience.\n\nYou may disable cookies through your browser settings at any time. Please note that disabling cookies may affect the functionality of certain parts of our website.`,
  },
  {
    id: "security",
    title: "Data Security",
    content: `Rajput Royals takes the security of your personal information seriously and implements appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction.\n\nThese measures include restricted access controls, secure data storage, and regular review of our information security practices.\n\nHowever, please be aware that no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.`,
  },
  {
    id: "governing",
    title: "Governing Law",
    content: `This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India, including the Information Technology Act, 2000, and its associated rules and regulations as amended from time to time.\n\nAny disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts located in Sangli, Maharashtra.`,
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: `Rajput Royals reserves the right to update or amend this Privacy Policy at any time. We will notify you of any material changes by posting the revised policy on our website with an updated effective date. Your continued use of our services following such changes constitutes your acceptance of the revised policy.\n\nFor any questions, concerns, or requests relating to this Privacy Policy, please contact us at rajputroyalmiraj@gmail.com or call +91 98225 44956.`,
  },
];

export default function PrivacyPage() {
  const [openId, setOpenId] = useState("information");
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

        .pp-page {
          background: var(--ivory);
          min-height: 100vh;
        }

        /* ── Nav ── */
        .pp-nav {
          padding: 20px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          background: var(--ivory);
          border-bottom: 1px solid rgba(74,58,42,0.1);
          position: sticky; top: 0; z-index: 100;
        }

        .pp-logo { text-decoration: none; }

        .pp-logo-name {
          font-family: var(--font-caps);
          font-size: 1rem; font-weight: 500;
          letter-spacing: 0.16em;
          color: var(--brown); display: block;
        }

        .pp-logo-sub {
          font-family: var(--font-caps);
          font-size: 0.42rem; letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--gold); display: block; margin-top: 2px;
        }

        .pp-back {
          font-family: var(--font-caps);
          font-size: 0.5rem; letter-spacing: 0.26em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(74,58,42,0.4);
          display: flex; align-items: center; gap: 8px;
          transition: color 0.3s;
        }

        .pp-back:hover { color: var(--gold); }

        .pp-back-arrow {
          display: inline-block; width: 16px; height: 1px;
          background: currentColor; position: relative;
        }

        .pp-back-arrow::before {
          content: ''; position: absolute; left: 0; top: -3px;
          width: 6px; height: 6px;
          border-left: 1px solid currentColor;
          border-bottom: 1px solid currentColor;
          transform: rotate(45deg);
        }

        /* ── Hero ── */
        .pp-hero {
          text-align: center;
          padding: 64px 48px 48px;
        }

        .pp-hero-title-row {
          display: flex; align-items: center;
          justify-content: center; gap: 20px; margin-bottom: 16px;
        }

        .pp-line { width: 80px; height: 1px; background: var(--gold); flex-shrink: 0; }

        .pp-hero-title {
          font-family: var(--font-caps);
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
        }

        .pp-hero-sub {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-weight: 300; color: rgba(74,58,42,0.55);
          line-height: 1.7; max-width: 600px;
          margin: 0 auto 40px;
        }

        .pp-hero-sub-title-row {
          display: flex; align-items: center;
          justify-content: center; gap: 20px; margin-bottom: 12px;
        }

        .pp-hero-sub-title {
          font-family: var(--font-caps);
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--brown);
        }

        .pp-hero-meta {
          font-family: var(--font-display);
          font-style: italic; font-size: 0.92rem;
          color: rgba(74,58,42,0.38);
          letter-spacing: 0.04em; margin-bottom: 48px;
        }

        /* ── Intro ── */
        .pp-intro-wrap {
          max-width: 960px; margin: 0 auto;
          padding: 0 48px 40px;
          border-bottom: 1px solid rgba(74,58,42,0.1);
        }

        .pp-intro-heading {
          font-family: var(--font-caps);
          font-size: 0.7rem; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--brown); margin-bottom: 20px;
        }

        .pp-intro-p {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 400;
          line-height: 1.9; color: rgba(74,58,42,0.65);
          margin-bottom: 16px;
        }

        /* ── Accordion ── */
        .pp-accordion {
          max-width: 960px; margin: 0 auto;
          padding: 0 48px 80px;
        }

        .pp-item { border-bottom: 1px solid rgba(74,58,42,0.12); }
        .pp-item:first-of-type { border-top: 1px solid rgba(74,58,42,0.12); }

        .pp-trigger {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between;
          padding: 22px 0; background: none;
          border: none; cursor: pointer; text-align: left; gap: 16px;
        }

        .pp-trigger-title {
          font-family: var(--font-caps);
          font-size: clamp(0.62rem, 1.1vw, 0.75rem);
          font-weight: 400; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--brown);
          transition: color 0.3s;
        }

        .pp-trigger:hover .pp-trigger-title,
        .pp-item.open .pp-trigger-title { color: var(--gold); }

        .pp-icon {
          flex-shrink: 0; width: 20px; height: 20px;
          position: relative; color: var(--gold);
        }

        .pp-icon::before, .pp-icon::after {
          content: ''; position: absolute;
          background: var(--gold);
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .pp-icon::before { width: 14px; height: 1px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .pp-icon::after  { width: 1px; height: 14px; top: 50%; left: 50%; transform: translate(-50%, -50%); }

        .pp-item.open .pp-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
          opacity: 0;
        }

        .pp-answer {
          overflow: hidden; max-height: 0;
          transition: max-height 0.5s ease, padding 0.3s ease;
        }

        .pp-item.open .pp-answer { max-height: 1200px; padding-bottom: 28px; }

        .pp-answer-inner { display: flex; flex-direction: column; gap: 14px; }

        .pp-answer-p {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 400;
          line-height: 1.9; color: rgba(74,58,42,0.65);
        }

        /* ── Footer ── */
        .pp-footer {
          background: var(--brown);
          padding: 32px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }

        .pp-footer-brand {
          font-family: var(--font-caps);
          font-size: 0.58rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: rgba(247,243,238,0.5);
        }

        .pp-footer-brand span { color: var(--gold); }

        .pp-footer-links { display: flex; align-items: center; gap: 8px; }

        .pp-footer-link {
          font-family: var(--font-caps);
          font-size: 0.48rem; letter-spacing: 0.2em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(247,243,238,0.35); transition: color 0.3s;
        }

        .pp-footer-link:hover { color: var(--gold); }

        .pp-footer-sep {
          width: 3px; height: 3px;
          background: rgba(201,164,108,0.3);
          transform: rotate(45deg); flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .pp-nav        { padding: 16px 20px; }
          .pp-hero       { padding: 48px 20px 36px; }
          .pp-intro-wrap { padding: 0 20px 32px; }
          .pp-accordion  { padding: 0 20px 64px; }
          .pp-footer     { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          .pp-line       { width: 40px; }
        }
      `}</style>

      <div className="pp-page">
        <div className="pp-hero">
          <div className="pp-hero-title-row">
            <span className="pp-line" />
            <h1 className="pp-hero-title">Privacy Policy</h1>
            <span className="pp-line" />
          </div>
          <p className="pp-hero-sub">
            At Rajput Royals, your privacy is of the utmost importance to us.
            This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="pp-hero-sub-title-row">
            <span className="pp-line" />
            <h2 className="pp-hero-sub-title">Our Privacy Commitment</h2>
            <span className="pp-line" />
          </div>
          <p className="pp-hero-meta">
            Effective: 1st January 2025 &nbsp;·&nbsp; Last Updated: March 2026
          </p>
        </div>

        <div className="pp-intro-wrap">
          <h3 className="pp-intro-heading">Introduction</h3>
          <p className="pp-intro-p">
            "Rajput Royals is committed to protecting the privacy and personal information of all clients, guests, and visitors who engage with our venue and services. This Privacy Policy describes the types of information we collect, how we use and protect it, and your rights in relation to it."
          </p>
          <p className="pp-intro-p">
            This policy applies to all personal information collected by Rajput Royals through our website, telephone, email, in-person interactions, and any other means of engagement.
          </p>
          <p className="pp-intro-p">
            By engaging with our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
          </p>
        </div>

        <div className="pp-accordion">
          {sections.map((s) => (
            <div key={s.id} className={`pp-item ${openId === s.id ? "open" : ""}`}>
              <button className="pp-trigger" onClick={() => toggle(s.id)} aria-expanded={openId === s.id}>
                <span className="pp-trigger-title">{s.title}</span>
                <span className="pp-icon" aria-hidden="true" />
              </button>
              <div className="pp-answer">
                <div className="pp-answer-inner">
                  {s.content.split("\n\n").map((para, i) => (
                    <p className="pp-answer-p" key={i}>{para}</p>
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