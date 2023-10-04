import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const persistanceState = localStorage.getItem(
    "redux_state-users_persitanceLocalSotarage"
  );
  if (persistanceState) {
    return JSON.parse(persistanceState).users;
  }
  return { users: null };
})();

export const getUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      const data = action.payload;
      state.users = data;
    },
    deleteUserById: (state, action) => {
      const id = action.payload;
      const { users } = state;

      state.users = users.filter((user) => id !== user.id);
    },

    filterUserbyName: (state, action) => {
      const value = action.payload;
      const targetName = value.toLowerCase();
      const { users } = state;
      const filted = users.filter((user) => {
        const name = user.name.toLowerCase();
        return name.includes(targetName);
      });
      state.users = filted;
    },
  },
});
export const { getUsers, deleteUserById, filterUserbyName } =
  getUsersSlice.actions;
export default getUsersSlice.reducer;
