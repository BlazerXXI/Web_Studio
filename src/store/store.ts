// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./deviceSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
	reducer: {
		device: deviceReducer,
		login: loginSlice,
	},
});

export default store;
