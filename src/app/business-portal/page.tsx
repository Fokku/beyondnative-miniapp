"use client";

import React, { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BackButton } from "@twa-dev/sdk/react";
import { Button } from "@/components/ui/button";

export default function BusinessPortalHome() {
  const router = useRouter();
  let hasAccount = false;
  const [userObj, setUserObj] = React.useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("fetching user");
      try {
        const response = await fetch("/api/Users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        if (response.ok) {
          const user = await response.json();
          setUserObj(user);
          if (user.telegramID) {
            hasAccount = true;
          }
          // Do something with the user object
        } else {
          // Handle error response
        }
      } catch (error) {
        console.log(error);
        // Handle fetch error
      }
    };

    fetchUser();
  }, [userObj]);

  if (!hasAccount) {
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
        <Button
          className="hidden lg:block"
          onClick={() => router.push("/business-portal/create-account")}
        ></Button>
        <MainButton
          text="Create Account"
          onClick={() => router.push("/business-portal/create-account")}
        />
        <BackButton onClick={() => router.back()} />
      </div>
    );
  } else {
    router.push("/business-portal/dashboard");
    return <div>Welcome.</div>;
  }
}
