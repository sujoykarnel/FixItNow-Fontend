import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { getCategories } from "../../technician/_actions/getCategories";
import { ICategory } from "@/lib/types";

export default async function CategoriesPage() {

  const categories = await getCategories();



  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Categories</CardTitle>

        <Button asChild>
          <Link href="/dashboard/admin/categories/create">
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Services</TableHead>
              <TableHead className="w-37.5 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.data.map((category: ICategory, index: number) => (
              <TableRow key={category.id}>
                <TableCell>{index + 1}</TableCell>

                <TableCell className="font-medium">{category.name}</TableCell>

                <TableCell>{category.discription}</TableCell>

                <TableCell>
                  <Badge>{category.servicesCount}</Badge>
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={`#`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
