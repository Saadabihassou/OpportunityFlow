import { prisma } from "@/lib/db/prisma";

export async function getSavedOpportunities(userId: string) {
  return prisma.savedOpportunity.findMany({
    where: { userId },
    include: { opportunity: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function saveOpportunity(userId: string, opportunityId: string) {
  return prisma.savedOpportunity.create({
    data: { userId, opportunityId },
  });
}

export async function unsaveOpportunity(userId: string, opportunityId: string) {
  return prisma.savedOpportunity.delete({
    where: {
      userId_opportunityId: { userId, opportunityId },
    },
  });
}

export async function isOpportunitySaved(userId: string, opportunityId: string) {
  const saved = await prisma.savedOpportunity.findUnique({
    where: { userId_opportunityId: { userId, opportunityId } },
  });
  return saved !== null;
}
