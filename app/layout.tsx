import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb - Book unique homes and experiences all over the world.",
  description: "Airbnb is a platform for renting homes, apartments, and unique travel experiences worldwide. With Airbnb, you can explore distinctive accommodations and connect with local hosts for exciting and personalized travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Analytics />
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/airbnb.svg" />
        </head>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">
              {children}
            </main>
          </Providers>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
