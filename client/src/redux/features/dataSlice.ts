import { IIProps } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IIProps = {
  loading: true,
};

export const dataSlice = createSlice({
  name: "data",

  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoader } = dataSlice.actions;

export default dataSlice.reducer;
