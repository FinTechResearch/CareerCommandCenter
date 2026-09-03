import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Command Center — AI-Powered Career Toolkit",
  description:
    "Track applications, match resumes, analyze jobs, generate cover letters and prepare for interviews — all in one AI-powered command center. Open source, powered by Groq.",
  keywords: [
    "job search",
    "AI career toolkit",
    "application tracker",
    "resume match",
    "Groq",
    "open source",
  ],
  openGraph: {
    title: "Career Command Center",
    description:
      "Track • Apply • Interview • Get Hired — an AI-powered career toolkit.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
