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
  businessName: z.string().min(4, {
    message: "Business Name must be at least 4 characters.",
  }),
  uen: z.string().min(8, {
    message: "Invalid UEN.",
  }),
  position: z.string().min(5, {
    message: "Position must be at least 5 characters.",
  }),
  businessActivity: z.string().min(5, {
    message: "Business Activity must be at least 5 characters.",
  }),
});

export default function CreateAccount() {
  const router = useRouter();

  // 1. Form declaration.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
    },
  });
  // 2. Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: `${values.businessName} linked successfully`,
    });
    router.push("/business-portal/dashboard");
  }
  return (
    <div className="px-10 py-10">
      <div className="flex w-full justify-between mb-10">
        <div className="text-start text-base font-medium">
          Business Information
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
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registered Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Beyond Native Media" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="uen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration Number (UEN)</FormLabel>
                <FormControl>
                  <Input placeholder="5337882W" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="activity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registered Business Activity</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Integrated Marketing Communication"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="Marketing Head" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="businessEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input placeholder="John@acme.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            id="skipButton"
            type="button"
            className="w-full"
            onClick={() => router.push("/business-portal/dashboard")}
          >
            Skip Business Registration
          </Button>
          <Button id="submitButton" type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
      {/* <MainButton
        text="Go to dashboard"
        onClick={() => document.getElementById("submitButton")?.click()}
      /> */}
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
