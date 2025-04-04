<!-- lab/+page.svelte -->
<script>
	export let data
	import ExperimentPreview from '$lib/components/ExperimentPreview.svelte'
</script>

<div class="experiments">
	{#each data.experiments as experiment}
		{@const title = experiment.meta.title}
		{@const slug = experiment.meta.slug}
		{@const codepenUrl = experiment.meta.codepenUrl}
		{@const summary = experiment.meta.summary}
		{@const image = experiment.meta.experimentImage}
		<!-- {@const path = experiment.meta.experimentUrl} -->
		<div class="experiment">
			<!-- prettier-ignore -->
			<ExperimentPreview {title} {slug} {codepenUrl} {summary} experimentImage={image} />
		</div>
	{/each}
</div>

<style>
	.experiments {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		width: 75vw;
		margin-left: 10vw;
	}
	.experiment {
		text-align: left;
		width: 200px;
		padding: 12px;
		margin: 0 auto;
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
