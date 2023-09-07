import { ITitle } from "../../types";

const SectionsTitle = (props: ITitle) => {
	const {
		startTitleBold,
		title,
		centerTitleBold,
		endTitle,
		endTitleBold,
		classList,
	} = props;
	return (
		<div className={`section-title ${classList}`}>
			<h2 className="md:text-[55px] text-[36px] text-[#808594] text-center font-normal">
				<span className="font-bold">{startTitleBold}</span>
				{title}
				<span className="font-bold">{centerTitleBold}</span>
				{endTitle}
				<span className="font-bold"> {endTitleBold}</span>
			</h2>
		</div>
	);
};
export default SectionsTitle;
