import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Farzeen Siddiqui | Portfolio",
    description:
      "Modern, responsive, and visually polished web applications with smooth animations and pixel-perfect UI.",
    siteName: "Farzeen Portfolio",
    images: [
      {
        url: "/preview.jpg", // Place this in /public
        width: 1200,
        height: 630,
        alt: "Farzeen Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Farzeen | Web Developer Portfolio",
    description:
      "Modern, responsive, and visually polished web applications with smooth animations and pixel-perfect UI.",
    images: ["/preview.jpg"],
    creator: "@yourtwitterhandle", // Optional
  },

  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
