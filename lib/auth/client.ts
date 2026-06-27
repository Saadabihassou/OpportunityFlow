/**
 * Better Auth client for use in Client Components.
 * @see https://www.better-auth.com/docs/installation
 */
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
