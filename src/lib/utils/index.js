export const fetchMarkdownProjects = async () => {
	const allProjectFiles = import.meta.glob(`/src/routes/projects/\*_/_.md`);
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: projectPath
			};
		})
	);

	return allProjects;
};
