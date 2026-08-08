import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/lib/types";
import UsersRow from "./UsersRow";

type Props = {
  users: IUser[];
};

const UsersTable = ({ users }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users?.map((user) => (
          <UsersRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
