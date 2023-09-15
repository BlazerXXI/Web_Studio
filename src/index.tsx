import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

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
