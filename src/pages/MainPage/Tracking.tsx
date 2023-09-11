import React from "react";
import { motion } from "framer-motion";
import SectionsTitle from "../../components/SectionsTitle/page";
import TrackingWindow from "../../components/TrackingWindow/TrackingWindow";

const Tracking = () => {
	const titleData = {
		startTitleBold: "Увеличивайте прибыль ",
		title: "отслеживая свои ",
		endTitleBold: "вложения",
	};

	return (
		<div
			className="
			tracking__container _container"
		>
			<motion.div
				initial={{ opacity: 0, x: -150 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
			>
				<SectionsTitle
					startTitleBold={titleData.startTitleBold}
					title={titleData.title}
					endTitleBold={titleData.endTitleBold}
					classList={"max-w-[678px] m-auto"}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -150 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
				className="md:mt-[96px] mt-[100px]"
			>
				<TrackingWindow />
			</motion.div>
		</div>
	);
};

export default Tracking;
