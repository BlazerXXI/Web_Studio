// src/store/loginPopupSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginPopupState {
	loginPopup: boolean;
}

const initialState: loginPopupState = {
	loginPopup: false,
};

const loginPopupSlice = createSlice({
	name: "loginPopup",
	initialState,
	reducers: {
		setLoginPopup: (state, action: PayloadAction<boolean>) => {
			state.loginPopup = action.payload;
		},
	},
});

export type TloginPopupState = {
	login: loginPopupState;
};

export const { setLoginPopup } = loginPopupSlice.actions;
export default loginPopupSlice.reducer;
