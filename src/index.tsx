import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { setSize } from "./store/deviceSlice";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

/**
 * Handles the resize event and dispatches an action to update the size in the store.
 */
const handleResize = () => {
	// Get the current window width
	const width = window.innerWidth;

	// Initialize the new size variable
	let newSize = "";

	// Determine the new size based on the window width
	if (width >= 1024) {
		newSize = "pc";
	} else if (width >= 768) {
		newSize = "tablet";
	} else {
		newSize = "phone";
	}

	// Dispatch an action to update the size in the store
	store.dispatch(setSize(newSize));
};
handleResize();

window.addEventListener("resize", handleResize);

<head>
	<link rel="icon" href="/logo.ico" />
	<link
		href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic&display=optional"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Syne:regular,500,600,700,800&display=optional"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display=optional"
		rel="stylesheet"
	/>
</head>;

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
