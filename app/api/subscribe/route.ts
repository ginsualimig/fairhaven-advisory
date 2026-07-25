import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email.trim(),
      status: "subscribed",
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Mailchimp subscribe error:", error);

    // Handle already-subscribed gracefully
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      (error as { response?: { text?: string } }).response?.text?.includes("Member Exists")
    ) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
