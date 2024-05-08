import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";

const robotoFont = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Cloudinary Demo",
  description: "Cloudinary AI Powered image manipulation in Next JS 14 with Stripe payment integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-roboto antialiased", robotoFont.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
