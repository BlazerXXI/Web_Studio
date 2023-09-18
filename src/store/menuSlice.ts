// src/store/menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
	open: boolean;
}

const initialState: menuState = {
	open: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setMenuState: (state, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
});

export type TMenuState = {
	menu: menuState;
};

export const { setMenuState } = menuSlice.actions;
export default menuSlice.reducer;
