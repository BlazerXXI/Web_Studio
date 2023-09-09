import React, { useState } from "react";
import { ICoin } from "../../types/types";
import styles from "./TrackingCoin.module.scss";

const TrackingCoin = (props: ICoin) => {
	return (
		<tr
			className={`trackingCoin flex items-center justify-between transition-all duration-300 cursor-pointer`}
		>
			<td className="flex justify-center gap-[15px] items-center w-1/5 ">
				<img
					className="rounded-full bg-white"
					src={props.img}
					alt="btc icon"
					width={40}
					height={40}
				/>
				<div className="flex justify-center flex-col gap-[4px]">
					<h3 className="text-[20px] font-[800]">{props.supTitle}</h3>
					<h3 className="text-[16px]">{props.title}</h3>
				</div>
			</td>
			<td className="w-1/5 flex justify-center">${props.price}</td>
			<td className="w-1/5 flex justify-center ">${props.volume}</td>
			<td
				className={`w-1/5 flex justify-center gap-2 items-center ${
					props.changeTwentyFourHours === "up"
						? "text-[#1BDC77]"
						: props.changeTwentyFourHours === "down"
						? "text-[#DC271B]"
						: null
				}`}
			>
				<img
					src={`../../img/tracking/${props.changeTwentyFourHours}.svg`}
					alt="up"
					width={18}
					height={18}
				/>
				{props.changeTwentyFourHours === "up"
					? "+"
					: props.changeTwentyFourHours === "down"
					? "-"
					: null}
				{props.change}%
			</td>
			<td
				className={`w-1/5 flex justify-center gap-2 items-center ${
					props.changeSevenDays === "up"
						? "text-[#1BDC77]"
						: props.changeSevenDays === "down"
						? "text-[#DC271B]"
						: null
				}`}
			>
				<img
					src={`../../img/tracking/${props.changeSevenDays}.svg`}
					alt="up"
					width={18}
					height={18}
				/>
				{props.changeSevenDays === "up"
					? "+"
					: props.changeSevenDays === "down"
					? "-"
					: null}
				{props.change7d}%
			</td>
		</tr>
	);
};

export default TrackingCoin;
