import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginPopup } from "../../store/loginPopup";
import { setLogin } from "../../store/userSlice";
import { motion } from "framer-motion";

const LoginPopupUi = () => {
	const login = useSelector((state: any) => state.user.login);
	const loginPopup = useSelector((state: any) => state.popup.visible);
	const menuState = useSelector((state: any) => state.menu.open);
	const dispatch = useDispatch();

	const [passwordError, setPasswordError] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [checked, setChecked] = useState(false);

	const socialMedia = [
		{
			name: "Google",
			icon: "google.svg",
			id: "google",
			link: "https://google.com",
		},
		{
			name: "Twitter",
			icon: "twitter.svg",
			id: "twitter",
			link: "https://twitter.com",
		},
		{
			name: "LinkedIn",
			icon: "linkedin.svg",
			id: "linkedin",
			link: "https://linkedin.com",
		},
		{
			name: "GitHub",
			icon: "github.svg",
			id: "github",
			link: "https://github.com",
		},
	];

	const handlePopupClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			closePopup();
		}
	};

	const closePopup = () => {
		dispatch(setLoginPopup(false));
		dispatch(setLogin(false));
	};

	const loginHandle = () => {
		dispatch(setLogin(!login));
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const confirmationRef = useRef<HTMLInputElement | null>(null);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmation = confirmationRef.current?.value;

		if (email && password) {
			if (confirmation) {
				if (password === confirmation) {
					if (password.length < 8) {
						setPasswordError("Пароль должен содержать не менее 8 символов.");
					} else if (!/\d/.test(password)) {
						setPasswordError("Пароль должен содержать хотя бы одну цифру.");
					} else {
						setPasswordError("");
						dispatch(setLoginPopup(false));
						dispatch(setLogin(true));
					}
				} else {
					setPasswordError("Пароли не совпадают");
				}
			} else if (login) {
				if (password.length < 8) {
					setPasswordError("Пароль должен содержать не менее 8 символов.");
				} else if (!/\d/.test(password)) {
					setPasswordError("Пароль должен содержать хотя бы одну цифру.");
				} else {
					setPasswordError("");
					dispatch(setLoginPopup(false));
					dispatch(setLogin(true));
				}
			}
		}
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			viewport={{ once: true }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.3 }}
			className="h-full w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000080] z-[500] overflow-y-scroll"
		>
			<div
				className="LoginPopupUi w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex md:justify-center md:items-center"
				onClick={handlePopupClick}
			>
				<div
					className="bg-[#ffffff] md:rounded-[50px] md:w-[669px] md:h-[1062px]  md:px-[121px] px-5 md:py-[90px] py-[45px] z-[500]  LoginPopupUi__block"
					style={{
						boxShadow: "0px 4px 250px 0px rgba(0, 0, 0, 1.00)",
						position: "relative",
					}}
				>
					<div className="absolute md:top-[45px] md:right-[45px] top-[20px] right-[20px]">
						<img
							onClick={closePopup}
							className="close cursor-pointer"
							src="./img/popupLoginUi/close.svg"
							alt="close"
							width={19}
							height={19}
						/>
					</div>
					<div className="flex flex-col md:gap-10 gap-5 justify-center items-center">
						<div>
							<img
								src="./img/popupLoginUi/logo.svg"
								alt="logo"
								width={212}
								height={55}
							/>
						</div>
						<div className="w-full">
							<div className="flex flex-col justify-center items-center md:gap-10 gap-5">
								<p className=" text-slate-400 md:text-lg text-sm font-normal font-['Montserrat'] leading-7">
									Войдите в Ваш аккаунт через соцсети
								</p>
								<ul className="grid  grid-cols-4 gap-4  justify-center items-center">
									{socialMedia.map((socialMedia) => (
										<li key={socialMedia.id}>
											<a
												target="_blank"
												rel="noreferrer noopener nofollow"
												className="flex justify-center items-center px-[18px] py-[17px] rounded-[6px] shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)] hover:shadow-md hover:scale-90 active:scale-75 transition-all duration-300"
												href={socialMedia.link}
											>
												<img
													src={`./img/popupLoginUi/${socialMedia.icon}`}
													alt={socialMedia.name}
													width={30}
													height={30}
												/>
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="md:my-[25px] flex flex-row justify-center items-center gap-7 my-[20px]">
								<span className="w-44 h-px flex bg-neutral-100"></span>
								<p className="text-center text-zinc-400 text-xs font-normal font-['Montserrat']">
									или
								</p>
								<span className="w-44 h-px flex bg-neutral-100"></span>
							</div>

							{passwordError && (
								<p className="text-red-500 text-base">{passwordError}</p>
							)}
							<form
								action="#"
								method="post"
								onSubmit={onSubmit}
								className="flex flex-col text-black md:gap-[17px] gap-[10px]"
							>
								<label className="text-gray-500 text-base" htmlFor="email">
									E-mail или Имя пользователя
								</label>
								<input
									ref={emailRef}
									name="email"
									autoComplete="email"
									type="email"
									id="email"
									required
									className="px-7 py-5 rounded-3xl border text-base border-solid border-slate-500 justify-start items-start gap-2.5 inline-flex"
									placeholder="Напишите свой E-mail"
								/>
								<label className="text-gray-500 text-base" htmlFor="password">
									Пароль
								</label>
								<div className="relative">
									<input
										ref={passwordRef}
										name="password"
										autoComplete={login ? "current-password" : "new-password"}
										type={passwordVisible ? "text" : "password"}
										id="password"
										required
										className="passwordShow px-7 py-5 rounded-3xl border text-base border-solid border-slate-500 w-full "
										placeholder="Введите пароль"
									/>
									<img
										src={`./img/popupLoginUi/${
											!passwordVisible ? "closeEye" : "openEye"
										}.svg`}
										alt="Переключить видимость пароля"
										width={30}
										height={30}
										onClick={togglePasswordVisibility}
										className="passwordIcon cursor-pointer absolute top-1/2 -translate-y-1/2 right-[30px] w-[30px] h-[30px]"
									/>
								</div>

								{login ? null : (
									<div>
										<label
											className="text-gray-500 text-base"
											htmlFor="confirmation"
										>
											Повторите пароль
										</label>
										<div className="relative md:mt-5 mt-2">
											<input
												ref={confirmationRef}
												name="confirmation"
												autoComplete={
													login ? "current-password" : "new-password"
												}
												type={passwordVisible ? "text" : "password"}
												id="confirmation"
												required
												className="passwordShow px-7 py-5 rounded-3xl border text-base border-solid border-slate-500 w-full "
												placeholder="Введите пароль"
											/>
											<img
												src={`./img/popupLoginUi/${
													!passwordVisible ? "closeEye" : "openEye"
												}.svg`}
												alt="Переключить видимость пароля"
												width={30}
												height={30}
												onClick={togglePasswordVisibility}
												className="passwordIcon cursor-pointer absolute top-1/2 -translate-y-1/2 right-[30px] w-[30px] h-[30px]"
											/>
										</div>
										<div>
											<label
												htmlFor="checkbox"
												className="flex items-center relative gap-4 mt-6 cursor-pointer"
											>
												<input
													onClick={() => setChecked(!checked)}
													type="checkbox"
													id="checkbox"
													className={`min-w-[28px] min-h-[28px] bg-slate-200 rounded appearance-none cursor-pointer ${
														checked
															? "border-2 border-solid border-gray-300"
															: null
													}`}
												/>
												{checked ? (
													<img
														className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer"
														width={28}
														height={28}
														src="./img/popupLoginUi/check.svg"
														alt="check"
													/>
												) : null}
												<span className="text-[#696F79] text-sm font-normal font-['Inter']">
													Я хочу получать новости и акционные предложения
												</span>
											</label>
										</div>
									</div>
								)}
								<div className="mt-7">
									{login ? (
										<div>
											<button
												type="submit"
												className="hover:scale-105 active:scale-95 transition-all duration-300  bg-blue-950 py-6 rounded-3xl flex justify-center w-full text-center text-white text-base font-medium font-['Montserrat']"
											>
												Войти в аккаунт
											</button>

											<p className="text-gray-500 pt-[20px] text-center text-base font-normal font-['Montserrat']">
												У Вас еще нет аккаунта?{" "}
												<span
													className="text-blue-700 cursor-pointer hover:opacity-70 transition-all duration-300"
													onClick={loginHandle}
												>
													Регистрация
												</span>
											</p>
										</div>
									) : (
										<div>
											<button
												type="submit"
												className="hover:scale-105 active:scale-95 transition-all duration-300  bg-blue-950 py-6 rounded-3xl flex justify-center w-full text-center text-white text-base font-medium font-['Montserrat']"
											>
												Зарегистрироваться
											</button>
											<p className="text-gray-500 pt-[20px] text-center text-base font-normal font-['Montserrat']">
												У Вас уже есть аккаунт?{" "}
												<span
													className="text-blue-700 cursor-pointer hover:opacity-70 transition-all duration-300"
													onClick={loginHandle}
												>
													Войти
												</span>
											</p>

											<p className="mt-[15px] pr-[33px] opacity-60 text-slate-500 text-sm font-normal font-['TT Mussels'] leading-tight">
												*Нажимая кнопку “Зарегистрироваться” вы соглашаетсь на
												обработку и хранение персональных данных в соответсвии с
												политикой конфиденциальности
											</p>
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LoginPopupUi;
