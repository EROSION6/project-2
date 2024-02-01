export const options = {
	chart: {
		type: "spline",
		backgroundColor: "rgba(0,0,0,0)",
		defs: {
			gradient0: {
				tagName: "linearGradient",
				id: "gradient-0",
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 1,
				children: [
					{
						tagName: "stop",
						offset: 0,
					},
					{
						tagName: "stop",
						offset: 1,
					},
				],
			},
		},
		credits: {
			enabled: false,
		},
		title: {
			text: "",
		},
		legend: {
			enabled: false,
		},
	},
	series: [
		{
			type: "areaspline",
			dataLabels: {
				enabled: false,
			},
			marker: {
				enabled: false,
			},
		},
		{
			data: [0.5, 5, 2.5, 10, 7, 10.5, 5.5, 8, 4, 9.5, 1, 11],
		},
		{
			data: [4, 5, 4, 3.6, 3.4, 1, 7, 8, 6.5, 8.5, 4.7, 9],
		},
	],
}


export const progress = [
	{
		title: "Bitcoin",
		progress: "45%",
		color: "bg-gray-300",
		number: "23",
		procent: "45",
	},
	{
		title: "Ethereum",
		progress: "84%",
		color: "bg-gray-700",
		number: "36",
		procent: "84",
	},
	{
		title: "Shiba",
		progress: "28%",
		color: "bg-yellow-400",
		number: "9",
		procent: "17",
	},
	{
		title: "Solona",
		progress: "42%",
		color: "bg-purple-600",
		number: "21",
		procent: "42",
	},
	{
		title: "Tether",
		progress: "7%",
		color: "bg-red-600",
		number: "3",
		procent: "7",
	},
]