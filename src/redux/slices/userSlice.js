import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  email: "",
  phone: "",
  website: "",
  company: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username, email, phone, website, company } = action.payload;
      state.name = name;
      console.log(state);
      state.userName = username;
      state.phone = phone;
      state.website = website;
      state.email = email;
      state.company = company;
      //state.email = email;
      console.log(state.email);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
