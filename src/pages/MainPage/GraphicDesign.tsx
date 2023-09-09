import SectionsTitle from "../../components/SectionsTitle/page";
import { ITitle } from "../../types/types";
import { motion } from "framer-motion";
import React from "react";

const GraphicDesign = () => {
	const titleData: ITitle[] = [
		{
			title: "Веб-разработка ",
			centerTitleBold: "будущего",
			endTitle: " для вашего ",
			endTitleBold: "будущего",
		},
	];

	const { title, centerTitleBold, endTitle, endTitleBold } = titleData[0];

	return (
		<div className="GraphicDesign__container _container  flex flex-col gap-[100px] md:gap-[21px]">
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
					title={title}
					centerTitleBold={centerTitleBold}
					endTitle={endTitle}
					endTitleBold={endTitleBold}
				/>
			</motion.div>

			<div className="GraphicDesign__container _container flex row md:gap-12 gap-0 items-center">
				<div className="w-1/2 hidden md:flex justify-center items-center relative">
					<motion.img
						initial={{
							opacity: 0,
							x: 150,
						}}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.7,
							type: "spring",
							stiffness: 90,
						}}
						className="GraphicDesign_image float-image hidden md:block"
						src="./img/GraphicDesign/item-tablet.png"
						alt="item tablet"
						width={631}
						height={1035}
					/>
				</div>
				<motion.div
					initial={{
						opacity: 0,
						x: -150,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.6 }}
					className="flex flex-col items-start md:w-1/2 gap-[29px] relative md:pr-[99px]"
				>
					<h2 className="font-normal GraphicDesign-title section_title">
						<span className="font-bold"> Графический дизайн </span>
					</h2>
					<h3 className="font-normal md:text-4xl text-[28px] green-vertical-line md:mt-11 mt-6">
						Фантазия безгранична
					</h3>
					<p className="text-[#808594] md:text-base text-sm font-normal">
						С первых дней работы компании «Веб студия» Графический дизайн — один
						из самых востребованных навыков наших сотрудников. Без этого навыка
						не обойтись, когда нужно заслужить доверие клиента и добиться, чтобы
						конечный продукт безупречно работал и отлично выглядел. Обширный
						опыт оказания услуг в такой сфере, как Графический дизайн, позволяет
						нам учитывать все требования и пожелания клиентов.
					</p>
					<button className="btn-primary py-5 px-10 mt-[10px]">
						Связаться с нами
					</button>
					<i className="before:bg-[#161B2E] md:before:rounded-[50px] md:before:w-[88vw] before:h-[130%] before:w-screen max-md:before:-mr-[30px] before:-mt-[10%] before:absolute  before:-z-10 before:top-0 before:right-0" />
				</motion.div>
			</div>
		</div>
	);
};

export default GraphicDesign;
