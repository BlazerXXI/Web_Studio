// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
	},
});

export default store;
