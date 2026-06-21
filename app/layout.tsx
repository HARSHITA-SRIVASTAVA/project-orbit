import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Harshita Srivastava | Project Orbit",
    template: "%s | Project Orbit",
  },

  description:
    "Backend Engineer and Full Stack Developer building scalable software and meaningful digital experiences.",

  keywords: [
    "Harshita Srivastava",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "MERN",
    "React",
    "Next.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "Harshita Srivastava",
    },
  ],

  creator: "Harshita Srivastava",

  metadataBase: new URL("https://project-orbit.vercel.app"),

  openGraph: {
    title: "Harshita Srivastava | Project Orbit",
    description:
      "Backend Engineer and Full Stack Developer building scalable software and meaningful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
