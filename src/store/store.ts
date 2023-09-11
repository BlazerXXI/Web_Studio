// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./deviceSlice";
import idGeneratorSlice from "./idGeneratorSlice";

const store = configureStore({
	reducer: {
		device: deviceReducer,
		idGenerator: idGeneratorSlice,
	},
});

export default store;
