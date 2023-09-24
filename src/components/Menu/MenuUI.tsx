import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import style from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMenuState } from "../../store/menuSlice";

const MenuUI = () => {
	const loginPopup = useSelector((state: any) => state.popup.visible);
	const menuState = useSelector((state: any) => state.menu.open);
	const dispatch = useDispatch();

	const [page, setPage] = useState("Home");

	const handleClickMenu = () => {
		dispatch(setMenuState(!menuState));
	};

	if (window.location.href === window.location.origin + "") {
		setPage("Home");
	} else if (window.location.href === window.location.origin + "/shop") {
		setPage("Shop");
	} else if (window.location.href === window.location.origin + "/blog") {
		setPage("Blog");
	}

	return (
		<div className="md:hidden">
			{!loginPopup ? (
				<IconButton
					aria-label="menu"
					aria-controls="menu"
					aria-haspopup="true"
					onClick={handleClickMenu}
					color="inherit"
					className="z-10"
				>
					{menuState ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			) : null}

			<Menu
				id="menu"
				anchorEl={menuState ? document.body : null}
				open={menuState}
				marginThreshold={0}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				onClose={handleClickMenu}
			>
				<MenuItem onClick={handleClickMenu}>
					<a className={page === "Home" ? style.active : null} href="./">
						Главная
					</a>
				</MenuItem>
				<MenuItem onClick={handleClickMenu}>
					<a className={page === "Shop" ? style.active : null} href="/shop">
						Магазин
					</a>
				</MenuItem>
				<MenuItem onClick={handleClickMenu}>
					<a className={page === "Blog" ? style.active : null} href="/blog">
						Блог
					</a>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuUI;
