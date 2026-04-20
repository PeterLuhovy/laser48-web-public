import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laser48.sk"),
  title: {
    default: "LASER48 | Rýchle laserové rezanie kovov | Express 24–48h",
    template: "%s | LASER48",
  },
  description:
    "Rýchle laserové rezanie kovov — express dodanie do 24–48 hodín. Nerezová oceľ, čierna oceľ, hliník. Cenová ponuka do 24h. Púchov, Slovensko.",
  alternates: {
    canonical: "/",
    languages: {
      "sk-SK": "/",
      "cs-CZ": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "LASER48",
    images: [
      {
        url: "/images/hero-laser.png",
        width: 1200,
        height: 630,
        alt: "LASER48 — Laserové rezanie kovov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LASER48 | Rýchle laserové rezanie kovov | Express 24–48h",
    description:
      "Rýchle laserové rezanie kovov — express dodanie do 24–48 hodín. Cenová ponuka do 24h. Púchov, Slovensko.",
    images: ["/images/hero-laser.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <a href="#main" className="skip-link">
          Preskočiť na obsah
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
