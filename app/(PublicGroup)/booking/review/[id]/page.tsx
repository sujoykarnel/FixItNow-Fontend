import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewForm from "../../_components/ReviewForm";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReviewPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Leave a Review</CardTitle>
          <p className="text-sm text-muted-foreground">
            Share your experience with the technician.
          </p>
        </CardHeader>

        <CardContent>
          <ReviewForm bookingId={id} />
        </CardContent>
      </Card>
    </div>
  );
}
