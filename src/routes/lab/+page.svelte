<!-- lab/+page.svelte -->
<script>
	export let data;
	import Experiment from '$lib/components/Experiment.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

{#each data.experiments as experiment}
	{@const title = experiment.meta.title}
	{@const summary = experiment.meta.summary}
	{@const image = experiment.meta.experimentImage}
	{@const path = experiment.meta.experimentUrl}
	<div class="experiment">
		<!-- prettier-ignore -->
		<Experiment {title} {summary} experimentImage={image} link={path}  />
	</div>
{/each}

<style>
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
		.experiment {
			max-width: 200px;
		}
	}
</style>
