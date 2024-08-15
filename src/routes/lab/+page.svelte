<!-- lab/+page.svelte -->
<script>
	export let data;
	import Experiment from '$lib/components/Experiment.svelte';
	import Title from '$lib/components/Title.svelte';
	console.log(data);
</script>

<main>
	<div class="title">
		<Title title="Lab" color="mauve" align="right" />
	</div>

	{#each data.experiments as experiment}
		{@const title = experiment.meta.title}
		{@const summary = experiment.meta.summary}
		{@const image = experiment.meta.experimentImage}
		{@const path = experiment.path}
		<div class="experiment">
			<!-- prettier-ignore -->
			<Experiment {title} {summary} experimentImage={image} link={path} />
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 10px;
		margin: 8em 10em 0 10em;
		padding: 0;
	}

	.title {
		margin: 0;
		grid-column-start: 1;
		grid-column-end: 5;
	}

	.experiment {
		flex-grow: 1;
		text-align: left;
		padding: 12px;
		margin: 1em 0 0 0;
		width: 200px;
	}

	/* .taglist {
		margin-top: 10px;
	} */

	/* @media only screen and (max-width: 1040px) {
	} */

	@media only screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
		}
		.title {
			align-self: flex-end;
			margin: 4em 2em 0 0;
		}
		.experiment {
			max-width: 200px;
		}
	}
</style>
