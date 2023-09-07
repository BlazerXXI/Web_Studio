import React from "react";
import SetionsTitle from "../../components/SetionsTitle/page";

const Tracking = () => {
	const titleData = {
		startTitleBold: "Увеличивайте прибыль ",
		title: "отслеживая свои ",
		endTitleBold: "вложения",
	};

	return (
		<>
			<SetionsTitle
				startTitleBold={titleData.startTitleBold}
				title={titleData.title}
				endTitleBold={titleData.endTitleBold}
			/>
		</>
	);
};

export default Tracking;
