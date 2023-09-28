// src/store/openMenuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface openMenuState {
	menu: string;
}

const initialState: openMenuState = {
	menu: "",
};

const openMenuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setOpenMenu: (state, action: PayloadAction<string>) => {
			state.menu = action.payload;
		},
	},
});

export type TOpenMenuState = {
	menu: openMenuState;
};

export const { setOpenMenu } = openMenuSlice.actions;
export default openMenuSlice.reducer;
