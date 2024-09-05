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
import { ChevronDown } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  mobile: z.string().min(8, {
    message: "Invalid number.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  telegramID: z.number(),
  telegramUsername: z.string(),
});

const telegramUser = {
  telegramId: WebApp.initDataUnsafe.user?.id,
  telegramUsername: WebApp.initDataUnsafe.user?.username,
};

export default function CreateAccount() {
  const router = useRouter();

  // 1. Form declaration.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      telegramID: telegramUser.telegramId ? telegramUser.telegramId : 0,
      telegramUsername: telegramUser.telegramUsername
        ? telegramUser.telegramUsername
        : "",
    },
  });
  // 2. Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ FormData: values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 201) {
      toast({
        title: "Error",
        description: "An error occurred",
      });
      return;
    }
    toast({
      title: `Account ${values.username} created successfully`,
    });
    router.push("/business-portal/create-business-identity");
  }
  return (
    <div className="px-10 py-10">
      <div className="flex w-full justify-between mb-10">
        <div className="text-start text-base font-medium">
          Account Information
        </div>
        <div className="flex items-center">
          <ChevronDown />
        </div>
      </div>
      <Form {...form}>
        <form
          id="create-account-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Teo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="sollku" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="8423 9810" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button id="submitButton" type="submit" className="w-full lg:block">
            Create Account
          </Button>
        </form>
      </Form>
      {/* <MainButton
        text="Link Business Identity"
        onClick={() => document.getElementById("submitButton")?.click()}
      /> */}
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
