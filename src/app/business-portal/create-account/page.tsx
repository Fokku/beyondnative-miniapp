"use client";

import React from "react";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";
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

export default function CreateAccount() {
  const router = useRouter();

  // 1. Form declaration.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Account created successfully",
    });
    router.push("/link-business-identity");
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
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your login username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <MainButton
            text="Link Business Identity"
            onClick={() => form.handleSubmit(onSubmit)}
          />
        </form>
      </Form>
    </div>
  );
}
