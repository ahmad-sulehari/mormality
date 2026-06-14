import type { Metadata } from "next";
import "./globals.css";
import { meta } from "../content";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
