import TechnicianProfileForm from "../_components/ProfileUpdateForm";
import { getTechnician } from "../_actions/getTecnician";

const ProfileUpdatePage = async () => {
  const response = await getTechnician();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Update Technician Profile</h1>
        <p className="text-muted-foreground">
          Update your professional information.
        </p>
      </div>

      <TechnicianProfileForm technician={response.data} />
    </div>
  );
};

export default ProfileUpdatePage;
