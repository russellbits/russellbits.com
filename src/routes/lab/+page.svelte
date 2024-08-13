<!-- lab/+page.svelte -->
<script>
	export let data;
	import Experiment from '$lib/components/Experiment.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>
	<div class="title">
		<Title title="Lab" color="mauve" align="left" />
	</div>

	<div class="content">
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
	</div>
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
		margin: 4em 0 0 0;
		grid-column-start: 2;
		grid-column-end: 5;
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
	@media only screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			margin: 10em 0.5em 0 0.5em;
			border: aqua;
		}
	}
</style>
