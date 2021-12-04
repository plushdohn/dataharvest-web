import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import rateLimit from "server/rateLimiter";

const limiter = rateLimit({
  interval: 10 * 1000,
  uniqueTokenPerInterval: 100,
});

export async function middleware(req: NextRequest) {
  console.log("Middleware triggered.");

  if (!req.ip) {
    return NextResponse.next();
  }

  try {
    await limiter.check(req.ip);
  } catch (err) {
    return new NextResponse("Number of queries exceeded.", {
      status: 429,
    });
  }
}
