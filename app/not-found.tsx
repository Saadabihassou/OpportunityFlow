import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-semibold">Page not found</h2>
      <p className="text-muted-foreground text-sm">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-sm underline">
        Go home
      </Link>
    </div>
  );
}
