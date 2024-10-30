<!-- projects/+page.svelte -->
<script>
	export let data
	import ProjectPreview from '$lib/components/ProjectPreview.svelte'
</script>

{#each data.projects as project, index}
	{@const title = project.meta.title}
	{@const summary = project.meta.summary}
	{@const publicationDate = project.meta.publicationDate}
	{@const projectImage = project.meta.projectImage}
	{@const link = project.path}
	<div class={index % 2 === 0 ? 'preview left' : 'preview right'}>
		<ProjectPreview {title} {summary} {projectImage} {link} />
	</div>
{/each}

<!-- </div> -->

<style>
	.preview {
		max-width: 600px;
	}
	.left {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.right {
		grid-column-start: 2;
		grid-column-end: 3;
	}

	/*
	.taglist {
		margin-top: 10px;
	} */

	@media only screen and (max-width: 768px) {
	}
	@media screen and (max-width: 480px) {
	}
</style>
