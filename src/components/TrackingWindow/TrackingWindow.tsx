import React, { useEffect, useState } from "react";
import TrackingCoin from "./TrackingCoin";
import { ICoin } from "../../types/types";

const TrackingWindow = () => {
	let currentId = 0;

	const coinId = () => {
		return currentId++;
	};

	const coinsData: ICoin[] = [
		{
			id: coinId(),
			img: " ../../img/tracking/btc.svg",
			changeTwentyFourHours: "up",
			changeSevenDays: "up",
			supTitle: "BTC",
			title: "Bitcoin",
			price: "6750",
			volume: "3420214",
			change: "7.3",
			change7d: "7.3",
			activeCoin: 0,
		},
		{
			id: coinId(),
			img: " ../../img/tracking/eth.svg",
			changeTwentyFourHours: "down",
			changeSevenDays: "down",
			supTitle: "ETH",
			title: "Ethereum",
			price: "156.83",
			volume: "1812350",
			change: "0.9",
			change7d: "0.9",
			activeCoin: 0,
		},
		{
			id: coinId(),
			img: " ../../img/tracking/ltc.svg",
			changeTwentyFourHours: "down",
			changeSevenDays: "down",
			supTitle: "LTC",
			title: "Litecoin",
			price: "8535",
			volume: "5820399",
			change: "8.2",
			change7d: "8.2",
			activeCoin: 0,
		},
	];

	const maxCoins = coinsData.length;

	const [activeCoin, setActiveCoin] = useState(maxCoins - 1);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveCoin(activeCoin >= maxCoins - 1 ? 0 : activeCoin + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [activeCoin, maxCoins]);

	return (
		<div className="rounded-[30px] pl-[10px] sm:pl-[44px] pt-[39px]  pr-[10px] sm:pr-[112px] pb-[56px] bg-[#161B2E] shadow-[0px 0px 6px 0px rgba(0, 0, 0, 0.25)]">
			<table className="w-full font-[Montserrat, sans-serif] text-base leading-5">
				<thead>
					<tr className=" flex justify-between">
						<th className=" justify-center flex w-1/5 text-base font-bold"></th>
						<th className=" justify-center flex w-1/5 text-base font-bold max-sm:flex max-sm:w-1/3 ">
							Price
						</th>
						<th className=" justify-center flex w-1/5 text-base font-bold max-sm:hidden">
							Volume (24h)
						</th>
						<th className=" justify-center flex w-1/5 text-base font-bold max-sm:hidden">
							Change (24h)
						</th>
						<th className=" justify-center flex w-1/5 text-base font-bold max-sm:hidden">
							Change (7d)
						</th>
					</tr>
				</thead>
				<tbody className="flex flex-col mt-3 w-full gap-[26px]">
					{coinsData.map((coins) => (
						<TrackingCoin {...coins} key={coins.id} activeCoin={activeCoin} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TrackingWindow;
