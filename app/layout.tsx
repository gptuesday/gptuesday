import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'

import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GPTuesday",
  description: "AI weekly meetups in Miami. Join us to learn about the latest in AI and machine learning!",
  icons: {
    icon: "/images/favicon.png"
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
