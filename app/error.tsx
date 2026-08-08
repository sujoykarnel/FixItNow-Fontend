"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-md border shadow-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-7 w-7 text-destructive" />
          </div>

          <CardTitle className="text-xl font-semibold">
            Something went wrong
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-sm leading-6 text-muted-foreground">
            We&apos;re sorry, but we couldn&apos;t load this page properly.
            Please try again. If the problem continues, please try again later.
          </p>
        </CardContent>

        <CardFooter className="justify-center">
          <Button onClick={() => unstable_retry()} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
