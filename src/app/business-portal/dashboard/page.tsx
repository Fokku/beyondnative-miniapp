"use client";

import React from "react";
import WebApp from "@twa-dev/sdk";
import { BackButton, MainButton } from "@twa-dev/sdk/react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function dashboard() {
  const router = useRouter();
  return (
    <div className="px-2">
      <div className="flex flex-row"></div>
      <MainButton text="Return to start" onClick={() => router.push("/")} />
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
