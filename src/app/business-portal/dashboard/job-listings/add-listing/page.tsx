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
  name: z.string(),
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  description: z.string(),
  company: z.string(),
  reach: z.number(),
  application: z.number(),
  shortlisted: z.number(),
});

const telegramUser = {
  telegramId: WebApp.initDataUnsafe.user?.id,
  telegramUsername: WebApp.initDataUnsafe.user?.username,
};

export default function addListings() {
  const router = useRouter();

  // 1. Form declaration.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
      company: "",
      reach: 100,
      application: 10,
      shortlisted: 1,
    },
  });
  // 2. Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/Users/addlistings", {
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
      title: `Listing created successfully`,
    });
    router.push("/business-portal/job-listings");
  }
  return (
    <div className="px-10 py-20">
      <Form {...form}>
        <form
          id="addListingForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Internal Listing Name</FormLabel>
                <FormControl>
                  <Input placeholder="Listing1" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your internal listing name for reference.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Listing Title</FormLabel>
                <FormControl>
                  <Input placeholder="Banquet Server at MBS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="15/hr Event Crew at mBS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc" {...field} />
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
        text="Submit"
        onClick={() => document.getElementById("submitButton")?.click()}
      />
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
