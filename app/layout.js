import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farzeen Siddiqui | Portfolio",
  description:
    "Farzeen’s portfolio showcasing modern, responsive, and visually polished web applications built with React, Next.js, GSAP, Framer Motion, and pixel-perfect UI design.",
  keywords: [
    "Farzeen Siddiqui",
    "Farzeen Wasif",
    "Farzeen",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend Developer",
    "GSAP",
    "Framer Motion",
    "Portfolio",
    "UI/UX",
  ],
  authors: [{ name: "Farzeen Wasif" }],
  creator: "Farzeen Wasif",
  publisher: "Farzeen Wasif",
  metadataBase: new URL("https://farzeensportfolio.vercel.app/"),

  alternates: {
    canonical: "https://farzeensportfolio.vercel.app/",
  },

  openGraph: {
    type: "website",
    url: "https://farzeensportfolio.vercel.app/",
    title: "Farzeen Wasif | Portfolio",
    description:
      "Modern, responsive, and visually polished web applications with smooth animations and pixel-perfect UI.",
    siteName: "Farzeen Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Farzeen Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Farzeen3284", // replace with your X/Twitter handle if you have one
    creator: "@Farzeen3284",
    title: "Farzeen Wasif | Portfolio",
    description:
      "Modern, responsive, and visually polished web applications with smooth animations and pixel-perfect UI.",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Farzeen Wasif",
              url: "https://farzeensportfolio.vercel.app/",
              sameAs: [
                "www.linkedin.com/in/farzeen-wasif", // update
                "https://github.com/Farzeensiddiquie", // update
              ],
              jobTitle: "Full stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open to Work",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
