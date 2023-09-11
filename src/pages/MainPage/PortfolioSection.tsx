import { motion } from "framer-motion";
import React from "react";

const PortfolioSection = () => {
	return (
		<div className="portfolio__container _container flex row md:gap-12 gap-0">
			<motion.div
				initial={{
					opacity: 0,
					x: -150,
				}}
				  viewport={{ once: true }} whileInView
={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
				className="flex flex-col items-start w-1/2"
			>
				<h2 className="font-normal portfolio-title section_title">
					Веб-разработка. <br />
					<span className="font-bold"> Портфолио </span>
				</h2>
				<p className="font-normal md:text-4xl text-2xl green-vertical-line md:mt-11 mt-6">
					Идеи. Концепт. Стратегия. Разработка.
				</p>
				<ul className="text-[#808594] portfolio_list flex flex-col gap-11 text-base font-normal md:mt-16 mt-12">
					<li className="flex items-center gap-14 ">
						<img
							className="h-auto"
							src="./img/portfolio/icons-list.svg"
							alt="check"
							width={55}
							height={55}
						/>
						<p>
							Мы предоставляем широкий спектр услуг в области веб-разработки и
							воплощаем в жизнь идеи клиентов.
						</p>
					</li>
					<li className="flex items-center gap-14 ">
						<img
							className="h-auto"
							src="./img/portfolio/icons-list.svg"
							alt="check"
							width={55}
							height={55}
						/>
						<p>
							Работая над проектом, мы уделяем особое внимание деталям и
							стремимся к тому, чтобы созданный сайт был красивым,
							функциональным и удобным.
						</p>
					</li>
					<li className="flex items-center gap-14 ">
						<img
							className="h-auto"
							src="./img/portfolio/icons-list.svg"
							alt="check"
							width={55}
							height={55}
						/>
						<p>
							Ознакомьтесь с нашим портфолио и посмотрите, что мы можем
							предложить вам от лендингов на популярных CMS до абсолютно
							индивидуальных решений с надежным и защищенным ядром.
						</p>
					</li>
				</ul>
				<button className="btn-primary py-5 px-10 mt-12">
					<img
						src="./img/portfolio/Behance.svg"
						alt="Behance"
						width={136}
						height={25}
					/>
				</button>
			</motion.div>
			<div className="w-1/2 hidden md:flex justify-center items-center relative">
				<motion.img
					initial={{
						opacity: 0,
						x: 150,
					}}
					  viewport={{ once: true }} whileInView
={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.7,
						type: "spring",
						stiffness: 90,
					}}
					className="portfolio_image float-image"
					src="./img/portfolio/phone.png"
					alt="phone png"
					width={566}
					height={1001}
				/>
			</div>
		</div>
	);
};

export default PortfolioSection;
