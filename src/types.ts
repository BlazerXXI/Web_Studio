export interface ICoopItem {
	img: string;
	title: string;
	description: string;
}

export interface ITitle {
	title: string;
	startTitle?: string;
	startTitleBold?: string;
	centerTitleBold?: string;
	centerTitle?: string;
	endTitle?: string;
	endTitleBold?: string;
	classList?: string;
}

export interface ICoin {
	id: number;
	img: string;
	supTitle: string;
	title: string;
	price: string;
	volume: string;
	change: string;
	change7d: string;
}
