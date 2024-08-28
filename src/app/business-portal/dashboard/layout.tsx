"use client";
import { MenuBar } from "@/components/MenuBar";
import { BackButton } from "@twa-dev/sdk/react";
import { House, ScrollText, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div>
      {children}
      <MenuBar />
      <BackButton onClick={router.back} />
    </div>
  );
}
