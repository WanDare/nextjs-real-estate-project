// app/api/sell-property/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // Here you can:
  // - send to email (nodemailer)
  // - save to DB
  // - post to Google Sheets
  // - etc.
  console.log("Received sell request:", data);
  return NextResponse.json({ ok: true });
}
