import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo Elevate",
  description:
    "Echo Elevate is a full-service digital marketing agency that helps businesses grow their online presence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen w-full text-slate-950 bg-slate-50 ${inter.className}`}
      >
        <Navbar />
        <main className={`flex grow w-full`}>{children}</main>
      </body>
    </html>
  );
}
