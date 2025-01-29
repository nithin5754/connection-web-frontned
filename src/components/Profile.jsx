import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { userDetails } from "../utils/userSlice";

const Profile = () => {
  const user = useSelector(userDetails);

  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};
export default Profile;
