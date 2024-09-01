import WebApp from "@twa-dev/sdk";
import User from "../../../(models)/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const listingData = body.FormData;
    console.log(listingData);
    await User.findOneAndUpdate(
      { telegramID: WebApp.initDataUnsafe.user?.id },
      { listings: listingData },
      { new: true, upsert: true }
    );

    return NextResponse.json(
      { message: "Listing created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
