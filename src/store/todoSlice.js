import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    addSubtask(state, action) {
      const newSub = state.todos.find(
        (item) => item.id === action.payload.mainId
      );
      newSub.subtask.push(action.payload);
    },
  },
});
export default listSlice;
export const listActions = listSlice.actions;
