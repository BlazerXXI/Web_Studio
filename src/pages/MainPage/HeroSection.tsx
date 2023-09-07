import Slider from "../../components/Slider/page";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<>
			<div className="hero__container _container flex row  md:gap-12 gap-0">
				<motion.div
					initial={{
						opacity: 0,
						x: -15,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className="flex flex-col items-start gap-5 w-1/2"
				>
					<h2 className="font-extrabold hero-title">
						Лучший способ <br />
						предсказать будущее <br />
						<span className="text-green-500">- изобрести его</span>
					</h2>
					<p className="font-normal text-lg green-vertical-line">
						Web-студия OOJ — лучшие решения для вашего бизнеса по всем
						параметрам
					</p>
					<button className="btn-primary py-6 px-5">Связаться с нами</button>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						x: 150,
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className="w-1/2 hidden md:flex justify-center items-center relative"
				>
					<Slider />
				</motion.div>
			</div>
		</>
	);
};

export default HeroSection;
