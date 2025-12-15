import { TemplateEmail } from '../../../templates/email-quote';
import { Resend } from 'resend';
import { ReactElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const json = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "MySMI.UK <contact@mysmi.uk>",
      to: ["serhijkoschelnik@gmail.com"],
      subject: "Contact Request",
      react: TemplateEmail(json) as ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
