// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./deviceSlice";

const store = configureStore({
	reducer: {
		device: deviceReducer,
	},
});

export default store;