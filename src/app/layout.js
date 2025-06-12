import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/cUi/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import MainWrapper from "@/components/cUi/MainWrapper";

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
        <SidebarProvider>
          <Sidebar />
          <MainWrapper>{children}</MainWrapper>
        </SidebarProvider>
      </body>
    </html>
  );
}
