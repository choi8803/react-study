import { createSlice } from "@reduxjs/toolkit";
import data from "../db/data.json";


const wordSlice = createSlice({
  name: 'words',
  initialState: data,
  reducers:{
    // actions
    
  }
});

export const { } = wordSlice.actions;
export default wordSlice.reducer;