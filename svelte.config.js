import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ pages: 'build', assets: 'build', fallback: null, precompress: false }),
		alias: { $lib: './src/lib' }
	},
	vitePlugin: { inspector: true },
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/post.svelte',
				lab: 'src/routes/lab/experiment.svelte',
				projects: 'src/routes/projects/project.svelte'
			}
		})
	]
}

export default config
