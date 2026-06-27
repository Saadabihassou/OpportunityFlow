import { NextResponse } from "next/server";

/**
 * GET /api/opportunities
 * List opportunities with search, filters, sorting, and pagination.
 * Implement in Milestone 6.
 */
export async function GET() {
  return NextResponse.json({ data: [], meta: { total: 0 } });
}
