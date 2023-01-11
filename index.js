const tutorials = [
	"what does the this keyword mean?",
	"What is the Constructor OO pattern?",
	"implementing Blockchain Web API",
	"The Test Driven Development Workflow",
	"What is NaN and how Can we Check for it",
	"What is the difference between stopPropagation and preventDefault?",
	"Immutable State and Pure Functions",
	"what is the difference between == and ===?",
	"what is the difference between event capturing and bubbling?",
	"what is JSONP?",
];

const titleCased = (tutorials) => {
	function upperCase(str) {
		const stirArray = str.split(" ");

		const upper = stirArray.map(
			(entry) => entry[0].toUpperCase() + entry.slice(1)
		);
		return upper.join(" ");
	}
	return tutorials.map((tutorial) => upperCase(tutorial));
};
