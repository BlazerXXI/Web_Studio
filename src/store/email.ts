// src/store/emailSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface emailValue {
	value: string;
}

const initialState: emailValue = {
	value: "",
};

const emailSlice = createSlice({
	name: "email",
	initialState,
	reducers: {
		setEmailValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export type TEmailValue = {
	menu: emailValue;
};

export const { setEmailValue } = emailSlice.actions;
export default emailSlice.reducer;
