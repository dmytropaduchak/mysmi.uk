import { NextRequest, NextResponse } from "next/server";

export async function POST(nextRequest: NextRequest) {
  const currentTime = Date.now();
  try {
    const ip = nextRequest.headers.get("x-forwarded-for")?.split(",")?.[0]?.trim() || nextRequest.headers.get("x-real-ip") || "unknown";
    const userAgent = nextRequest.headers.get("user-agent") ?? "unknown";

    console.log({ ip, userAgent });

    const time = Date.now() - currentTime;
    console.log(`[DEBUG][API][POST][phonecall] ${time}ms.`);
    return NextResponse.json({ status: 204 });
  } catch (err) {
    const time = Date.now() - currentTime;
    console.log(`[ERROR][API][POST][phonecall] ${time}ms.`, err);
    return NextResponse.json({ error: "Bad Request", status: 400 });
  }
}
