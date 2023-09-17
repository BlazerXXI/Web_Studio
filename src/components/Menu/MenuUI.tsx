import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import style from "./Menu.module.scss";

const MenuUI = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [page, setPage] = useState("Home");

	const handleClickMenu = () => {
		setIsOpen(!isOpen);
	};

	if (window.location.href === window.location.origin + "") {
		setPage("Home");
	} else if (window.location.href === window.location.origin + "/shop") {
		setPage("Shop");
	} else if (window.location.href === window.location.origin + "/blog") {
		setPage("Blog");
	}
	console.log(page);

	return (
		<div>
			<IconButton
				aria-label="menu"
				aria-controls="menu"
				aria-haspopup="true"
				onClick={handleClickMenu}
				color="inherit"
				className="z-10"
			>
				{isOpen ? <CloseIcon /> : <MenuIcon />}
			</IconButton>
			<Menu
				id="menu"
				anchorEl={isOpen ? document.body : null}
				open={isOpen}
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
