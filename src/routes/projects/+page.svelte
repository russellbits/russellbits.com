<!-- projects/+page.svelte -->
<script>
	export let data;
	import Project from '$lib/components/Project.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>
	<div class="title">
		<Title title="Projects" color="mauve" align="right" />
	</div>
	<!-- <div class="content"> -->
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
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1em;
		margin: 8em 10em 0 10em;
		padding: 0;
	}
	.title {
		margin: 0 0 3em 0;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.left {
		grid-column-start: 1;
		grid-column-end: 2;
		margin: 0.5em 0 0 0;
	}
	.right {
		grid-column-start: 2;
		grid-column-end: 3;
		margin: 0.5em 0 0 0;
	}

	/*
	.taglist {
		margin-top: 10px;
	} */

	@media only screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			margin: 10em 0.5em 0 0.5em;
		}
		.title {
			margin: 0;
		}
		.left {
			margin: 0.5em 0 0 0;
		}
		.right {
			margin: 0.5em 0 0 0;
		}
	}
</style>
