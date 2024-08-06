// src/routes/api/lab/+server.js
import { fetchMarkdownExperiments } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allExperiments = await fetchMarkdownExperiments();

	const sortedExperiments = allExperiments.sort((a, b) => {
		// @ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedExperiments);
};
