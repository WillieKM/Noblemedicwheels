"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="Noble Medic Wheels"
            width={160}
            height={50}
            style={{ height: "50px", width: "auto" }}
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav${open ? " open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/fleet" onClick={() => setOpen(false)}>Fleet</Link>
          <Link href="/service-area" onClick={() => setOpen(false)}>Service Area</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}>
            Request a Ride
          </Link>
        </nav>
      </div>
    </header>
  );
}
