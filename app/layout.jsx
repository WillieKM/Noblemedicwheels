import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import { medicalBusinessSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL("https://www.noblemedicwheels.com"),
  title: {
    template: "%s | Noble Medic Wheels",
    default:
      "Noble Medic Wheels — Non-Emergency Medical Transportation in King & Pierce County",
  },
  description:
    "Safe, ADA-compliant non-emergency medical transportation serving King, Pierce & Snohomish County — Seattle, Tacoma, Everett, Renton, Lynnwood, and more. Wheelchair rides, dialysis transport, and hospital discharges.",
  keywords: [
    "NEMT",
    "non-emergency medical transportation",
    "wheelchair transportation",
    "dialysis transportation",
    "King County",
    "Pierce County",
    "Seattle",
    "Tacoma",
    "medical transport Washington",
  ],
  openGraph: {
    type: "website",
    siteName: "Noble Medic Wheels",
    title: "Noble Medic Wheels — Non-Emergency Medical Transportation",
    description:
      "Safe, ADA-compliant NEMT serving King & Pierce County. Wheelchair rides, dialysis transport, and hospital discharges.",
    images: [{ url: "/logo.jpg", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Medic Wheels — NEMT in King & Pierce County",
    description:
      "Safe, ADA-compliant non-emergency medical transportation in King & Pierce County, Washington.",
  },
};

export default function RootLayout({ children }) {
  const schema = medicalBusinessSchema();
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
