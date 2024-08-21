"use client";

import React from "react";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BackButton } from "@twa-dev/sdk/react";

export default function BusinessPortalHome() {
  const router = useRouter();
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col justify-center">
        <div className="p-4 text-5xl font-bold text-center">Logo</div>
        <div className="text-base text-center">Beyond Native</div>
        <div className="text-base text-center">Business Portal</div>
      </div>
      <div className="flex flex-col justify-center justify-items-center mt-20">
        <div className="text-center p-10">
          looks like you&apos;re new, let&apos;s set up your account.
        </div>
        <div className="w-48 h-48 overflow-clip self-center rounded-2xl">
          <Image
            alt="Telegram Sticker"
            width={192}
            height={192}
            src="https://xelene.me/telegram.gif"
          />
        </div>
      </div>
      <MainButton
        text="Create Account"
        onClick={() => router.push("/business-portal/create-account")}
      />
      <BackButton onClick={() => router.back()} />
    </div>
  );
}
