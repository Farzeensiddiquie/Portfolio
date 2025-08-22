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
  title: "Farzeen Wasif | Portfolio",
  description:
    "Farzeen’s portfolio showcasing modern, responsive, and visually polished web applications built with React, Next.js, GSAP, Framer Motion, and pixel-perfect UI design.",
  applicationName: "Farzeen Portfolio",
  keywords: [
    "Farzeen Wasif",
    "Farzeen Siddiqui",
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
    siteName: "Farzeen Wasif",
    images: [
      {
        url: "/logo.png", // ✅ use your custom logo/preview image
        width: 1200,
        height: 630,
        alt: "Farzeen Wasif Portfolio Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Farzeen3284",
    creator: "@Farzeen3284",
    title: "Farzeen Wasif | Portfolio",
    description:
      "Modern, responsive, and visually polished web applications with smooth animations and pixel-perfect UI.",
    images: ["/logo.png"], // ✅ use your custom logo
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png", // ✅ logo for Apple devices
  },

  // ✅ Google Search Console verification
  verification: {
    google: "kCk7rusaqikn6su9cco5Luobqb-ptsFHYGqNWCCjBzU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Manifest for PWA + branding */}
        <link rel="manifest" href="/manifest.json" />

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
                "https://www.linkedin.com/in/farzeen-wasif",
                "https://github.com/Farzeensiddiquie",
              ],
              jobTitle: "Full Stack Developer",
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
