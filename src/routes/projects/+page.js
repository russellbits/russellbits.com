// src/routes/projects/+page.js
import { reformatDate } from '$lib/utils';
// @ts-ignore
export const load = async ({ fetch }) => {
	const response = await fetch('/projects.json');
	const projects = await response.json();

	// @ts-ignore
	projects.forEach((project) => {
		if (project.meta && project.meta.date) {
			project.meta.date = reformatDate(project.meta.date);
		}
	});

	return {
		projects
	};
};

// @ts-ignore
// function reformatDate(dateStr) {
// 	const dateObj = new Date(dateStr);
// 	const options = { year: 'numeric', month: 'long', day: 'numeric' };
// 	// @ts-ignore
// 	return dateObj.toLocaleDateString('en-US', options);
// }
