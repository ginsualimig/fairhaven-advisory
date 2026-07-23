import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/agentmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    await sendNotificationEmail({
      subject: `New enquiry from ${name.trim()} — Fairhaven Advisory website`,
      text: [
        "New enquiry submitted via the Contact page on fairhavenadvisory.co.nz",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
      replyTo: email.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Advisory contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please email us directly instead." },
      { status: 500 }
    );
  }
}
