import SetionsTitle from "../../components/SetionsTitle/page";
import { ITitle } from "../../types";
import { motion } from "framer-motion";
import React from "react";

const Concept = () => {
	const titleData: ITitle[] = [
		{
			title: "Веб-разработка. ",
			endTitleBold: "Концепт",
		},
	];

	const conceptData = [
		{
			img: "./img/concept/phone.svg",
			alt: "Phone",
			width: "776",
			height: "799",

			title: "Разработка концепции приложения",
			subTitle:
				"Мы по-настоящему гордимся этим проектом, в котором нам предстояло сделать выполнение повседневных бизнес-задач клиента более простым и эффективным. Требовалась концепция, которая способствовала бы более продуктивному взаимодействию пользователей с сайтом.В тесном сотрудничестве со специалистами компании нам удалось разработать продукт, который очень понравился заказчику.",
		},
		{
			img: "./img/concept/tablet.svg",
			alt: "Phone",
			width: "755.721",
			height: "754",

			title: "Разработка концепции приложения",
			subTitle:
				"Мы по-настоящему гордимся этим проектом, в котором нам предстояло сделать выполнение повседневных бизнес-задач клиента более простым и эффективным. Требовалась концепция, которая способствовала бы более продуктивному взаимодействию пользователей с сайтом.В тесном сотрудничестве со специалистами компании нам удалось разработать продукт, который очень понравился заказчику.",
		},
		{
			img: "./img/concept/descktop.svg",
			alt: "Phone",
			width: "820",
			height: "754",

			title: "Разработка концепции приложения",
			subTitle:
				"Мы по-настоящему гордимся этим проектом, в котором нам предстояло сделать выполнение повседневных бизнес-задач клиента более простым и эффективным. Требовалась концепция, которая способствовала бы более продуктивному взаимодействию пользователей с сайтом.В тесном сотрудничестве со специалистами компании нам удалось разработать продукт, который очень понравился заказчику.",
		},
	];

	const { title, centerTitleBold, endTitle, endTitleBold } = titleData[0];

	return (
		<>
			<div className="GraphicDesign__container _container flex flex-col gap-[100px] md:gap-[21px] ">
				<motion.div
					initial={{
						opacity: 0,
						x: -150,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6 }}
				>
					<SetionsTitle
						title={title}
						centerTitleBold={centerTitleBold}
						endTitle={endTitle}
						endTitleBold={endTitleBold}
					/>
				</motion.div>
			</div>
			<motion.div
				className=" mt-[64px] md:mt-[77px] bg-[#161B2E] w-screen"
				initial={{
					opacity: 0,
					x: 150,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.6 }}
			>
				<ul className="__container">
					{conceptData.map((concept, index) => (
						<li className="flex max-xl:flex-col items-center" key={index}>
							<div className="md:w-1/2">
								<motion.img
									initial={{
										x: -450,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6 }}
									className="max-md:w-full max-md:h-auto"
									src={concept.img}
									alt={concept.alt + "img"}
									width={concept.width}
									height={concept.height}
								/>
							</div>
							<div className="flex flex-col gap-8">
								<h3 className="font-bold text-[28px] md:text-[36px]">
									{concept.title}
								</h3>
								<p className="text-[#808594] text-[14px] md:text-[16px] font-['Montserrat', sans-serif] leading-[186%]">
									{concept.subTitle}
								</p>
							</div>
						</li>
					))}
				</ul>
			</motion.div>
		</>
	);
};

export default Concept;
