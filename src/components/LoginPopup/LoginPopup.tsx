import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/userSlice";

const LoginPopup = () => {
	const [newUser, setNewUser] = useState(false);

	const login = useSelector((state: any) => state.user.login);
	const dispatch = useDispatch();

	useEffect(() => {
		const loginRes = localStorage.getItem("login") === "true" ? true : false;
		dispatch(setLogin(loginRes));
	}, [dispatch, login]);

	const submitButton = () => {
		localStorage.setItem("login", JSON.stringify(!login));
		dispatch(setLogin(!login));
	};
	console.log(login);

	const toggleForm = () => {
		setNewUser(!newUser);
	};

	return (
		<div className="login-popup">
			<a href="./">
				<img
					src="/img/loginPopup/logo.svg"
					width={212}
					height={55}
					alt="logo"
				/>
			</a>
			<h2>Войдите в Ваш аккаунт через соцсети</h2>
			<form action="/">
				<div>
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" name="username" />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" />
				</div>
				{!login && (
					<div>
						<label htmlFor="confirmPassword">Confirm Password:</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
						/>
					</div>
				)}
				<div>
					<button type="submit" onClick={submitButton}>
						{login ? "Login" : "Register"}
					</button>
				</div>
			</form>
			<div>
				<p>{login ? "Don't have an account? " : "Already have an account? "}</p>
				<button type="button" onClick={toggleForm}>
					{login ? "Register" : "Login"}
				</button>
			</div>
		</div>
	);
};

export default LoginPopup;
