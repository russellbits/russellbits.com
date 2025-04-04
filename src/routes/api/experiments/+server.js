// src/routes/api/experiments/+server.js

import { fetchMarkdownExperiments } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allExperiments = await fetchMarkdownExperiments()

	const sortedExperiments = allExperiments.sort((a, b) => {
		return a.meta.id - b.meta.id
	})

	return json(sortedExperiments)
}
