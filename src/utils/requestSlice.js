import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (_state, action) => {
      console.log("payload", action);
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);

      return newArray;
    },
    emptyRequest:()=>{
      return null
    }
  },
});
export const { addRequest, removeRequest,emptyRequest } = requestSlice.actions;
export default requestSlice.reducer;
