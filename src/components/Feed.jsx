import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { BASE_URL } from "../utils/contant";
import { addFeed } from "../utils/feedSlice";
import { lazy, Suspense, useEffect } from "react";
const UserCard=lazy(()=>import('./UserCard'))
const Feed = () => {
  const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed&&feed.length>=1) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      //TODO: handle error
    }
  };

  useEffect(() => {
    getFeed();
  }, [feed&&feed.length<=0]);

  if (!feed) return;
  return (
    feed && (
      <div className="flex justify-center my-10">
          <Suspense fallback={<h1>loading...</h1>}>
        <UserCard user={feed[0]} />
          </Suspense>
      </div>
    )
  );
};
export default Feed;
