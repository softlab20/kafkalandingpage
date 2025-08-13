import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lalezar, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const lalezar = Lalezar({
  subsets: ["latin", "arabic"],
  weight: "400",
  variable: "--font-lalezar",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

const tufuliArabic = localFont({
  src: [
    {
      path: "./tufuli-arabic/TufuliArabicDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tufuli-arabic/TufuliArabicDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tufuli-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KafKa",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${tufuliArabic.variable} ${notoSansArabic.variable} font-noto-sans-arabic antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
