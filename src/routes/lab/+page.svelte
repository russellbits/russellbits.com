<!-- lab/+page.svelte -->
<script>
	export let data;
	import Experiment from '$lib/components/Experiment.svelte';
</script>

<div class="title">
	<h1 class="intro">
		<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Lab
	</h1>
</div>

<main>
	{#each data.experiments as experiment}
		<div class="experiments">
			<Experiment
				title={experiment.meta.title}
				summary={experiment.meta.summary}
				experimentImage={experiment.meta.experimentImage}
				link={experiment.path}
			/>
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 1em;
		/* grid-template-rows: 8em 40em 40em; */
		margin: 60px 10em 0 10em;
		padding: 0;
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

	/*.column {
		 background-color: rgba(255, 0, 0, 0.2); 
	}*/
	.experiments {
		max-width: 200px;
	}
	/* .taglist {
		margin-top: 10px;
	} */
</style>
