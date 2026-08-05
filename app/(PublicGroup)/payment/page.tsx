import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

type Props = {
  searchParams: Promise<{
    success?: string;
  }>;
};

export default async function PaymentPage({ searchParams }: Props) {
  const { success } = await searchParams;

  const isSuccess = success === "true";

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-background p-8 text-center shadow-sm">
        {isSuccess ? (
          <>
            <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-600" />

            <h1 className="text-3xl font-bold text-green-600">
              Payment Successful
            </h1>

            <p className="mt-3 text-muted-foreground">
              Your payment has been completed successfully. Thank you for your
              booking.
            </p>
          </>
        ) : (
          <>
            <XCircle className="mx-auto mb-4 h-16 w-16 text-red-600" />

            <h1 className="text-3xl font-bold text-red-600">
              Payment Cancelled
            </h1>

            <p className="mt-3 text-muted-foreground">
              Your payment was cancelled. You can try again whenever you are
              ready.
            </p>
          </>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/dashboard/customer/bookings">My Bookings</Link>
          </Button>

          {!isSuccess && (
            <Button variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
