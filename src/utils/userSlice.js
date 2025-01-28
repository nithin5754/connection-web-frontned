import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
  name:'user',
  initialState:null,
  reducers:{
    addUser:(_state,action)=>{
       return action.payload
    },
    removeUser: (_state, _action) => {
      return null;
    },
  }
})


export const {addUser,removeUser}=userSlice.actions


export const userDetails=(state)=>state.user
export default userSlice.reducer