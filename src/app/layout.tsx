import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/NavBar/Navbar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simo_portfolio.vercel.app"),
  title: "Mohamed Khalis",
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Mohamed Khalis",
    description: "Developer, writer, and creator.",
    url: "https://simo_portfolio.vercel.app",
    siteName: "Mohamed Khalis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Mohamed Khalis",
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-slate-50 dark:bg-dark pt-[60px] md:pt-[48px]",
          dmsans.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
