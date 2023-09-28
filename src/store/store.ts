// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import loginPopup from "./loginPopup";
import email from "./email";
import setLoginOrRegisterState from "./loginOrRegister";

const store = configureStore({
	reducer: {
		user: userSlice,
		menu: menuSlice,
		popup: loginPopup,
		email: email,
		loginOrRegister: setLoginOrRegisterState,
	},
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
