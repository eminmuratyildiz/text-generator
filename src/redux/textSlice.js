import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getText = createAsyncThunk(
  "getText",
  async ({ paras, format }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}&paras=${paras}&format=${format}`
    );
    return response.data;
  }
);

export const textSlice = createSlice({
  name: "data",
  initialState: {
    text: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getText.pending, (state) => {
      state.text = "Loading...";
    });
    builder.addCase(getText.fulfilled, (state, action) => {
      state.text = action.payload;
    });
    builder.addCase(getText.rejected, (state) => {
      state.text = "Request failed.";
    });
  },
});
export default textSlice.reducer;
