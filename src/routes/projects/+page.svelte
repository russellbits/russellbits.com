<!-- projects/+page.svelte -->
<script>
	export let data;
	import Project from '$lib/components/Project.svelte';
</script>

{#each data.projects as project, index}
	<div class={index % 2 === 0 ? 'left' : 'right'}>
		<Project
			title={project.meta.title}
			summary={project.meta.summary}
			publicationDate={project.meta.date}
			projectImage={project.meta.projectImage}
			link={project.path}
		/>
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
