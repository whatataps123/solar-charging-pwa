import type { Metadata, Viewport } from 'next';
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
  title: 'Solar Charging PWA', // Update title
  description: 'A PWA for monitoring solar charging.', // Update description
  manifest: '/manifest.json', // This links your manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SolarPWA',
  },
};

// Add this Viewport export to set the theme color
export const viewport: Viewport = {
  themeColor: '#000000', // Matches the theme_color in your manifest
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body /* {inter.className} */>{children}</body>
    </html>
  );
}
