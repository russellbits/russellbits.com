<!-- projects/+page.svelte -->
<script>
	export let data;
	import Project from '$lib/components/Project.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>
	<div class="title">
		<Title title="Projects" color="mauve" align="left" />
	</div>
	<div class="content">
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
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1em;
		grid-template-rows: 8em 40em 40em;
		margin: 60px 10em 0 10em;
		padding: 0;
		/* background-color: rgba(255, 0, 0, 0.4); */
	}
	.title {
		margin: 4em 0 0 0;
		grid-column-start: 2;
		grid-column-end: 5;
	}
	.content-col-left {
		grid-column-start: 1;
		grid-column-end: 5;
	}
	.content-col-right {
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
			display: flex;
			flex-direction: column;
			margin: 10em 0.5em 0 0.5em;
			border: aqua;
		}
	}
</style>
