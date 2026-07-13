import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");

    const activity = await prisma.activityLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: limit,
    });

    const formattedActivity = activity.map(a => ({
      ...a,
      timestamp: a.timestamp.toISOString(),
    }));

    return NextResponse.json(formattedActivity);
  } catch (error) {
    console.error("Error fetching activity:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
