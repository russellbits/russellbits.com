export const fetchMarkdownPosts = async () => {
	// prettier-ignore
	const allPostFiles = import.meta.glob('/src/routes/blog/*/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -8);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchMarkdownExperiments = async () => {
	const allExperimentFiles = import.meta.glob('/src/routes/lab/*/*.md');
	const iterableExperiments = Object.entries(allExperimentFiles);

	const allExperiments = await Promise.all(
		iterableExperiments.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const experimentPath = path.slice(11, -8);

			return {
				meta: metadata,
				path: experimentPath
			};
		})
	);

	return allExperiments;
};

export const fetchMarkdownProjects = async () => {
	const allProjectFiles = import.meta.glob('/src/routes/projects/*/*.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -8);

			return {
				meta: metadata,
				path: projectPath
			};
		})
	);

	return allProjects;
};
