import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/contant";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";

const UserCard = ({ user }) => {

const [isUser,setUser]=useState(user)
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

  useEffect(()=>{
     if(user){
      setUser(user)
     }
  },[user])

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className=" h-[300px]">
        <img className="w-full h-full object-fill" src={isUser?.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{isUser?.firstName + " " + isUser?.lastName}</h2>
        {isUser?.age && isUser?.gender && <p>{isUser.age + ", " + isUser?.gender}</p>}
        <p>{isUser?.about}</p>
       {
        isUser?._id?(
          <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", isUser?._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", isUser?._id)}
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
