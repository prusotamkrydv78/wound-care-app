import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "WoundCare Pro",
  description: "Advanced Healthcare Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
