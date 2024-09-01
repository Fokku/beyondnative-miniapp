import User from "../../(models)/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const userData = body.FormData;
    console.log(userData);
    await User.create(userData);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function GET(req: NextRequest) {
  try {
    const telegramId = req.nextUrl.searchParams.get("telegramId");
    console.log(telegramId);
    const user = await User.findOne({ telegramID: telegramId });
    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
