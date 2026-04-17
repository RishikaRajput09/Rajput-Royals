"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us",   href: "#about" },
  { label: "Gallery",    href: "/Gallery" },
  { label: "Amenities",  href: "#amenities" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQ",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isTransparentAllowed = pathname === "/Gallery";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── shared font import (single source of truth) ── */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

        :root {
          --ivory:       #F7F3EE;
          --brown:       #4A3A2A;
          --gold:        #C9A46C;
          --font-display:'Cormorant Garamond', serif;
          --font-caps:   'Cinzel', serif;
        }

        /* ── navbar shell ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.45s ease, box-shadow 0.45s ease;
        }

        .nav.solid {
          background: var(--ivory);
          box-shadow: 0 2px 20px rgba(74,58,42,0.09);
          border-bottom: 1px solid rgba(201,164,108,0.22);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          transition: padding 0.4s ease;
        }

        .nav.solid .nav-inner { padding: 14px 48px; }

        /* ── logo ── */
        .logo { text-decoration: none; display: flex; flex-direction: column; gap: 0; }

        .logo-name {
          font-family: var(--font-caps);
          font-size: 1.3rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          line-height: 1;
          color: var(--ivory);
          transition: color 0.4s;
        }

        .nav.solid .logo-name { color: var(--brown); }

        .logo-rule {
          display: flex; align-items: center; gap: 6px; margin-top: 4px;
        }

        .logo-line {
          height: 1px; width: 24px;
          background: rgba(247,243,238,0.45);
          transition: background 0.4s;
        }

        .nav.solid .logo-line { background: var(--gold); }

        .logo-gem {
          width: 4px; height: 4px;
          background: var(--gold);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .logo-sub {
          font-family: var(--font-caps);
          font-size: 0.52rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(247,243,238,0.6);
          margin-top: 3px;
          transition: color 0.4s;
        }

        .nav.solid .logo-sub { color: var(--gold); }

        /* ── nav links ── */
        .nav-links {
          display: flex; align-items: center;
          gap: 2.2rem; list-style: none; margin: 0; padding: 0;
        }

        .nav-link {
          font-family: var(--font-caps);
          font-size: 0.62rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(247,243,238,0.9);
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s;
        }

        .nav.solid .nav-link { color: var(--brown); }

        .nav-link::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.32s ease;
        }

        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after { width: 100%; }

        /* ── book now btn ── */
        .btn-book {
          font-family: var(--font-caps);
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold);
          color: #fff;
          border: 1px solid var(--gold);
          padding: 10px 22px;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.32s ease;
          display: inline-block;
        }

        .btn-book::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--brown);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.32s ease;
        }

        .btn-book:hover::before { transform: scaleX(1); transform-origin: left; }
        .btn-book:hover { box-shadow: 0 4px 18px rgba(201,164,108,0.35); }
        .btn-book span { position: relative; z-index: 1; }

        /* ── hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }

        .hline {
          display: block; height: 1.5px;
          background: rgba(247,243,238,0.9);
          transition: background 0.4s;
        }

        .nav.solid .hline { background: var(--brown); }
        .hline:nth-child(1) { width: 22px; }
        .hline:nth-child(2) { width: 16px; }
        .hline:nth-child(3) { width: 22px; }

        /* ── mobile overlay ── */
        .mobile-overlay {
          display: none;
          position: fixed; inset: 0;
          background: var(--ivory);
          z-index: 999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.4rem;
        }

        .mobile-overlay.open { display: flex; }

        .mobile-close {
          position: absolute; top: 26px; right: 32px;
          font-family: var(--font-caps);
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--brown);
          background: none; border: none; cursor: pointer;
        }

        .mobile-link {
          font-family: var(--font-caps);
          font-size: 1.05rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--brown);
          transition: color 0.3s;
        }

        .mobile-link:hover { color: var(--gold); }

        .mobile-tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.9rem;
          color: var(--gold);
          letter-spacing: 0.1em;
          margin-top: 8px;
        }

        @media (max-width: 900px) {
          .nav-links, .btn-book { display: none; }
          .hamburger { display: flex; }
        }

        @media (max-width: 480px) {
          .nav-inner { padding: 18px 20px; }
          .nav.solid .nav-inner { padding: 12px 20px; }
          .logo-name { font-size: 1.05rem; }
        }
      `}</style>

      <nav className={`nav ${(scrolled || !isTransparentAllowed) ? "solid" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-name">Rajput Royals</span>
            <div className="logo-rule">
              <span className="logo-line" />
              <span className="logo-gem" />
              <span className="logo-line" />
            </div>
            <span className="logo-sub">Wedding Destination</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="nav-link">{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span className="hline" />
            <span className="hline" />
            <span className="hline" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕ Close</button>
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="#book" className="btn-book" onClick={() => setMenuOpen(false)}>
          <span>Book Now</span>
        </Link>
        <p className="mobile-tagline">~ Where Royalty Meets Romance ~</p>
      </div>
    </>
  );
}