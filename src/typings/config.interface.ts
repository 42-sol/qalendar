interface configTextsInterface {}

export type dayStartOrEnd = 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200 | 1300 | 1400 | 1500 | 1600 | 1700 | 1800 | 1900 | 2000 | 2100 | 2200 | 2300 | 2400;

export interface configInterface {
	texts?: configTextsInterface;
	locale?: string;
	week?: {
		dayBoundaries: {
			start: dayStartOrEnd;
			end: dayStartOrEnd;
		},
		nDays: 5 | 7;
	},
}