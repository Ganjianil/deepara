import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/app/AIChatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepara Solutions",
  description: "Digital services and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main className="pt-[105px]">{children}</main>

        <Footer />

        {/* Floating AI chatbot on desktop and mobile */}
        <AIChatbot />
      </body>
    </html>
  );
}
