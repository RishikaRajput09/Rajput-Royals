"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const faqs = [
  {
    q: "What types of events does Rajput Royals host?",
    a: "We host a wide range of celebrations including weddings, receptions, engagements, Haldi, Mehendi, Sangeet, birthday galas, anniversaries, and corporate events. Every occasion is treated with the same royal care.",
  },
  {
    q: "How many guests can the venue accommodate?",
    a: "Our Grand Banquet Hall accommodates up to 1,500 guests, while our Open Sky Lawn can host up to 2,000 guests for outdoor celebrations. We also have intimate spaces for smaller gatherings of 100–300 guests.",
  },
  {
    q: "Do you provide in-house catering?",
    a: "Yes, our in-house culinary team offers a curated multi-cuisine menu with live counters, regional Rajasthani specialties, and international fare. Custom menus tailored to your celebration are available on request. You are also welcome to bring your own caterer if preferred, with prior coordination.",
  },
  {
    q: "Can we bring our own decorators?",
    a: "Absolutely. While we have an in-house décor team experienced in royal setups, you are welcome to bring your own decorators. We simply ask for prior coordination to ensure a seamless experience.",
  },
  {
    q: "Are accommodation facilities available on-site?",
    a: "Yes, we have 30+ elegantly appointed rooms and dormitories for your family and guests, from clean and well maintained rooms to comfortable group dorms, all within the estate.",
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 6–8 months in advance for weddings, especially for peak season (October–February). For smaller events, 2–3 months notice is generally sufficient.",
  },
  {
    q: "Is a site visit possible before booking?",
    a: "Of course! We warmly welcome families to schedule a personal tour of the estate. Use the contact form to request a visit and our team will arrange a convenient time for you.",
  },
  {
    q: "What are the available payment methods?",
    a: "We accept payments via cash, credit/debit cards, and bank transfers. A deposit is required to confirm your wedding venue booking.",
  },
  {
    q: "Is parking available for guests?",
    a: "Yes, we offer ample on-site parking for guests, ensuring convenience during weddings and events.",
  },
  {
    q: "Can we have music or a DJ during the event?",
    a: "Absolutely! You can arrange live music or a DJ for your celebration. We can also recommend DJs familiar with our wedding venue setup.",
  },
];

const eventTypes = [
  "Wedding", "Reception", "Engagement", "Haldi Ceremony",
  "Mehendi", "Sangeet", "Birthday", "Anniversary", "Other",
];

// Replace with your actual Google Maps Embed API key and location
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Rajput+Royals+Miraj+Kolhapur+Road&output=embed";

export default function ContactFAQSection() {

  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          date: form.date,
          event: form.event,
          note: form.note,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ACK_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          date: form.date,
          event: form.event,
          note: form.note,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true); // ✅ THIS drives your UI
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        event: "",
        note: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };


  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    date: "", event: "", note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your backend / email service here
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .cf-section {
          background: var(--ivory, #F7F3EE);
          padding: 110px 48px;
          overflow: hidden;
        }

        /* ── Top header ── */
        .cf-header {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          margin-bottom: 72px;
        }

        .cf-eyebrow {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem; letter-spacing: 0.48em;
          font-weight: 600;   
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 14px;
        }

        .cf-heading {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 300; letter-spacing: 0.02em;
          color: var(--brown, #4A3A2A);
          margin: 0 0 20px;
        }

        .cf-rule { display: flex; align-items: center; gap: 10px; }
        .cf-rl   { width: 56px; height: 1px; background: rgba(201,164,108,0.45); }
        .cf-gem  { width: 5px; height: 5px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink:0; }

        /* ── Two-col grid ── */
        .cf-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* ════════════════════
           LEFT — FAQ
        ════════════════════ */
        .faq-col {}

        .faq-label {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem; letter-spacing: 0.38em;
          text-transform: uppercase;
          font-weight: 600;    
          color: var(--gold, #C9A46C);
          margin-bottom: 10px;
          display: block;
        }

        .faq-title {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.7rem, 2.5vw, 2.4rem);
          font-weight: 300;
          color: var(--brown, #4A3A2A);
          margin: 0 0 36px;
          line-height: 1.2;
        }

        /* accordion item */
        .faq-item {
          border-bottom: 1px solid rgba(74,58,42,0.12);
        }

        .faq-item:first-of-type {
          border-top: 1px solid rgba(74,58,42,0.12);
        }

        .faq-btn {
          width: 100%;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          background: none; border: none;
          cursor: pointer; text-align: left;
        }

        .faq-q {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: clamp(0.62rem, 1vw, 0.72rem);
          font-weight: 550;
          letter-spacing: 0.1em;
          color: var(--brown, #4A3A2A);
          line-height: 1.5;
          transition: color 0.3s;
        }

        .faq-btn:hover .faq-q,
        .faq-item.open .faq-q { color: var(--gold, #C9A46C); }

        /* plus/minus icon */
        .faq-icon {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border: 1px solid rgba(201,164,108,0.4);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s, border-color 0.3s, transform 0.4s;
          font-size: 1rem;
          color: var(--gold, #C9A46C);
        }

        .faq-item.open .faq-icon {
          background: var(--gold, #C9A46C);
          color: #fff;
          border-color: var(--gold, #C9A46C);
          transform: rotate(45deg);
        }

        /* answer panel */
        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s ease, padding 0.3s ease;
          padding: 0;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          padding-bottom: 20px;
        }

        .faq-a {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          font-weight: 400;
          line-height: 1.8;
          color: #7a6a55;
        }

        /* ════════════════════
           RIGHT — form + map
        ════════════════════ */
        .contact-col {}

        .contact-label {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem; letter-spacing: 0.38em;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          margin-bottom: 10px;
          display: block;
        }

        .contact-title {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: clamp(1.7rem, 2.5vw, 2.4rem);
          font-weight: 300;
          color: var(--brown, #4A3A2A);
          margin: 0 0 36px;
          line-height: 1.2;
        }

        /* form grid */
        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 36px;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .cf-field.full { grid-column: 1 / -1; }

        .cf-lbl {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(74,58,42,0.55);
        }

        .cf-input,
        .cf-select,
        .cf-textarea {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 1rem;
          font-weight: 400;
          color: var(--brown, #4A3A2A);
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(74,58,42,0.2);
          padding: 10px 0;
          outline: none;
          width: 100%;
          transition: border-color 0.3s;
          appearance: none;
        }

        .cf-input::placeholder,
        .cf-textarea::placeholder { 
          color: #8a7560; 
          opacity: 1;
        }
        .cf-input,
        .cf-select,
        .cf-textarea {
          color: #3e2f22;
        }

        .cf-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A46C'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 4px center;
          padding-right: 20px;
        }

        .cf-textarea {
          resize: none;
          height: 80px;
          line-height: 1.6;
        }

        /* submit btn */
        .cf-submit {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: var(--gold, #C9A46C);
          color: #fff;
          border: 1px solid var(--gold, #C9A46C);
          padding: 14px 36px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.32s;
          align-self: flex-start;
          margin-top: 8px;
        }

        .cf-submit::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown, #4A3A2A);
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.32s ease;
        }

        .cf-submit:hover::before { transform: scaleX(1); transform-origin: left; }
        .cf-submit:hover { box-shadow: 0 5px 22px rgba(201,164,108,0.32); }
        .cf-submit span { position: relative; z-index: 1; }

        /* success message */
        .cf-success {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 1.1rem;
          font-style: italic;
          color: var(--gold, #C9A46C);
          padding: 24px 0;
          text-align: center;
          border: 1px solid rgba(201,164,108,0.3);
          margin-bottom: 32px;
          letter-spacing: 0.04em;
        }

        /* ── Map ── */
        .cf-map-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          border: 1px solid rgba(201,164,108,0.25);
        }

        .cf-map-wrap iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          filter: sepia(20%) contrast(0.95);
        }

        /* map label */
        .cf-map-label {
          position: absolute;
          top: 14px; left: 14px;
          z-index: 2;
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.5rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #fff;
          background: var(--brown, #4A3A2A);
          padding: 7px 14px;
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .cf-section { padding: 80px 28px; }
          .cf-grid { grid-template-columns: 1fr; gap: 64px; }
          .cf-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .cf-section { padding: 64px 20px; }
          .cf-submit { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="cf-section" id="contact">

        {/* Header */}
        <div className="cf-header">
          <p className="cf-eyebrow">We'd Love to Hear From You</p>
          <h2 className="cf-heading">Get in Touch with Rajput Royals</h2>
          <div className="cf-rule">
            <span className="cf-rl" /><span className="cf-gem" /><span className="cf-rl" />
          </div>
        </div>

        <div className="cf-grid">

          {/* ── LEFT: FAQ ── */}
          <div className="faq-col">
            <span className="faq-label">Quick Answers</span>
            <h3 className="faq-title">Frequently Asked<br />Questions</h3>

            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p className="faq-a">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Form + Map ── */}
          <div className="contact-col">
            <span className="contact-label">Book a Visit · Send Enquiry</span>
            <h3 className="contact-title">Plan Your Royal<br />Celebration</h3>

            {submitted ? (
              <div className="cf-success">
                Thank you! We'll be in touch within 24 hours. ✦
              </div>
            ) : (
              <form ref={formRef} className="cf-form" onSubmit={sendEmail}>
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-lbl">Full Name</label>
                    <input className="cf-input" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-lbl">Phone Number</label>
                    <input className="cf-input" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-lbl">Email Address</label>
                    <input className="cf-input" name="email" type="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-lbl">Event Date</label>
                    <input className="cf-input" name="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                </div>

                <div className="cf-field">
                  <label className="cf-lbl">Event Type</label>
                  <select className="cf-select" name="event" value={form.event} onChange={handleChange} required>
                    <option value="" disabled>Select your celebration</option>
                    {eventTypes.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div className="cf-field">
                  <label className="cf-lbl">Additional Notes</label>
                  <textarea className="cf-textarea" name="note" placeholder="Tell us about your dream celebration..." value={form.note} onChange={handleChange} />
                </div>

                <button type="submit" className="cf-submit">
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

            {/* Map */}
            <div className="cf-map-wrap">
              <span className="cf-map-label">Rajput Royals · Sangli-Miraj</span>
              <iframe
                src={MAP_EMBED_URL}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajput Royals Location"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}