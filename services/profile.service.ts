import { prisma } from "@/lib/db/prisma";
import type { FounderProfileInput } from "@/types/profile";

export async function getProfileByUserId(userId: string) {
  return prisma.founderProfile.findUnique({ where: { userId } });
}

export async function upsertProfile(userId: string, data: FounderProfileInput) {
  return prisma.founderProfile.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });
}
