import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  return { users: null };
};
// const initialState = () => {
//   return { users: null };
// };
//const initialState = [users:{null}];
export const getUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      const data = action.payload;
      // console.log(data);
      state.users = data;
      console.log(state.users);
    },
    deleteUserById: (state, action) => {
      const id = action.payload;
      console.log(id);
      const { users } = state;
      console.log(users);
      state.users = users.filter((user) => id !== user.id);
      // console.log(state.users);
    },

    filterUserbyName: (state, action) => {
      const value = action.payload;
      const targetName = value.toLowerCase();
      const { users } = state;
      console.log(targetName);
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
