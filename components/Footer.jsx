import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-col">
          <h3>Noble Medic Wheels</h3>
          <p>
            Safe, reliable, and compassionate non-emergency medical
            transportation serving King & Pierce County.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/fleet">Fleet</Link></li>
            <li><Link href="/service-area">Service Area</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/brokers">For Brokers</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/blog">Resources</Link></li>
            <li><Link href="/contact">Request a Ride</Link></li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div className="footer-col">
          <h4>Cities We Serve</h4>
          <ul>
            <li><Link href="/locations/seattle">Seattle</Link></li>
            <li><Link href="/locations/tacoma">Tacoma</Link></li>
            <li><Link href="/locations/everett">Everett</Link></li>
            <li><Link href="/locations/renton">Renton</Link></li>
            <li><Link href="/locations/lynnwood">Lynnwood</Link></li>
            <li><Link href="/locations/federal-way">Federal Way</Link></li>
            <li><Link href="/locations/marysville">Marysville</Link></li>
            <li><Link href="/locations/lakewood">Lakewood</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <strong>Phone:</strong><br />
            <a href="tel:12533749087">253-374-9087</a>
          </p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:info@noblemedicwheels.com">
              info@noblemedicwheels.com
            </a>
          </p>
          <p>
            <strong>Service Area:</strong><br />
            King & Pierce County
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Noble Medic Wheels. All rights reserved.
      </div>
    </footer>
  );
}
