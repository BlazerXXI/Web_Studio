// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./deviceSlice";
import loginSlice from "./loginSlice";
import loginPopupSlice from "./loginPopupSlice";

const store = configureStore({
	reducer: {
		device: deviceReducer,
		login: loginSlice,
		loginPopup: loginPopupSlice,
	},
});

export default store;
