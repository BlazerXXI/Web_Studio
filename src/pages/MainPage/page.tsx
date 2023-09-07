 
import React from "react";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import Cooperation from "./Cooperation";
import GraphicDesign from "./GraphicDesign";
import Service from "./Service";

const MainPage = () => {
	return (
		<main>
			<section className="hero" id="hero">
				<HeroSection />
			</section>
			<section className="portfolio mt-28" id="portfolio">
				<PortfolioSection />
			</section>
			<section className="cooperation mt-[131px]" id="cooperation">
				<Cooperation />
			</section>
			<section className="graphic-design mt-20" id="graphic-design">
				<GraphicDesign />
			</section>
			<section className="graphic-design mt-[200px] md:mt-[1px]" id="service">
				<Service />
			</section>
		</main>
	);
};

export default MainPage;
