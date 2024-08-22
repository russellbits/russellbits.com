// src/routes/+layout.js
export const prerender = true;
export const trailingSlash = 'always';

// @ts-ignore
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
