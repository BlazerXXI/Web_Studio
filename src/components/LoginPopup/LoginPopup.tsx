import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/userSlice";
import { setLoginUser } from "../../store/loginUser";

const LoginPopup = () => {
	const login = useSelector((state: any) => state.user.login);
	const loginUser = useSelector((state: any) => state.user.login);
	const dispatch = useDispatch();

	const loginRes = localStorage.getItem("login") === "true" ? true : false;
	dispatch(setLogin(loginRes));

	const submitButton = () => {
		localStorage.setItem("login", JSON.stringify(!login));
		dispatch(setLogin(!login));
	};

	const toggleForm = () => {
		dispatch(setLoginUser(!loginUser));
	};

	const socialArray = ["google", "twitter", "linkedin", "github"];

	return (
		<div className="login-popup flex flex-col justify-center items-center px-[20px]">
			<a href="./">
				<img
					src="/img/loginPopup/logo.svg"
					width={212}
					height={55}
					alt="logo"
				/>
			</a>
			<div className="flex flex-col gap-[20px] text-sm text-center mt-5">
				<h2>Войдите в Ваш аккаунт через соцсети</h2>
				<ul className="flex justify-center items-center gap-[20px]">
					{socialArray.map((item, index) => (
						<li key={index}>
							<a
								target="_blank"
								href={`https://${item}.com/`}
								rel="noreferrer noopenner nofollow"
								className="p-[15px] flex
								shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)]
								rounded-[6px] hover:bg-[rgba(0,0,0,0.08)] duration-300 transition-all ease-in-out"
							>
								<img
									src={`/img/loginPopup/${item}.svg`}
									width={30}
									height={30}
									alt={`${item}.com ${item} logo svg`}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="relative">
				<p className="mt-5 text-[#BABABA] text-sm  relative w-screen text-center before:bg-[#f5f5f5] before:h-[1px] before:w-screen before:block before:absolute before:top-1/2 before:left-0">
					<span className=" z-10 relative inline-block bg-white px-7">или</span>
				</p>
			</div>
			<form className="mt-[20px]" action="/">
				<div>
					<label htmlFor="username">E-mail или Имя пользователя</label>
					<input type="text" id="username" name="username" />
				</div>
				<div>
					<label htmlFor="password">Пароль</label>
					<input type="password" id="password" name="password" />
				</div>
				{!login && loginUser ? (
					<div>
						<label htmlFor="confirmPassword">Подтверждение пароля</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
						/>
					</div>
				) : null}
				<div>
					<button type="submit" onClick={submitButton}>
						{login && !loginUser ? "Войти в аккаунт" : "Регистрация"}
					</button>
				</div>
			</form>
			<div>
				<p>
					{login && !loginUser
						? "У Вас еще нет аккаунта? "
						: "У Вас уже есть аккаунт? "}
				</p>
				<button type="button" onClick={toggleForm}>
					{login && !loginUser ? "Регистрация" : "Войти"}
				</button>
			</div>
		</div>
	);
};

export default LoginPopup;
