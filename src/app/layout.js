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

export const metadata = {
  title: "WoundCare Pro",
  description: "Advanced Healthcare Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className={`
        transition-all duration-300 
        min-h-screen bg-[#F8F9FF]  
      `}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
