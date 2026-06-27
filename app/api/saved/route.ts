import { NextResponse } from "next/server";

/**
 * GET  /api/saved — list saved opportunities for the current user
 * POST /api/saved — bookmark an opportunity
 * Implement in Milestone 8.
 */
export async function GET() {
  return NextResponse.json({ data: [] });
}

export async function POST() {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
