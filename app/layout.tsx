import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Lesuuh | Frontend Developer",
  description:
    "Hi, I'm Lesuuh — a frontend developer who builds fast, functional, and user-friendly web apps using React, Next.js, and Tailwind CSS.",
  keywords: [
    "Lesuuh",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind",
    "Portfolio",
    "Web Developer in Nigeria",
  ],
  authors: [{ name: "Lesuuh", url: "https://lesuuh.vercel.app" }],
  creator: "Lesuuh",
  metadataBase: new URL("https://lesuuh.vercel.app"),
  openGraph: {
    title: "Lesuuh | Frontend Developer Portfolio",
    description:
      "Explore my projects and experience as a frontend developer specializing in React, Next.js, and Tailwind CSS.",
    url: "https://lesuuh.vercel.app",
    siteName: "Lesuuh",
    images: [
      {
        url: "/images/me.webp",
        width: 1200,
        height: 630,
        alt: "Lesuuh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesuuh | Frontend Developer",
    description: "Check out my latest frontend work using React and Next.js.",
    images: ["/images/me.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
