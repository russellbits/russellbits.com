<!-- lab/+page.svelte -->
<script>
	export let data;
	import Experiment from '$lib/components/Experiment.svelte';
</script>

<main>
	<div class="column title">
		<h1 class="intro">
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Lab
		</h1>
	</div>

	<div class="column content">
		{#each data.experiments as experiment}
			<code>{experiment.path}</code>
			<Experiment
				title={experiment.meta.title}
				summary={experiment.meta.summary}
				experimentImage={experiment.meta.experimentImage}
				link={experiment.path}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 1em;
		grid-template-rows: 8em 40em 40em;
		margin: 60px 10em 0 10em;
		padding: 0;
		/* background-color: rgba(255, 0, 0, 0.4); */
	}
	h1 {
		text-align: right;
	}
	.title {
		grid-column-start: 1;
		grid-column-end: 5;
		text-align: center;
	}
	.column {
		/* background-color: rgba(255, 0, 0, 0.2); */
	}
	.sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.content {
		grid-column-start: 2;
		grid-column-end: 5;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
