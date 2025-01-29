import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
  name:'feed',
  initialState:null,
  reducers:{
    addFeed:(_state,action)=>{
      return action.payload
    },
    removeUserFromFeed:(state,action)=>{
      const newFeed=state.filter((user)=>user._id!==action.payload)

      return newFeed
    },
    emptyFeed:()=>{
      return null
    }
  }
})

export const { addFeed, removeUserFromFeed,emptyFeed } = feedSlice.actions;
export default feedSlice.reducer;