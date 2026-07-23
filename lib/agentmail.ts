/** Send website enquiry notifications through AgentMail. */
export async function sendNotificationEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.AGENTMAIL_API_KEY;
  const inbox = process.env.AGENTMAIL_INBOX;
  const to = process.env.CONTACT_NOTIFY_EMAIL;

  if (!apiKey || !inbox || !to) {
    throw new Error(
      "Email notification is not configured (missing AGENTMAIL_API_KEY, AGENTMAIL_INBOX, or CONTACT_NOTIFY_EMAIL)."
    );
  }

  const response = await fetch(
    `https://api.agentmail.to/v0/inboxes/${encodeURIComponent(inbox)}/messages/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [to],
        subject,
        text,
        reply_to: replyTo ? [replyTo] : undefined,
      }),
    }
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`AgentMail send failed (${response.status}): ${detail}`);
  }

  return response.json();
}
