import { prisma } from "@/lib/db/prisma";
import type { OpportunityFilters, PaginatedResult } from "@/types/opportunity";

export type { OpportunityFilters, PaginatedResult };

/**
 * Fetch opportunities with search, filters, sorting, and pagination.
 */
export async function getOpportunities(
  _filters: OpportunityFilters = {},
): Promise<PaginatedResult<unknown>> {
  // Milestone 6
  const total = await prisma.opportunity.count();
  return { data: [], total, page: 1, pageSize: 20 };
}

export async function getOpportunityById(id: string) {
  return prisma.opportunity.findUnique({ where: { id } });
}

export async function getRecentOpportunities(limit = 10) {
  return prisma.opportunity.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function getUpcomingDeadlines(limit = 10) {
  return prisma.opportunity.findMany({
    where: { deadline: { gte: new Date() } },
    orderBy: { deadline: "asc" },
    take: limit,
  });
}
