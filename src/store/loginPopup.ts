// src/store/loginPopup.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface popupState {
	visible: boolean;
}

const initialState: popupState = {
	visible: true,
};

const loginPopup = createSlice({
	name: "popup",
	initialState,
	reducers: {
		setLoginPopup: (state, action: PayloadAction<boolean>) => {
			state.visible = action.payload;
		},
	},
});

export type TPopupState = {
	popup: popupState;
};

export const { setLoginPopup } = loginPopup.actions;
export default loginPopup.reducer;
