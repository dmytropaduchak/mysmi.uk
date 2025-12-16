// import { TemplateEmail } from '../../../templates/email-quote';
// import { Resend } from 'resend';
// import { ReactElement } from 'react';

import { NextRequest, NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(nextRequest: NextRequest) {
  const currentTime = Date.now();
  try {
    const json = await nextRequest.json();
    console.log(json)
    // const { data, error } = await resend.emails.send({
    //   from: "mySMI.uk <quote@mysmi.uk>",
    //   to: ["serhijkoschelnik@gmail.com"],
    //   subject: "Quote Request",
    //   react: TemplateEmail(json) as ReactElement,
    // });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }
    // return Response.json({ data });
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][POST][quote] ${time}ms.`);
    return NextResponse.json({ status: 204 });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][POST][quote] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}