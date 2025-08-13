import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dinArabic = localFont({
  src: [
    {
      path: "./din-arabic/ArbFONTS-DINNextLTArabic-UltraLight-1.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./din-arabic/ArbFONTS-DINNEXTLTARABIC-LIGHT-1.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./din-arabic/ArbFONTS-DINNextLTArabic-Regular-2.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./din-arabic/ArbFONTS-DINNextLTArabic-Medium-2.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./din-arabic/ArbFONTS-DINNextLTArabic-Bold-2.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./din-arabic/ArbFONTS-DINNextLTArabic-Black-2.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-din-arabic",
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
        className={`${tufuliArabic.variable} ${dinArabic.variable} font-din-arabic antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
