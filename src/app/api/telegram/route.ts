import { send } from "@/src/telegram/telegram";
import { db } from "../../../db";
import { session } from "../../../db/schema";
import { NextRequest, NextResponse } from "next/server";

// const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
// const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

// const method = "POST";
// const headers = {
//   "Content-Type": "application/json",
// };

export async function POST(nextRequest: NextRequest) {
    const currentTime = Date.now();
    try {
      const json = await nextRequest.json();
      console.log(json);
      if (json?.message?.text === "/start") {
        const chat = JSON.stringify(json?.message?.chat);
        const user = JSON.stringify(json?.message?.from);
        await db.insert(session).values({ chat, user });

        const chat_id = json?.message?.chat?.id;
        const parse_mode = "HTML";

        const text = [
          `Welcome to the mySMI.uk bot${json?.message?.from?.first_name ? `, <b>${json?.message?.from?.first_name}</b>` : ""}.`,
          "This bot receives booking requests for review and client confirmation.",
        ].join("\n");

        await send({ chat_id, parse_mode, text });
        return NextResponse.json({ status: 200, ok: true });
      }







      const chatId = json?.message?.chat?.id;
      const text = json?.message?.text;

      // simple reply
      // await fetch(`${TELEGRAM_API}/sendMessage`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     chat_id: chatId,
      //     text: `You said: ${text}`,
      //   }),
      // });


      const body = JSON.stringify({
        chat_id: chatId,
        text: "Do you like this bot?",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Yes", url: "like_yes" },
              { text: "❌ No", url: "like_no" },
            ],
          ],
        },
      });

      // await fetch(`${TELEGRAM_API}/sendMessage`, { method, headers, body });

      // const date = new Date(json.date);
      // const [h, m] = json.time.split(":").map(Number);
  
      // const scheduledAtUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), h, m, 0, 0);
      // const scheduledAt = new Date(scheduledAtUTC);
  
      // const data = JSON.stringify(json);
      // await db
      //   .insert(booking)
      //   .values({ data, scheduledAt });
  
      // await sendClientAppointment({ json, scheduledAt });
      // await sendWorkerAppointment({ json, scheduledAt });
  
      const time = Date.now() - currentTime;
      console.log(`[DEBUG][API][POST][telegram] ${time}ms.`);
      return NextResponse.json({ status: 200, ok: true });
    } catch (err) {
      const time = Date.now() - currentTime;
      console.log(`[ERROR][API][POST][telegram] ${time}ms.`, err);
      return NextResponse.json({ error: "Bad Request", status: 400 });
    }






  // const update = await nextRequest.json();

  // const message = update.message;
  // if (!message?.text) {
  //   return NextResponse.json({ ok: true });
  // }

  // const chatId = message.chat.id;
  // const text = message.text;

  // // simple reply
  // await fetch(`${TELEGRAM_API}/sendMessage`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     chat_id: chatId,
  //     text: `You said: ${text}`,
  //   }),
  // });

  // return nextRequest.json({ ok: true });
}


// const sendClientAppointment = async ({ json, scheduledAt }: any) => {
//   const iCalCalendar = ical({
//     name: "mySMI.uk",
//     description: "Car Locksmith Service Appointment",
//   });

//   iCalCalendar.createEvent({
//     start: scheduledAt,
//     end: new Date(scheduledAt.getTime() + (60 * 60 * 1000)),
//     summary: "🚗🔑 Car Locksmith Service",
//     description: [
//       "Your car locksmith appointment with mySMI.uk 🛠️",
//       "",
//       "Please ensure access to the vehicle at the scheduled time ⏰",
//       "",
//       "If you need to reschedule or cancel, please contact us via:",
//       "https://mysmi.uk/contact-us",
//       "",
//       "Thank you for choosing mySMI.uk 🤝",
//     ].join("\n"),
//     organizer: {
//       name: "mySMI.uk",
//       email: process.env.SMTP_USER!
//     }
//   });
//   const iCalCalendarStr = iCalCalendar.toString();

//   const emailHtml = await render(<EmailBookingClient user={user} data={data} />);
//   const emailText = htmlToText(emailHtml);
//   await smtp.sendMail({
//     from: "mySMI.uk <no-reply@mysmi.uk>",
//     subject: "🚗🔑 Car Locksmith Service Appointment",
//     to: json.email,
//     html: emailHtml,
//     text: emailText,
//     attachments: [{
//       filename: "appointment.ics",
//       content: iCalCalendarStr,
//       contentType: "text/calendar",
//     }],
//   });
// }

// const sendWorkerAppointment = async ({ scheduledAt }: any) => {
//     const iCalCalendar = ical({
//     name: "mySMI.uk",
//     description: "Car Locksmith Service Appointment",
//   });

//   iCalCalendar.createEvent({
//     start: scheduledAt,
//     end: new Date(scheduledAt.getTime() + (60 * 60 * 1000)),
//     summary: "🚗🔑 Car Locksmith Service",
//     description: [
//       "Your car locksmith appointment with mySMI.uk 🛠️",
//       "",
//       "Please ensure access to the vehicle at the scheduled time ⏰",
//       "",
//       "If you need to reschedule or cancel, please contact us via:",
//       "https://mysmi.uk/contact-us",
//       "",
//       "Thank you for choosing mySMI.uk 🤝",
//     ].join("\n"),
//     organizer: {
//       name: "mySMI.uk",
//       email: process.env.SMTP_USER!
//     }
//   });
//   const iCalCalendarStr = iCalCalendar.toString();

//   const emailHtml = await render(<EmailBookingWorker user={user} data={data} />);
//   const emailText = htmlToText(emailHtml);
//   await smtp.sendMail({
//     from: "mySMI.uk <no-reply@mysmi.uk>",
//     subject: "🚗🔑 Car Locksmith Service Appointment",
//     to: json.email,
//     html: emailHtml,
//     text: emailText,
//     attachments: [{
//       filename: "appointment.ics",
//       content: iCalCalendarStr,
//       contentType: "text/calendar",
//     }],
//   });
// }
