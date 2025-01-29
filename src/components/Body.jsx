import {Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userDetails } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/contant";
import Login from "./Login";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userDetails);

  const fetchUser = async () => {
    if (user) return;

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });


      dispatch(addUser(res.data.data));
    } catch (error) {
      if (error.status === 401||error.status === 404||error.status === 500) {
        navigate("/login");
      }
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      {
        user?
        <Outlet />:<Login/>

      }
      <Footer />
    </>
  );
};
export default Body;
