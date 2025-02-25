//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const  metadata = {
  title: "Ricardo Gonzalez",
  description: "Ricardo Gonzalez personal portafolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body>{children}</body>
    </html>
  )
}
