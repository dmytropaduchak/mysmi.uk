import { db } from "../../../db";
import { history } from "../../../db/schema";
import { eq } from "drizzle-orm"
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(nextRequest: NextRequest) {
  const currentTime = Date.now();
  try {
    const ip = nextRequest.headers.get("x-forwarded-for")?.split(",")?.[0]?.trim() || nextRequest.headers.get("x-real-ip") || "unknown";
    const userAgent = nextRequest.headers.get("user-agent") ?? "unknown";
    console.log({ ip, userAgent });

    const month = dayjs().format("MMM").toLowerCase();
    
    const rows = await db
      .select()
      .from(history)
      .where(eq(history.month, month));
    
    if (rows[0]) {
      const json = JSON.parse(rows[0].data!);
      const data = JSON.stringify({ ...json, phonecall: json.phonecall+1 });
      
      await db
        .update(history)
        .set({ month, data })
        .where(eq(history.month, month));
    } else {
      const data = JSON.stringify({ phonecall: 1, whatsapp: 0 });
      await db
        .insert(history)
        .values({ month, data });
    }
  
    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][POST][phonecall] ${time}ms.`);
    return NextResponse.json({ status: 204 });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][POST][phonecall] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}
