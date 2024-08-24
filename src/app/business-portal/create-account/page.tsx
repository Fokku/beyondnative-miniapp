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
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
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
      telegramID: telegramUser.telegramId,
      telegramUsername: telegramUser.telegramUsername,
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
    <div className="px-10 py-20">
      <Form {...form}>
        <form
          id="create-account-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John123" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your login username.
                </FormDescription>
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
          <Button
            id="submitButton"
            type="submit"
            className="w-full hidden lg:block"
          >
            Submit
          </Button>
        </form>
      </Form>
      <MainButton
        text="Link Business Identity"
        onClick={() => document.getElementById("submitButton")?.click()}
      />
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
