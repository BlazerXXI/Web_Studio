import React from "react";
import { ICoin } from "../../types/types";
import styles from "./TrackingCoin.module.scss";

const TrackingCoin = (props: ICoin) => {
	const {
		id,
		img,
		supTitle,
		title,
		price,
		volume,
		changeTwentyFourHours,
		changeSevenDays,
		change,
		change7d,
		activeCoin,
	} = props;

	return (
		<tr
			className={`trackingCoin ${
				activeCoin === id ? styles.active : ""
			} flex items-center w-full justify-between transition-all duration-300 cursor-pointer min-h-[74px]`}
		>
			<td className="flex justify-center gap-[15px] items-center w-1/5 max-sm:w-1/3 ">
				<img
					className="rounded-full bg-white"
					src={img}
					alt="btc icon"
					width={40}
					height={40}
				/>
				<div className="flex justify-center flex-col gap-[4px]">
					<h3 className="text-[20px] font-[800]">{supTitle}</h3>
					<h3 className="text-[16px]">{title}</h3>
				</div>
			</td>
			<td className="w-1/5 max-sm:w-1/3 flex justify-center">${price}</td>
			<td className="w-1/5 flex justify-center max-sm:hidden ">${volume}</td>
			<td
				className={`w-1/5 flex justify-center gap-2 items-center max-sm:hidden ${
					changeTwentyFourHours === "up"
						? "text-[#1BDC77]"
						: changeTwentyFourHours === "down"
						? "text-[#DC271B]"
						: null
				}`}
			>
				<img
					src={`../../img/tracking/${changeTwentyFourHours}.svg`}
					alt="up"
					width={18}
					height={18}
				/>
				{changeTwentyFourHours === "up"
					? "+"
					: changeTwentyFourHours === "down"
					? "-"
					: null}
				{change}%
			</td>
			<td
				className={`w-1/5 flex justify-center gap-2 items-center max-sm:hidden ${
					changeSevenDays === "up"
						? "text-[#1BDC77]"
						: changeSevenDays === "down"
						? "text-[#DC271B]"
						: null
				}`}
			>
				<img
					src={`../../img/tracking/${changeSevenDays}.svg`}
					alt="up"
					width={18}
					height={18}
				/>
				{changeSevenDays === "up"
					? "+"
					: changeSevenDays === "down"
					? "-"
					: null}
				{change7d}%
			</td>
		</tr>
	);
};

export default TrackingCoin;
