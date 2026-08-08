"use client";

import { Button } from "@/components/ui/button";
import { IUser } from "@/lib/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateUserStatus } from "../_actions/usersAction";

type Props = {
  user: IUser;
};

export default function UserStatusButtonActions({ user }: Props) {
  const router = useRouter();

  const userUpdateStatus = user.status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

  const handlUserStatusButton = async (status: string) => {
    const result = await updateUserStatus(user.id, status);
    if (result.success) {
      toast.success(`User Status ${result.data.status.toLowerCase()}`);
      router.refresh();
    }
   
  };

  return (
    <div className="flex w-full gap-2">
      <>
        <Button
          onClick={async () => await handlUserStatusButton(userUpdateStatus)}
          className="flex-1"
        >
          {user.status === "ACTIVE" ? "Block" : "Active"}
        </Button>
      </>
    </div>
  );
}
