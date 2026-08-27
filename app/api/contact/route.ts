import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  const { name, email, company, budget, needs, message } = parsed.data;
  const ticket = String(Math.floor(1000 + Math.random() * 9000));

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "site@lazybutbusy.com",
    to: process.env.CONTACT_INBOX ?? "hello@lazybutbusy.com",
    subject: `[#${ticket}] New project intake — ${name}`,
    text: [
      `Ticket: #${ticket}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Budget: ${budget || "—"}`,
      `Needs: ${needs.join(", ") || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  return NextResponse.json({ ticket });
}
