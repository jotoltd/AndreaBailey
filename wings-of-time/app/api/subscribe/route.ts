import { NextResponse } from "next/server";

const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";
const MAILERLITE_GROUP_ID =
  process.env.MAILERLITE_GROUP_ID ?? "198322579268699156";

export async function POST(request: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const res = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: [MAILERLITE_GROUP_ID],
      status: "active",
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
