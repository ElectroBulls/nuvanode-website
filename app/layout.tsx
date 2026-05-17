import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BubbleCursor from "@/components/BubbleCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollAnimator from "@/components/ScrollAnimator";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuvanode | Talent Search & Advisory",
  description:
    "Nuvanode helps growing businesses build high-impact teams, scalable people practices, and strong culture through expert talent search and advisory services.",
  keywords: [
    "talent search",
    "talent advisory",
    "HR consulting",
    "leadership hiring",
    "executive search",
    "HR infrastructure",
    "organization transformation",
    "Nuvanode",
  ],
  openGraph: {
    title: "Nuvanode | Talent Search & Advisory",
    description:
      "Helping growing businesses build high-impact teams, scalable people practices, and strong culture.",
    type: "website",
  },
  icons: {
    icon: "/nuvanode-icon.png",
    apple: "/nuvanode-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${jetbrains.variable} dark`}
      style={{ fontFamily: "var(--font-hanken), sans-serif" }}
    >
      <body className="min-h-screen flex flex-col bg-[#05151b] text-[#d4e5ee] antialiased">
        <ParticleCanvas />
        <BubbleCursor />
        <ScrollAnimator />
        <Navigation />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
