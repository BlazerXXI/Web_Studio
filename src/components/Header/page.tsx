import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/loginSlice";
import { setLoginPopup } from "../../store/loginPopupSlice";

const Header = () => {
	const login = useSelector((state: any) => state.login.login);
	const loginPopup = useSelector((state: any) => state.loginPopup.loginPopup);
	const dispatch = useDispatch();

	useEffect(() => {
		const isLogin = localStorage.getItem("login") === "true" ? true : false;
		dispatch(setLogin(isLogin));
	});

	const loginHandle = () => {
		!login ? dispatch(setLogin(true)) : dispatch(setLogin(false));
		!loginPopup
			? dispatch(setLoginPopup(true))
			: dispatch(setLoginPopup(false));
		localStorage.setItem("login", JSON.stringify(!login));
		localStorage.setItem("loginTime", Date().slice(16, 25));
		console.log(loginPopup);
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="header py-5 fixed w-full z-40"
		>
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
					<a href="#">Магазин</a>
					<a href="#">Блог</a>
				</nav>
				<div className="flex gap-4 items-center header-icons">
					<a href="">
						<img src="/img/header/bag.svg" width="30" height="30" alt="bag" />
					</a>
					<a href="">
						<img src="/img/header/link.svg" width="30" height="30" alt="link" />
					</a>
					{!login ? (
						<button
							onClick={loginHandle}
							className="btn-primary hidden md:block py-2 px-5"
						>
							<p className="m-auto">Log in</p>
						</button>
					) : (
						<a href="#" onClick={loginHandle}>
							<img
								src="/img/header/avatar.svg"
								width="30"
								height="30"
								alt="avatar"
							/>
						</a>
					)}
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
