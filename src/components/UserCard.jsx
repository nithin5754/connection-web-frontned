import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/contant";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {






  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
    
    } catch (error) {}finally{
      dispatch(removeUserFromFeed(userId));
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className=" h-[300px]">
        <img className="w-full h-full object-fill" src={user?.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.firstName + " " + user?.lastName}</h2>
        {user?.age && user?.gender && <p>{user.age + ", " + user?.gender}</p>}
        <p>{user?.about}</p>
       {
        user?._id?(
          <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", user?._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", user?._id)}
          >
            Interested
          </button>
        </div>
        ):(<></>)
       }
      </div>
    </div>
  );
};
export default UserCard;
