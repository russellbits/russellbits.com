export const fetchMarkdownPosts = async () => {
	// prettier-ignore
	const allPostFiles = import.meta.glob('/src/routes/blog/*/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -8);
			// Format the dates into human readable string.
			// @ts-ignore
			metadata.publicationDate = reformatDate(metadata.publicationDate);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	// @ts-ignore
	function reformatDate(dateStr) {
		const dateObj = new Date(dateStr);
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		// @ts-ignore
		return dateObj.toLocaleDateString('en-US', options);
	}

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
