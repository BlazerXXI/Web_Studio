// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import loginPopup from "./loginPopup";

const store = configureStore({
	reducer: {
		user: userSlice,
		menu: menuSlice,
		popup: loginPopup,
	},
});

export default store;
