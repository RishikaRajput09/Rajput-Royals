"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home",        href: "/" },
  { label: "About Us",    href: "#about" },
  { label: "Gallery",     href: "/Gallery" },
  { label: "Amenities",   href: "#amenities" },
  { label: "Contact Us",  href: "#contact" },
  { label: "FAQ",         href: "#contact" },
];

const amenityLinks = [
  { label: "Grand Banquet Hall",  href: "#amenities" },
  { label: "Open Sky Lawn",       href: "#amenities" },
  { label: "Vidhi Mandap",        href: "#amenities" },
  { label: "Haldi Stage",         href: "#amenities" },
  { label: "Mehendi Pavilion",    href: "#amenities" },
  { label: "Rooms & Suites",      href: "#amenities" },
  { label: "Buffet & Dining",     href: "#amenities" },
  { label: "Grand Entrance",      href: "#amenities" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rajputroyals_miraj/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919822544956",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #1a1008;
          overflow: hidden;
          position: relative;
        }

        /* top gold rule */
        .footer::before {
          content: '';
          display: block;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201,164,108,0.6) 30%,
            rgba(201,164,108,0.6) 70%,
            transparent 100%
          );
        }

        /* ── Main footer body ── */
        .footer-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px 64px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.2fr 1fr;
          gap: 56px;
        }

        /* ─── Col 1: Brand ─── */
        .footer-brand {}

        .footer-logo-name {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          color: var(--ivory, #F7F3EE);
          display: block;
          margin-bottom: 4px;
        }

        .footer-logo-rule {
          display: flex; align-items: center;
          gap: 6px; margin-bottom: 4px;
        }

        .flr-line {
          height: 1px; width: 22px;
          background: rgba(201,164,108,0.5);
        }

        .flr-gem {
          width: 4px; height: 4px;
          background: var(--gold,#C9A46C);
          transform: rotate(45deg); flex-shrink: 0;
        }

        .footer-logo-sub {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.48rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--gold, #C9A46C);
          display: block;
          margin-bottom: 24px;
        }

        .footer-tagline {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.98rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(247,243,238,0.45);
          margin-bottom: 28px;
          max-width: 260px;
        }

        /* contact info */
        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fci-item {
          display: flex; align-items: flex-start;
          gap: 10px;
        }

        .fci-dot {
          width: 4px; height: 4px;
          background: var(--gold, #C9A46C);
          transform: rotate(45deg);
          flex-shrink: 0;
          margin-top: 7px;
        }

        .fci-text {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.9rem;
          color: rgba(247,243,238,0.45);
          line-height: 1.5;
        }

        .fci-text a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s;
        }

        .fci-text a:hover { color: var(--gold, #C9A46C); }

        /* ─── Col 2 & 3: Links ─── */
        .footer-col-title {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ivory, #F7F3EE);
          margin-bottom: 6px;
          display: block;
        }

        .footer-col-rule {
          display: flex; align-items: center;
          gap: 6px; margin-bottom: 24px;
        }

        .fcr-line { height: 1px; width: 28px; background: rgba(201,164,108,0.35); }
        .fcr-gem  { width: 3px; height: 3px; background: var(--gold,#C9A46C); transform: rotate(45deg); flex-shrink:0; }

        .footer-links {
          display: flex; flex-direction: column; gap: 12px;
          list-style: none; margin: 0; padding: 0;
        }

        .footer-link {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.95rem;
          font-weight: 400;
          text-decoration: none;
          color: rgba(247,243,238,0.45);
          display: flex; align-items: center; gap: 8px;
          transition: color 0.3s, gap 0.3s;
          letter-spacing: 0.02em;
        }

        .footer-link::before {
          content: '';
          width: 12px; height: 1px;
          background: var(--gold, #C9A46C);
          opacity: 0;
          transition: opacity 0.3s, width 0.3s;
          flex-shrink: 0;
        }

        .footer-link:hover {
          color: var(--ivory, #F7F3EE);
          gap: 12px;
        }

        .footer-link:hover::before { opacity: 1; }

        /* ─── Col 4: Socials ─── */
        .footer-socials {
          display: flex; flex-direction: column; gap: 14px;
          margin-bottom: 32px;
        }

        .social-link {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none;
          color: rgba(247,243,238,0.45);
          transition: color 0.3s;
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .social-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(201,164,108,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          color: rgba(247,243,238,0.45);
        }

        .social-link:hover { color: var(--ivory, #F7F3EE); }
        .social-link:hover .social-icon {
          background: var(--gold, #C9A46C);
          border-color: var(--gold, #C9A46C);
          color: #fff;
        }

        /* ── Ornament divider ── */
        .footer-divider {
          display: flex; align-items: center;
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .fd-line { flex: 1; height: 1px; background: rgba(201,164,108,0.12); }
        .fd-ornament {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-style: italic;
          font-size: 0.85rem;
          color: rgba(201,164,108,0.7);
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: var(--font-display, 'Cormorant Garamond', serif);
          font-size: 0.85rem;
          color: rgba(247,243,238,0.65);
          letter-spacing: 0.03em;
        }

        .footer-copy span { color: var(--gold, #C9A46C); }

        .footer-legal {
          display: flex; align-items: center; gap: 6px;
          flex-wrap: wrap;
        }

        .legal-link {
          font-family: var(--font-caps, 'Cinzel', serif);
          font-size: 0.48rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(247,243,238,0.75);
          transition: color 0.3s;
        }

        .legal-link:hover { color: var(--gold, #C9A46C); }

        .legal-sep {
          width: 3px; height: 3px;
          background: rgba(201,164,108,0.3);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 640px) {
          .footer-body {
            grid-template-columns: 1fr;
            padding: 56px 24px 48px;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 24px;
          }
          .footer-divider { padding: 0 24px; }
        }
      `}</style>

      <footer className="footer" id="footer">

        {/* ── Main body ── */}
        <div className="footer-body">

          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <span className="footer-logo-name">Rajput Royals</span>
            <div className="footer-logo-rule">
              <span className="flr-line" /><span className="flr-gem" /><span className="flr-line" />
            </div>
            <span className="footer-logo-sub">Wedding Destination</span>

            <p className="footer-tagline">
              A legacy of grandeur, warmth, and timeless celebrations, crafted
              for families who believe their love story deserves a royal setting.
            </p>

            <div className="footer-contact-info">
              <div className="fci-item">
                <span className="fci-dot" />
                <span className="fci-text">Rajput Royals, Kolhapur Road, Miraj, Sangli Miraj Kupwad, Maharashtra 416410</span>
              </div>
              <div className="fci-item">
                <span className="fci-dot" />
                <span className="fci-text">
                  <a href="tel:+919876543210">+91 9822544956</a>
                </span>
              </div>
              <div className="fci-item">
                <span className="fci-dot" />
                <span className="fci-text">
                  <a href="mailto:info@rajputroyals.in">rajputroyalmiraj@gmail.com</a>
                </span>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <span className="footer-col-title">Quick Links</span>
            <div className="footer-col-rule">
              <span className="fcr-line" /><span className="fcr-gem" />
            </div>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Amenities */}
          <div>
            <span className="footer-col-title">Our Spaces</span>
            <div className="footer-col-rule">
              <span className="fcr-line" /><span className="fcr-gem" />
            </div>
            <ul className="footer-links">
              {amenityLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Socials + Newsletter */}
          <div>
            <span className="footer-col-title">Follow Us</span>
            <div className="footer-col-rule">
              <span className="fcr-line" /><span className="fcr-gem" />
            </div>

            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Ornament divider */}
        <div className="footer-divider">
          <span className="fd-line" />
          <span className="fd-ornament">~ Est. 2005 · Sangli-Miraj, India ~</span>
          <span className="fd-line" />
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Rajput Royals</span>. All rights reserved.
          </p>

          <div className="footer-legal">
            <Link href="/terms" className="legal-link">Terms & Conditions</Link>
            <span className="legal-sep" />
            <Link href="/Privacy" className="legal-link">Privacy Policy</Link>
            <span className="legal-sep" />
            <Link href="/Cancellation" className="legal-link">Cancellation Policy</Link>
          </div>
        </div>

      </footer>
    </>
  );
}