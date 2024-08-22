<!-- projects/+page.svelte -->
<script>
	export let data;
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
</script>

{#each data.projects as project, index}
	{@const title = project.meta.title}
	{@const summary = project.meta.summary}
	{@const publicationDate = project.meta.publicationDate}
	{@const projectImage = project.meta.projectImage}
	{@const link = project.meta.link}
	<div class={index % 2 === 0 ? 'left' : 'right'}>
		<ProjectPreview {title} {summary} {publicationDate} {projectImage} {link} />
	</div>
{/each}

<!-- </div> -->

<style>
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
