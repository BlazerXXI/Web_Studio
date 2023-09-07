import React from "react";
import TrackingCoin from "./TrackingCoin";
import { ICoin } from "../../types";

const TrackingWindow = () => {
	const coinsData: ICoin[] = [
		{
			id: 1,
			img: " ../../img/tracking/btc.svg",
			supTitle: "BTC",
			title: "Bitcoin",
			price: "6750",
			volume: "3420214",
			change: "+7.3%",
			change7d: "+7.3%",
		},
		{
			id: 2,
			img: " ../../img/tracking/eth.svg",
			supTitle: "ETH",
			title: "Ethereum",
			price: "156.83",
			volume: "1812350",
			change: "-0.9%",
			change7d: "-0.9%",
		},
	];

	return (
		<div className="rounded-[30px] pl-[44px] pt-[39px] pr-[112px] pb-[56px] bg-[#161B2E] shadow-[0px 0px 6px 0px rgba(0, 0, 0, 0.25)]">
			<table className="w-full">
				<thead>
					<tr className=" flex justify-between ">
						<th className=" justify-start flex w-1/5"> </th>
						<th className=" justify-start flex w-1/5">Price</th>
						<th className=" justify-start flex w-1/5">Volume (24h)</th>
						<th className=" justify-start flex w-1/5">Change (24h)</th>
						<th className=" justify-start flex w-1/5">Change (7d)</th>
					</tr>
				</thead>
				<tbody className="flex flex-col mt-3 gap-[26px]">
					{coinsData.map((coins) => (
						<TrackingCoin {...coins} key={coins.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TrackingWindow;
