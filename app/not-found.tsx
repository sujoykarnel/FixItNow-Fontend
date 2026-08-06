import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Button asChild className="mt-6">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}