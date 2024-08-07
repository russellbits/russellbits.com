// src/routes/projects/+page.js
// @ts-ignore
export const load = async ({ fetch }) => {
	const response = await fetch('/projects.json');
	const projects = await response.json();

	return {
		projects
	};
};
