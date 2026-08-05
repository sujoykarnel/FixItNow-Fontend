import { createPayment } from "@/app/(dashboardGroup)/_actions/paymentAction";
import { redirect } from "next/navigation";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PayPage({ params }: Props) {
  const { id } = await params;

  const result = await createPayment(id);

  if (!result.success) {
    return (
      <div className="text-center py-20">Payment initialization failed.</div>
    );
  }

  // Backend should return Stripe/SSLCommerz checkout URL
  redirect(result.data);
}
