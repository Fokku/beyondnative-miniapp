"use client";
import { House, ScrollText, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { Users } from "../(models)/User";

export const UserObjProvider = createContext({});

export default function BusinessPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userObject, setUserObject] = React.useState({});

  useEffect(() => {
    const telegramId = WebApp.initDataUnsafe.user?.id;
    const fetchUserObj = async () => {
      console.log("fetching user object");
      try {
        const response = await fetch("/api/Users?telegramId=" + telegramId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const userObj: Users = await response.json();
          setUserObject(userObj);
          // Do something with the user object
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
        // Handle fetch error
      }
    };
    fetchUserObj();
  }, []);
  return (
    <UserObjProvider.Provider value={userObject}>
      {children}
    </UserObjProvider.Provider>
  );
}
