import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { IUser } from "@/lib/types";
import UserStatusButtonActions from "./UsersStatusButtonAction";

type Props = {
  user: IUser;
};

const badgeStyles = {
  ACTIVE: "bg-amber-100 text-amber-800 border-amber-300",
  BLOCKED: "bg-red-100 text-red-800 border-red-300",
 
} as const;

export default function UsersRow({ user }: Props) {
  return (
    <TableRow>
      <TableCell >
        {user.name}
      </TableCell>

      <TableCell>{user.email}</TableCell>

      <TableCell>
        {user.phone}
      </TableCell>

      <TableCell>{user.role}</TableCell>


      <TableCell className="text-center">
        <Badge className={badgeStyles[user.status]}>{user.status}</Badge>
      </TableCell>

      <TableCell className="min-w-45">
        <UserStatusButtonActions user={user}  />
      </TableCell>
    </TableRow>
  );
}
