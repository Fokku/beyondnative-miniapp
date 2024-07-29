import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <div className=" bg-black flex justify-center">
          <div className="w-full bg-telegram-black text-telegram-white h-screen flex flex-col max-w-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
