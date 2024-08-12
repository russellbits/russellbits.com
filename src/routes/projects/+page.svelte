<!-- projects/+page.svelte -->
<script>
	export let data;
	import Project from '$lib/components/Project.svelte';
</script>

<div class="title">
	<h1 class="intro">
		<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Projects
	</h1>
</div>

<main>
	{#each data.projects as project}
		<div class="column content">
			<Project
				title={project.meta.title}
				summary={project.meta.summary}
				publicationDate={project.meta.date}
				projectImage={project.meta.projectImage}
				link={project.path}
			/>
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1em;
		grid-template-rows: 40em 40em;
		margin: 60px 10em 0 10em;
		padding: 0;
		/* background-color: rgba(255, 0, 0, 0.4); */
	}
	.title {
		position: relative;
		top: 4em;
		right: 10vw;
		padding: 2em;
		margin: 2em;
	}
	.title h1 {
		text-align: right;
	}
	/* .column {
		background-color: rgba(255, 0, 0, 0.2);
	}
	.wide-left {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.wide-right {
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.taglist {
		margin-top: 10px;
	} */
	/* Portrait */
	@media only screen and (max-width: 768px) {
		main {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: 8em 40em 40em;
		}
	}
</style>
