import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import dataReducer from "./slices/getUsersSlice";

export const store = configureStore({
  reducer: { users: dataReducer, user: userReducer },
});
