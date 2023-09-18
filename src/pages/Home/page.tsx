import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/page";
import MainPage from "../MainPage/page";
import Footer from "../../components/Footer/page";
import { useDispatch, useSelector } from "react-redux";
import LoginPopupComponent from "../../components/LoginPopup/LoginPopup";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	const login = useSelector((state: any) => state.user.login);
	const LoginPopup = useSelector((state: any) => state.user.login);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<motion.div
					initial={{ opacity: 0 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="text-5xl font-bold w-full flex justify-center items-center gap-8 h-screen"
				>
					<p>Loading...</p>
					<img
						src="/img/loading/Loading_icon.gif"
						alt="loading"
						width={55}
						height={55}
					></img>
				</motion.div>
			) : (
				<div className="wrapper">
					<Header />
					{ LoginPopup ? <LoginPopupComponent /> : null}
					<MainPage />
					<Footer />
				</div>
			)}
		</>
	);
};

export default Home;
