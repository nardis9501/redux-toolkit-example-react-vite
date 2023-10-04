import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/addUserSlice";
import dataReducer from "./slices/getUsersSlice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());

  localStorage.setItem(
    "redux_state-users_persitanceLocalSotarage",
    JSON.stringify(store.getState())
  );
};
export const store = configureStore({
  reducer: { users: dataReducer, user: userReducer },
  middleware: [persistanceLocalStorageMiddleware],
});
