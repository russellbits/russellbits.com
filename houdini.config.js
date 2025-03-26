// houdini.config.js

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://banapana.com/graphql'
	},
	runtimeDir: '.houdini',
	outputDir: './.houdini',
	plugins: {
		'houdini-svelte': {}
	},
	client: './src/client'
}

export default config
