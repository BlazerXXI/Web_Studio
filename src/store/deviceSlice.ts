// src/store/deviceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeviceState {
	size: string;
}

const initialState: DeviceState = {
	size: "",
};

const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {
		setSize: (state, action: PayloadAction<string>) => {
			state.size = action.payload;
		},
	},
});

export type TDeviceState = {
	device: DeviceState;
};

export const { setSize } = deviceSlice.actions;
export default deviceSlice.reducer;
