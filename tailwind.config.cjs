const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	daisyui: {
		themes: ["night"],
	},

	plugins: [require("daisyui")],
}

module.exports = config
