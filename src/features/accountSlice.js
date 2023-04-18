import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10,
  videos: [],
  //   pendding: false,
};

const url = "https://my.api.mockaroo.com/movie_json.json?key=4be409b0";

export const fetchUserById = createAsyncThunk(
  "account/getVideo",
  async (userId, thunkAPI) => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        // Add user to the state array
        state.videos = action.payload;
        state.pendding = false;
      })
      .addCase(fetchUserById.pending, (state) => {
        // Add user to the state array
        state.pendding = true;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        // Add user to the state array
        state.error = action.error;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

export const amountValue = (state) => state.account.amount;
export const penddingValue = (state) => state.account.pendding;
export const videosData = (state) => state.account.videos;
