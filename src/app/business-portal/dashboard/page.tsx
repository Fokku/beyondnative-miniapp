"use client";

import React, { useContext } from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { UserObjProvider } from "../layout";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, User } from "lucide-react";
import { Users } from "@/app/(models)/User";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function dashboard() {
  const userObj: Users = useContext(UserObjProvider)?.user;
  const router = useRouter();
  return (
    <div className="px-2 bg-[#F3F3F3] h-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-5 px-4 pt-10 bg-[#FBFBFB] rounded-b-lg w-full h-44">
          <div className="">
            <p className="text-xs text-left">Welcome Back!</p>
            <p className="text-xl font-semibold text-left">
              {userObj.telegramUsername}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-left font-medium">Acme Inc</p>
            <p className="text-xs text-left text-[#828282]">
              Marketing Director
            </p>
          </div>
        </div>
        <Carousel opts={{}}>
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4">
              <div className="flex flex-col bg-white border border-[#E0E0E0] p-4 justify-left gap-2 w-56 h-32 rounded-lg">
                <p className="text-sm font-semibold">Example data</p>
                <p className="text-3xl font-bold">$45,678.90</p>
                <p className="text-xs font-medium text-[#828282]">
                  +20% month over month
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4">
              <div className="flex flex-col bg-white border border-[#E0E0E0] p-4 justify-left gap-2 w-56 h-32 rounded-lg">
                <p className="text-sm font-semibold">Example Data</p>
                <p className="text-3xl font-bold">$45,678.90</p>
                <p className="text-xs font-medium text-[#828282]">
                  +20% month over month
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4">
              <div className="flex flex-col bg-white border border-[#E0E0E0] p-4 justify-left gap-2 w-56 h-32 rounded-lg">
                <p className="text-sm font-semibold">Example Data</p>
                <p className="text-3xl font-bold">$45,678.90</p>
                <p className="text-xs font-medium text-[#828282]">
                  +20% month over month
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Section - Recent*/}

        <div className="flex flex-col bg-white border border-[#E0E0E0] px-4 py-2 justify-left gap-2 w-full rounded-lg">
          <span className="text-sm font-medium">Recent</span>
          <div className="w-full flex items-center">
            <User size={32} className="mr-2" />
            <div className="grow-1 w-full justify-left align-middle">
              <span className="font-medium text-sm">
                Add your business identity
              </span>
            </div>
            <ArrowRight size={32} />
          </div>
          <div className="w-full flex items-center">
            <User size={32} className="mr-2" />
            <div className="grow-1 w-full justify-left align-middle">
              <p className="font-medium text-sm">Create a job listing</p>
            </div>
            <ArrowRight size={32} />
          </div>
        </div>
        {/*Main section - Activities*/}
        <div className="h-full flex flex-col">
          <div></div>
        </div>
      </div>
      {/* <MainButton text="Return to start" onClick={() => router.push("/")} /> */}
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
