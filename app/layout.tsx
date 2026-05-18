import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AxisScript from "@/components/AxisScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veran Biosystems",
  description: "Automated bioprocessing infrastructure",
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
      <head>
        <link rel="stylesheet" href="/css/templatemo-axis-industrial.css" />
        <link rel="stylesheet" href="/css/templatemo-axis-landing-page.css" />
        <link rel="stylesheet" href="/css/templatemo-axis-main-page.css" />
        <link rel="stylesheet" href="/css/templatemo-axis-the-observer.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <AxisScript />
      </body>
    </html>
  );
}