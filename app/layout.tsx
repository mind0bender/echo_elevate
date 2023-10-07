import "./globals.css";
import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Sofia_Sans({ subsets: ["latin"], weight: ["400", "200", "700"] });

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
        className={`relative flex flex-col min-h-screen w-full bg-secondary-50 text-slate-950 ${inter.className}`}
      >
        <Navbar />
        <main className={`flex grow w-full`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
