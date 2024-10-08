// src/routes/blog/+page.js

// @ts-ignore
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/experiments`);
	const experiments = await response.json();

	return {
		experiments
	};
};
