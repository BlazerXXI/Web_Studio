import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ICoopItem } from "../../types";
import SectionsTitle from "../../components/SetionsTitle/page";

const Cooperation = () => {
	const [device, setDevice] = useState("pc");
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	);

	const cooperationData: ICoopItem[] = [
		{
			img: "/img/cooperation/quest.svg",
			title: "Решение задач",
			description:
				"Как Веб-студия мы решаем практически любые задачи и не останавливаемся на достигнутом",
		},
		{
			img: "/img/cooperation/skills.svg",
			title: "Новые навыки ",
			description:
				"В результате освоения новых навыков наша увлеченность веб-разработкой с годами только растет",
		},
		{
			img: "/img/cooperation/innovation.svg",
			title: "Инновации",
			description:
				"С 2017 года мы помогаем нашим клиентам  добиваться успеха и побеждать в конкурентной борьбе",
		},
	];

	const titleData = {
		startTitleBold: "Безупречное ",
		title: "сотрудничество",
	};

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
			deviceHandler();
		}
		function deviceHandler() {
			const tablet = 768;
			const mobile = 425;

			if (windowWidth >= tablet) {
				setDevice("pc");
			} else if (windowWidth >= mobile) {
				setDevice("tablet");
			} else if (windowWidth <= mobile) {
				setDevice("mobile");
			}
		}

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);

	return (
		<>
			<div className="cooperation__container _container ">
				<motion.div
					initial={{
						opacity: 0,
						x: -150,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6 }}
				>
					<SectionsTitle
						startTitleBold={titleData.startTitleBold}
						title={titleData.title}
					></SectionsTitle>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						x: 150,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6 }}
				>
					{device === "pc" ? (
						<ul className="flex items-start text-center justify-center mt-28 gap-14 pb-12">
							{cooperationData.map((item, index) =>
								item.title && item.description && item.img ? (
									<li className=" w-[290px] flex flex-col" key={index}>
										<div className="-mb-12">
											<img
												className="m-auto w-[200px] md:w-[240px] h-auto"
												src={item.img}
												width={240}
												height={240}
												alt={item.title}
											/>
										</div>
										<div>
											<h3 className="md:text-3xl text-2xl font-bold">
												{item.title}
											</h3>
										</div>
										<div className="md:mt-6">
											<h4 className="md:text-lg text-sm text-[#808594]">
												{item.description}
											</h4>
										</div>
									</li>
								) : null
							)}
						</ul>
					) : (
						<Slider
							className="flex items-start text-center justify-center mt-24 gap-14 pb-12"
							{...sliderSettings}
						>
							{cooperationData.map((item, index) =>
								item.title && item.description && item.img ? (
									<div className=" w-[290px] flex flex-col" key={index}>
										<div className="-mb-12">
											<img
												className="m-auto w-[200px] md:w-[240px] h-auto"
												src={item.img}
												width={240}
												height={240}
												alt={item.title}
											/>
										</div>
										<div>
											<h3 className="md:text-3xl text-2xl font-bold">
												{item.title}
											</h3>
										</div>
										<div className="md:mt-6">
											<h4 className="md:text-lg text-sm text-[#808594]">
												{item.description}
											</h4>
										</div>
									</div>
								) : null
							)}
						</Slider>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default Cooperation;
