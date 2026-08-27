import type { Metadata } from "next";
import localFont from "next/font/local";
import { TopNavBar } from "@/components/navigation/top-nav-bar";
import { Footer } from "@/components/navigation/footer";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    { path: "../public/fonts/SpaceGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/SpaceGrotesk-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/SpaceGrotesk-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const hankenGrotesk = localFont({
  src: [
    { path: "../public/fonts/HankenGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/HankenGrotesk-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    { path: "../public/fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Lazy But Busy — Lazy by Nature. Busy by Choice.", template: "%s — Lazy But Busy" },
  description:
    "We build ruthlessly efficient software — web, mobile, desktop — for any business that would rather go home early.",
  openGraph: { title: "Lazy But Busy", description: "Hard work is a bug, not a feature.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper">
        <TopNavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
