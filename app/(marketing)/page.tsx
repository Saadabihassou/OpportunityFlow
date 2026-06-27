import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-bold tracking-tight">{siteConfig.name}</h1>
      <p className="text-muted-foreground max-w-lg text-center text-lg">
        {siteConfig.description}
      </p>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
