import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginPopup } from "../../store/loginPopup";
import { setLogin } from "../../store/userSlice";
import { motion } from "framer-motion";

const LoginPopupUi = () => {
	const login = useSelector((state: any) => state.user.login);
	const loginPopup = useSelector((state: any) => state.popup.visible);
	const menuState = useSelector((state: any) => state.menu.open);
	const dispatch = useDispatch();

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [checked, setChecked] = useState(false);

	const closePopup = () => {
		dispatch(setLoginPopup(false));
		dispatch(setLogin(false));
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

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

	const password = document.querySelector("#password");
	const confirmation = document.querySelector("#confirmation");
	const checkbox = document.querySelector("#checkbox");

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			viewport={{ once: true }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.3 }}
		>
			<i
				onClick={closePopup}
				className="backgroundPopup fixed h-screen w-screen top-0 left-0 bg-[#00000080]"
			></i>
			<div className="LoginPopupUi fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div
					className="bg-[#ffffff] rounded-[50px] w-[669px] h-[1062px] px-[121px] py-[90px]"
					style={{ boxShadow: "0px 4px 250px 0px rgba(0, 0, 0, 1.00)" }}
				>
					<div className="absolute top-[45px] right-[45px] ">
						<img
							onClick={closePopup}
							className="close cursor-pointer"
							src="./img/popupLoginUi/close.svg"
							alt="close"
							width={19}
							height={19}
						/>
					</div>
					<div className="flex flex-col gap-10 justify-center items-center">
						<div>
							<a href="/">
								<img
									src="./img/popupLoginUi/logo.svg"
									alt="logo"
									width={212}
									height={55}
								/>
							</a>
						</div>
						<div>
							<div className="flex flex-col justify-center items-center gap-10">
								<p className=" text-slate-400 text-lg font-normal font-['Montserrat'] leading-7">
									Войдите в Ваш аккаунт через соцсети
								</p>
								<ul className="flex flex-row gap-4 justify-center items-center">
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
							<div className="my-[25px] flex flexrow items-center gap-7">
								<span className="w-44 h-px flex bg-neutral-100"></span>
								<p className="text-center text-zinc-400 text-xs font-normal font-['Montserrat']">
									или
								</p>
								<span className="w-44 h-px flex bg-neutral-100"></span>
							</div>
							<form
								action=""
								method="post"
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="flex flex-col text-black gap-[17px]"
							>
								<label className="text-gray-500 text-base" htmlFor="email">
									E-mail или Имя пользователя
								</label>
								<input
									type="email"
									id="email"
									required
									className="px-7 py-5 rounded-3xl border border-solid border-slate-500 justify-start items-start gap-2.5 inline-flex"
									placeholder="Напишите свой E-mail"
								/>
								<label className="text-gray-500 text-base" htmlFor="password">
									Пароль
								</label>
								<div className="relative">
									<input
										type={passwordVisible ? "text" : "password"}
										id="password"
										required
										className="passwordShow px-7 py-5 rounded-3xl border border-solid border-slate-500 w-full "
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

								<label
									className="text-gray-500 text-base"
									htmlFor="confirmation"
								>
									Повторите пароль
								</label>
								<div className="relative">
									<input
										type={passwordVisible ? "text" : "password"}
										id="confirmation"
										required
										className="passwordShow px-7 py-5 rounded-3xl border border-solid border-slate-500 w-full "
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
											className={`w-7 h-7 bg-slate-200 rounded appearance-none cursor-pointer ${
												checked ? "border-2 border-solid border-gray-300" : null
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
								<div className="mt-7">
									<button
										type="submit"
										className="  bg-blue-950 py-6 rounded-3xl flex justify-center w-full text-center text-white text-base font-medium font-['Montserrat']"
									>
										Зарегистрироваться
									</button>
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