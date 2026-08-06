import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryForm } from "../../_components/CategoryForm";


export default function CreateCategoryPage() {
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
      </CardHeader>

      <CardContent>
        <CategoryForm />
      </CardContent>
    </Card>
  );
}
