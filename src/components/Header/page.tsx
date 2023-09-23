import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/userSlice";
import MenuUI from "../Menu/MenuUI";
import { setLoginPopup } from "../../store/loginPopup";
import LoginPopupUi from "../LoginPopupUi/LoginPopupUi";

const Header = () => {
	const login = useSelector((state: any) => state.user.login);
	const loginPopup = useSelector((state: any) => state.popup.visible);
	const menuState = useSelector((state: any) => state.menu.open);
	const dispatch = useDispatch();

	useEffect(() => {
		const loginRes = localStorage.getItem("login") === "true" ? true : false;
		dispatch(setLogin(loginRes));
	}, [dispatch, login]);

	const loginSet = () => {
		dispatch(setLogin(!login));
		localStorage.setItem("login", JSON.stringify(!login));
	};

	const loginHandle = () => {
		loginSet();
		dispatch(setLoginPopup(true));
	};

	const logOutHandle = () => {
		loginSet();
		dispatch(setLoginPopup(false));
	};

	console.log(loginPopup);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="header py-5 fixed w-full"
		>
			{loginPopup ? <LoginPopupUi /> : null}
			<div className="header__container container flex justify-between items-center">
				<div className="header__logo">
					<a href="/">
						<img
							src="/img/header/logo-ooj.svg"
							alt="logo ooj"
							width="212"
							height="56"
						/>
					</a>
				</div>
				<nav className="hidden md:flex gap-5">
					<a className="active-nav" href="./">
						Главная
					</a>
					<a href="/">Магазин</a>
					<a href="/">Блог</a>
				</nav>
				<div className="flex gap-4 items-center header-icons">
					{!menuState ? (
						<div className="flex gap-5">
							<a href="/">
								<img
									src="/img/header/bag.svg"
									width="30"
									height="30"
									alt="bag"
								/>
							</a>
							<a href="/">
								<img
									src="/img/header/link.svg"
									width="30"
									height="30"
									alt="link"
								/>
							</a>
						</div>
					) : !login ? (
						<button
							onClick={loginHandle}
							className="btn-primary md:hidden py-2 px-4 max-[340px]:text-xs"
						>
							<p className="m-auto leading-4 loginButton">Log in</p>
						</button>
					) : (
						<button className=" md:hidden" onClick={logOutHandle}>
							<img
								src="/img/header/avatar.svg"
								width="30"
								height="30"
								alt="avatar"
							/>
						</button>
					)}
					<MenuUI />
					{!login ? (
						<button
							onClick={loginHandle}
							className="btn-primary hidden md:block py-2 px-5"
						>
							<p className="m-auto loginButton">Log in</p>
						</button>
					) : (
						<button className="hidden md:block" onClick={logOutHandle}>
							<img
								src="/img/header/avatar.svg"
								width="30"
								height="30"
								alt="avatar"
							/>
						</button>
					)}
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
