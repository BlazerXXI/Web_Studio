// src/store/LoginPopup.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginPopupState {
	open: boolean;
}

const initialState: LoginPopupState = {
	open: false,
};

const LoginPopup = createSlice({
	name: "LoginPopup",
	initialState,
	reducers: {
		setLoginPopupState: (state, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
});

export type TLoginPopupState = {
	menu: LoginPopupState;
};

export const { setLoginPopupState } = LoginPopup.actions;
export default LoginPopup.reducer;
