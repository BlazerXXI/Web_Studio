// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import loginUser from "./loginUser";

const store = configureStore({
	reducer: {
		user: userSlice,
		menu: menuSlice,
		loginUser: loginUser,
	},
});

export default store;
