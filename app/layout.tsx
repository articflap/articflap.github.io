import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const fontHeading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Articflap - Architecting Scalable Backends & Fluid Frontends",
  description: "Personal portfolio of Articflap showcasing creative web development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("scroll-smooth", fontSans.variable, fontHeading.variable)}>
      <body className="min-h-screen text-foreground font-sans antialiased selection:bg-[#C9E252] selection:text-[#1E192B]" style={{ background: 'linear-gradient(165deg, #EAE5FB 0%, #DBD5F8 40%, #CFCAF4 100%)' }}>{children}</body>
    </html>
  );
}
