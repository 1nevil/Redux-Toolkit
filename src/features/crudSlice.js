import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: false,
  todos: [],
  error: "",
};

const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (userId, thunkAPI) => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  }
);

const deleteTodos = createAsyncThunk("todo/deleteTodos", async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return id;
});

// Then, handle actions in your reducers:
const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Add todo to the state array
      state.pending = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      // Add todo to the state array
      state.pending = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchTodos.pending, (state, action) => {
      // Add todo to the state array
      state.pending = true;
    });

    //DELETE
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
  },
});

export default todoSlice.reducer;
export { fetchTodos, deleteTodos };
