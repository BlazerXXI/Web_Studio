import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/userSlice";
import MenuUI from "../Menu/MenuUI";
import { setLoginPopup } from "../../store/loginPopup";
import LoginPopupUi from "../LoginPopupUi/LoginPopupUi";
import { setMenuState } from "../../store/menuSlice";
import { IRootState } from "../../store/store";
import { setEmailValue } from "../../store/email";
import { setOpenMenu } from "../../store/openMenuSlice";
import ProfileUI from "../ProfileUI/ProfileUI";

const Header = () => {
	const login = useSelector((state: IRootState) => state.user.login);
	const loginPopup = useSelector((state: IRootState) => state.popup.visible);
	const openMenu = useSelector((state: IRootState) => state.openMenu.menu);
	const menuState = useSelector((state: IRootState) => state.menu.open);
	const email = useSelector((state: IRootState) => state.email.value);
	const dispatch = useDispatch();

	useEffect(() => {
		const emailValue = localStorage.getItem("email")?.slice(1, -1) || "";
		dispatch(setEmailValue(emailValue));
		dispatch(setLogin(loginRes));
	});
	const loginRes = localStorage.getItem("login") === "true" ? true : false;

	const loginSet = () => {
		dispatch(setLogin(!login));
		toggleMenuState();
		dispatch(setLoginPopup(false));
		localStorage.setItem("login", JSON.stringify(!login));
	};

	/**
	 * Switches the state of the menu based on the current state.
	 */
	const toggleMenuState = () => {
		// If the menu state is true, set it to false
		menuState && dispatch(setMenuState(false));
	};

	/**
	 * Toggles the menu state and sets the login popup to true.
	 */
	const loginHandle = () => {
		toggleMenuState(); // Toggles the menu state.
		dispatch(setLoginPopup(true)); // Sets the login popup to true.
	};

	const logOutHandle = (e: React.MouseEvent) => {
		e.preventDefault();
		localStorage.removeItem("email");
		loginSet();
	};

	const profileHandle = (e: React.MouseEvent) => {
		e.preventDefault();
		openMenu === "profile"
			? dispatch(setOpenMenu(""))
			: dispatch(setOpenMenu("profile"));
	};

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
						<div>
							<a href="/" className="md:hidden flex" onClick={profileHandle}>
								<img
									src="/img/header/avatar.svg"
									width="30"
									height="30"
									alt="avatar"
								/>
							</a>
							{openMenu === "profile" && <ProfileUI />}
						</div>
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
						<a
							href="/"
							className="hidden md:flex  items-center"
							onClick={profileHandle}
						>
							<img
								src="/img/header/avatar.svg"
								width="30"
								height="30"
								alt="avatar"
							/>
							<p
								className="emailAddress"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								{email}
							</p>
						</a>
					)}
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
