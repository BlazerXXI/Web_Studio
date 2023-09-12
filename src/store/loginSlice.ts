// src/store/loginSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
	login: boolean;
}

const initialState: loginState = {
	login: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<boolean>) => {
			state.login = action.payload;
		},
	},
});

export type TloginState = {
	login: loginState;
};

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
