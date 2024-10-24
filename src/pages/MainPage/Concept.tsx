import React from "react";
import SectionsTitle from "../../components/SectionsTitle/page";
import { ITitle } from "../../types/types";
import { motion } from "framer-motion";

const Concept = () => {
	const titleData: ITitle[] = [
		{
			title: "Веб-разработка. ",
			endTitleBold: "Концепт",
		},
	];

	let currentId = 0;

	const coinId = () => {
		currentId++;
		return currentId;
	};

	const conceptData = [
		{
			id: coinId(),
			img: "./img/concept/phone.svg",
			alt: "Phone",
			width: "776",
			height: "799",

			title: "Разработка концепции приложения",
			subTitle:
				"Мы по-настоящему гордимся этим проектом, в котором нам предстояло сделать выполнение повседневных бизнес-задач клиента более простым и эффективным. Требовалась концепция, которая способствовала бы более продуктивному взаимодействию пользователей с сайтом.В тесном сотрудничестве со специалистами компании нам удалось разработать продукт, который очень понравился заказчику.",
		},
		{
			id: coinId(),
			img: "./img/concept/tablet.svg",
			alt: "Phone",
			width: "755.721",
			height: "754",

			title: "Модернизация взаимодействия с пользователем",
			subTitle:
				"В проекте для компании «Модернизация взаимодействия с пользователем» нужно было сделать дизайн сайта максимально привлекательным без ущерба для функциональности. Благодаря обширному опыту веб-разработки нам удалось справиться с этой задачей. С гордостью можем сказать, что конечный продукт получился превосходным.",
		},
		{
			id: coinId(),
			img: "./img/concept/descktop.svg",
			alt: "Phone",
			width: "820",
			height: "754",

			title: "Анимация для лендинга",
			subTitle:
				"В компании «Веб студия Blazer by BlazerXXI» используется индивидуальный подход к каждому проекту. Создавая сайт, мы стремимся воплотить основную идею клиента, используя новейшие технологии в области веб-разработки. Этот проект наглядно демонстрирует, как мы учитываем интересы заказчика при создании уникальных визуальных элементов и интерактивных средств.",
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
					transition={{ delay: 0.3 }}
				>
					<SectionsTitle
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
				transition={{ delay: 0.3 }}
			>
				<ul className="__container">
					{conceptData.map((concept) => (
						<li className="flex max-xl:flex-col items-center" key={concept.id}>
							<motion.div
								initial={{
									opacity: 0,
									x: -150,
								}}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.6 }}
								className="md:w-1/2"
							>
								<img
									className="max-md:w-full float-image max-md:h-auto"
									src={concept.img}
									alt={concept.alt + "img"}
									width={concept.width}
									height={concept.height}
								/>
							</motion.div>
							<motion.div
								initial={{
									opacity: 0,
									x: 150,
								}}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
								className="flex flex-col gap-8 z-[10]"
							>
								<h3 className="font-bold text-[28px] md:text-[36px]">
									{concept.title}
								</h3>
								<p className="text-[#808594] text-[14px] md:text-[16px] font-['Montserrat', sans-serif] leading-[186%]">
									{concept.subTitle}
								</p>
							</motion.div>
						</li>
					))}
				</ul>
			</motion.div>
		</>
	);
};

export default Concept;
