import React from "react";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import Cooperation from "./Cooperation";
import GraphicDesign from "./GraphicDesign";
import Service from "./Service";
import Concept from "./Concept";
import Tracking from "./Tracking";

const MainPage = () => {
	return (
		<main>
			<section className="hero" id="hero">
				<HeroSection />
			</section>
			<section className="portfolio mt-28" id="portfolio">
				<PortfolioSection />
			</section>
			<section className="cooperation mt-[200px]" id="cooperation">
				<Cooperation />
			</section>
			<section className="graphic-design mt-20" id="graphic-design">
				<GraphicDesign />
			</section>
			<section className="service mt-[200px] md:mt-[1px]" id="service">
				<Service />
			</section>
			<section className="concept mt-[100px] md:mt-[1px]" id="concept">
				<Concept />
			</section>
			<section className="tracking mt-[100px] md:mt-[150px]" id="tracking">
				<Tracking />
			</section>
		</main>
	);
};

export default MainPage;
