import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter, Rajdhani, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const fontHeading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fontCyber = Rajdhani({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-cyber' });
const fontMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "Articflap - Cybernetic System Architect & Fullstack Developer",
  description: "Personal cybernetic portfolio of Articflap showcasing futuristic web and mobile applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("scroll-smooth dark", fontSans.variable, fontHeading.variable, fontCyber.variable, fontMono.variable)}>
      <body className="min-h-screen text-slate-100 bg-[#070A14] font-sans antialiased selection:bg-[#00F0FF] selection:text-[#070A14]">
        {children}
      </body>
    </html>
  );
}
