// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import loginPopup from "./loginPopup";
import email from "./email";
import openMenuSlice from "./openMenuSlice";
import loginOrRegister from "./loginOrRegister";

const store = configureStore({
	reducer: {
		user: userSlice,
		menu: menuSlice,
		popup: loginPopup,
		email: email,
		loginOrRegister: loginOrRegister,
		openMenu: openMenuSlice,
	},
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
