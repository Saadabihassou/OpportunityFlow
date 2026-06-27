/**
 * Better Auth server instance.
 * Full configuration in Milestone 3 — Prisma adapter, email/password, sessions.
 *
 * @see https://www.better-auth.com/docs/installation
 */
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
});

export const authHandler = auth.handler;

export type Session = typeof auth.$Infer.Session;
