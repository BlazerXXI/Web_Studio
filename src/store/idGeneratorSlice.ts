// src/store/deviceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface idGeneratorSlice {
	id: number;
}

const initialState: idGeneratorSlice = {
	id: 0,
};

const idGenerator = createSlice({
	name: "idGenerator",
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		},
	},
});

export type TIdGeneratorState = {
	id: idGeneratorSlice;
};

export const { setId } = idGenerator.actions;
export default idGenerator.reducer;
