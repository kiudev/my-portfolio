/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'night': '#161616',
			'night-300': '#404040',
			'light': '#E8E8E8',
			'blue-300': '#50DDE7',
			'blue-400': '#1EBCDC',
			'black': '#000000'
		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
}
