import { configureStore } from "@reduxjs/toolkit";
import bonusReducer from "../features/bonusSlice";
import accountReducer from "../features/accountSlice";
import todoReducer from "../features/crudSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    todos: todoReducer,
  },
});
