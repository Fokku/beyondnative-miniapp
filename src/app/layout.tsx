import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beyond Native",
  description: "Beyond Native Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center">
          <div className="w-full h-screen flex flex-col max-w-xl">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
