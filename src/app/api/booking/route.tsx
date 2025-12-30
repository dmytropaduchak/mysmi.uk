import { db } from "../../../db";
import { booking, session } from "../../../db/schema";
import { gte, and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { sendMessage } from "../../../telegram/telegram";
import { htmlToText } from "html-to-text";
import { render } from "@react-email/render";
import EmailBookingWorker from "../../../emails/email-booking-worker";
import { smtp } from "../../../smtp/smtp";

export async function POST(nextRequest: NextRequest) {
  const currentTime = Date.now();
  try {
    const json = await nextRequest.json();

    const date = new Date(json.date);
    const [h, m] = json.time.split(":").map(Number);

    const scheduledAtUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), h, m, 0, 0);
    const scheduledAt = new Date(scheduledAtUTC);
    const status = "created";
    const [{ id }] = await db
      .insert(booking)
      .values({ data: JSON.stringify(json), scheduledAt, status }).returning();

    const text = `
<b>⏳ Car Locksmith Service Booking #${id}</b>

<b>Name:</b> ${json?.name}
<b>📞 Phone:</b> <a href="tel:${json?.phone}">${json?.phone}</a>
<b>✉️ Email:</b> <a href="mailto:${json?.email}">${json?.email}</a>
<b>📍 Post Code:</b> <a href="https://maps.google.com/maps?q=${json?.postcode}">${json?.postcode}</a>
<b>🚗 Registration:</b> <a href="https://www.carcheck.co.uk/reg?i=${json?.registration.toUpperCase()}">${json?.registration.toUpperCase()}</a>
<b>🛠 Service:</b> ${json?.services?.join(", ")}
<b>🔑 Key Type:</b> ${json?.ignitionType}
`.trim();

    const reply_markup = {
      inline_keyboard: [
        [
          [
            { text: "📞 Call Client", url: `tel:${json?.phone}` },
            { text: "💬 WhatsApp", url: `https://wa.me/${json?.phone}`},
          ],
          [
            { text: "✅ Accept", callback_data: `accept:${id}` },
            { text: "❌ Cancel", callback_data: `cancel:${id}` },
          ],
        ]
      ],
    };

    const emailHtml = await render(<EmailBookingWorker data={{ ...json, id }} />);
    const emailText = htmlToText(emailHtml);
    await smtp.sendMail({
      from: `mySMI.uk <${process.env.SMTP_USER}>`,
      subject: `🚗🔑 Car Locksmith Service Booking #${id}`,
      to: "serhijkoschelnik@gmail.com",
      html: emailHtml,
      text: emailText,
    });

    const rows = await db.select().from(session);

    for (const row of rows) {
      const chat = JSON.parse(row.chat!);
      const chat_id = chat.id;
      
      const message = await sendMessage({ text, reply_markup, chat_id });
      const message_id = message?.result?.message_id;
      
      json.connections = { ...(json.connections || {}), [chat_id]: message_id };
    }

    const data = JSON.stringify(json);

    await db
      .update(booking)
      .set({ data })
      .where(eq(booking.id, id));
  
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][POST][booking] ${time}ms.`);
    return NextResponse.json({ status: 204 });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][POST][booking] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}

export async function GET() {
  const currentTime = Date.now();
  try {
    const data = await db
      .select()
      .from(booking)
      .where(and(gte(booking.scheduledAt, new Date()), eq(booking.status, "claimed")));
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][GET][booking] ${time}ms.`);
    return NextResponse.json({ status: 200, data });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][GET][booking] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}
