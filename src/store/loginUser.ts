// src/store/loginUser.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginUserState {
	login: boolean;
}

const initialState: loginUserState = {
	login: false,
};

const loginUser = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLoginUser: (state, action: PayloadAction<boolean>) => {
			state.login = action.payload;
		},
	},
});

export type TLoginUserState = {
	user: loginUserState;
};

export const { setLoginUser } = loginUser.actions;
export default loginUser.reducer;
