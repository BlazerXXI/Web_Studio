import { useEffect, useState } from "react";

const Slider = () => {
	const [activeSlider, setActiveSlider] = useState(0);

	const sliderData = [
		{
			id: 0,
			src: "./img/hero/seo.svg",
			firstTitle: "SEO-",
			secondTitle: "Продвижение",
			lastTitle: "Сайта",
			description:
				"Полноценный SEO-аудит сайта перед началом поискового продвижения",
		},
		{
			id: 1,
			src: "./img/hero/blockchain.svg",
			firstTitle: "технологии",
			secondTitle: "blockchain",
			lastTitle: "Разработка",
			description:
				"Преимущества в любой отрасли, где необходимо доверие к партнерам и проводимым операциям",
		},
		{
			id: 2,
			src: "./img/hero/apps.svg",
			firstTitle: "Мобильные",
			secondTitle: "Приложения",
			lastTitle: "Разработка",
			description:
				"Для бизнеса и досуга под разные платформы: iOS, Android, Windows Phone и другие.",
		},
	];

	const handleButtonSlider = (id: number) => {
		setActiveSlider(id);
	};

	/**
	 * Advances to the next slide.
	 * If the current slide is the last slide, it wraps around and goes to the first slide.
	 */

	/**
	 * Increments the active slider index by 1,
	 * or resets it to 0 if it reaches the end of the slider data.
	 */

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 4000);

		const nextSlide = () => {
			setActiveSlider((prev) =>
				prev + 1 > sliderData?.length - 1 ? 0 : prev + 1
			);
		};

		return () => clearInterval(interval);
	}, [activeSlider, sliderData?.length]);
	return (
		<>
			<ul className="hero-list mt-5 md:mt-0">
				{sliderData.map((slide) => (
					<li
						key={slide.id}
						className={`hero-card flex flex-col gap-4 transition-all duration-300 justify-between${
							activeSlider === slide.id ? " active" : ""
						}`}
						onClick={() => handleButtonSlider(slide.id)}
					>
						<img
							className="animate-pulse-shadow max-w-full"
							src={slide.src}
							alt={
								slide.firstTitle +
								" " +
								slide.secondTitle +
								" " +
								slide.lastTitle
							}
							width={235}
							height={235}
						/>
						<div className=" text-center text-block flex flex-col justify-between gap-5">
							<h2 className="font-bold text-3xl uppercase leading-7">
								{slide.firstTitle} <br />
								<span className="green-text font-extrabold">
									{slide.secondTitle}
								</span>
								<br />
								<span className="text-lg fw-bold">{slide.lastTitle}</span>
							</h2>
							<p className="description">{slide.description}</p>
						</div>
					</li>
				))}
			</ul>
			<div className="btns-slider">
				{sliderData.map((slide) => (
					<button
						key={slide.id}
						id={slide.id.toString()}
						className={`rounded-full btn-slider${
							activeSlider === slide.id ? " active" : ""
						}`}
						onClick={() => handleButtonSlider(slide.id)}
					/>
				))}
			</div>
		</>
	);
};

export default Slider;
