import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defend — AI Home Security, No Monthly Fees",
  description:
    "AI-powered solar home security cameras installed in under 2 hours. No subscriptions. No cloud. No monthly fees. Covering the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060b14] text-[#f0f4ff]">
        {children}
      </body>
    </html>
  );
}
