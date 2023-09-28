import React, { useEffect, useState } from "react";
import email from "../../store/email";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const ProfileUI = () => {
	const email = useSelector((state: IRootState) => state.email.value);
	const [name, setName] = useState("");

	useEffect(() => {
		const emailValue = localStorage.getItem("email")?.slice(1, -1) || "";
		setName(emailValue);
	}, [email]);
	return (
		<div
			className={`ProfileUI font-['Montserrat'] bg-[#0b0e18] absolute px-6 mt-5 top-[81px] left-0 w-full h-screen transition-all duration-300`}
		>
			<div className="flex items-center gap-5 justify-start">
				<a href="/">
					<img
						src="./img/profile/profile.svg"
						alt="avatar profile"
						width={70}
						height={70}
					/>
				</a>
				<div>
					<p className="text-lg font-normal">{name}</p>
					<p className="text-slate-500 text-base font-normal ">{email}</p>
				</div>
			</div>

			<ul className="flex flex-col gap-8 mt-[57px]">
				<li>
					<a className="flex items-center gap-5" href="/">
						<img src="./img/profile/profileMenu.svg" alt="" />
						Личный кабинет
					</a>
				</li>
				<li>
					<a className="flex items-center gap-5" href="/">
						<img src="./img/profile/history.svg" alt="" />
						Мои заказы
					</a>
				</li>
				<li>
					<a className="flex items-center gap-5" href="/">
						<img src="./img/profile/bag.svg" alt="" />
						Корзина
					</a>
				</li>
				<li>
					<a
						href="/"
						className="flex items-center gap-5"
						onClick={(e) => {
							e.preventDefault();
							localStorage.removeItem("email");
							localStorage.removeItem("login");
							window.location.reload();
						}}
					>
						<img src="./img/profile/log-out.svg" alt="" />
						Выход
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ProfileUI;
