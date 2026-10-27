import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kburge.com"),
  title: {
    default: "Katherine Burge",
    template: "%s, Katherine Burge",
  },
  description:
    "Learning developer and technical writer. Interactive applications, courses, documentation, explainer videos, and occasional experiments with hardware.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Instrument+Sans:wght@400;500&display=swap"
        />
      </head>
      <body>
        <div className="wrap">
          <header className="site-header">
            <Link href="/" className="name">
              Katherine Burge
            </Link>
            <nav className="site-nav" aria-label="Main">
              <Link href="/">Index</Link>
              <Link href="/#about">About</Link>
              <a href="https://www.linkedin.com/in/kburge/">LinkedIn</a>
              <a href="https://github.com/b-urge">GitHub</a>
              <a href="mailto:k@burge.world">k@burge.world</a>
            </nav>
          </header>
          {children}
          <footer className="site-footer">Katherine Burge, {new Date().getFullYear()}</footer>
        </div>
      </body>
    </html>
  );
}
