import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/userSlice";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const login = useSelector((state: any) => state.user.login);
	const dispatch = useDispatch();

	useEffect(() => {
		const loginRes = localStorage.getItem("login") === "true" ? true : false;
		dispatch(setLogin(loginRes));
	}, [dispatch, login]);

	const loginHandle = () => {
		dispatch(setLogin(!login));
		localStorage.setItem("login", JSON.stringify(!login));
	};

	const handleClickMenu = () => {
		setIsOpen(!isOpen);
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
					<a href="#">
						<img src="/img/header/bag.svg" width="30" height="30" alt="bag" />
					</a>
					<a href="#">
						<img src="/img/header/link.svg" width="30" height="30" alt="link" />
					</a>
					<div>
						<IconButton
							aria-label="menu"
							aria-controls="menu"
							aria-haspopup="true"
							onClick={handleClickMenu}
							color="inherit"
							className="z-10"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu"
							anchorEl={isOpen ? document.body : null}
							open={isOpen}
							onClose={handleClickMenu}
						>
							<MenuItem onClick={handleClickMenu}>
								<a className="active-nav" href="./">
									Главная
								</a>
							</MenuItem>
							<MenuItem onClick={handleClickMenu}>
								<a href="#">Магазин</a>
							</MenuItem>
							<MenuItem onClick={handleClickMenu}>
								<a href="#">Блог</a>
							</MenuItem>
						</Menu>
					</div>
					{!login ? (
						<button
							onClick={loginHandle}
							className="btn-primary hidden md:block py-2 px-5"
						>
							<p className="m-auto">Log in</p>
						</button>
					) : (
						<a href="#" className="hidden md:block" onClick={loginHandle}>
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
