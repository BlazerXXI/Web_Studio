import React from "react";
import { ICoin } from "../../types";

const TrackingCoin = (props: ICoin) => {
	return (
		<tr className="flex items-center justify-between">
			<td className="flex gap-[15px] items-center w-1/5 ">
				<img
					className="rounded-full bg-white"
					src={props.img}
					alt="btc icon"
					width={40}
					height={40}
				/>
				<div className="flex flex-col gap-[4px]">
					<h3>{props.supTitle}</h3>
					<h3>{props.title}</h3>
				</div>
			</td>
			<td className="w-1/5 ">${props.price}</td>
			<td className="w-1/5 ">${props.volume}</td>
			<td className="w-1/5 flex gap-2 items-center">
				<img src="../../img/tracking/up.svg" alt="up" width={18} height={18} />
				{props.change}
			</td>
			<td className="w-1/5 flex gap-2 items-center">
				<img src="../../img/tracking/up.svg" alt="up" width={18} height={18} />
				{props.change7d}
			</td>
		</tr>
	);
};

export default TrackingCoin;
