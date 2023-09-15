// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
	login: boolean;
}

const initialState: userState = {
	login: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<boolean>) => {
			state.login = action.payload;
		},
	},
});

export type TUserState = {
	user: userState;
};

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
