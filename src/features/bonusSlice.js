import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 10,
};

// change bonus according to the account increments
const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    addBonus: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    //action is account's state
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) state.points++; //state meaning this page's points
    });
  },
});

export const { addBonus } = bonusSlice.actions;

export default bonusSlice.reducer;

export const bonusValue = (state) => state.bonus.points;
