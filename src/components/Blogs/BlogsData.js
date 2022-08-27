const blogPostsPreview = [
	{
		heading: 'Stop Using The "!" Bang Operator In JavaScript',
		createdAt: new Date("August 27, 2022").toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric"
		}),
		tagLine: "JavaScript",
		description:
			"Custom events in JavaScript make handling things like double click, long press, and touch gestures much easier, but they can also be used for cross app communication.",
		readMore: "/post/stop_using_bang_operator"
	},
	{
		heading: "Null Vs Undefined",
		createdAt: new Date("August 29, 2022").toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric"
		}),
		tagLine: "JavaScript",
		description:
			"This article explains the difference between null and undefined in depth.",
		readMore: "/post/null_vs_undefined"
	}
];

export default blogPostsPreview;
