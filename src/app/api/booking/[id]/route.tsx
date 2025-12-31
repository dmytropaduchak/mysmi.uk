import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "../../../../db";
import { booking } from "../../../../db/schema";

interface Context {
  params: Promise<{ id: string}>;
}

export async function GET(nextRequest: NextRequest, context: Context) {
  const currentTime = Date.now();
  try {
    const params = await context.params;
    const id = Number(params.id);
    const rows = await db
      .select()
      .from(booking)
      .where(eq(booking.id, id));
    const data = rows[0];
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][GET][booking][id] ${time}ms.`);
    return NextResponse.json({ status: 200, data });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][GET][booking][id] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}

export async function POST(nextRequest: NextRequest, context: Context) {
  const currentTime = Date.now();
  try {
    const params = await context.params;
    const id = Number(params.id);
    const json = await nextRequest.json();
    console.log(id, json);
    // to do...
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][POST][booking][id] ${time}ms.`);
    return NextResponse.json({ status: 204 });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][POST][booking][id] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}
