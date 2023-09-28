// src/store/loginOrRegister.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginOrRegisterState {
	register: boolean;
}

const initialState: loginOrRegisterState = {
	register: true,
};

const loginOrRegister = createSlice({
	name: "loginOrRegister",
	initialState,
	reducers: {
		setLoginOrRegisterState: (state, action: PayloadAction<boolean>) => {
			state.register = action.payload;
		},
	},
});

export type TLoginOrRegisterState = {
	menu: loginOrRegisterState;
};

export const { setLoginOrRegisterState } = loginOrRegister.actions;
export default loginOrRegister.reducer;
