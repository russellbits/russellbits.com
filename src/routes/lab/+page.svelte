<!-- lab/+page.svelte -->
<script>
	export let data;
	import ExperimentPreview from '$lib/components/ExperimentPreview.svelte';
</script>

{#each data.experiments as experiment}
	{@const title = experiment.meta.title}
	{@const slug = experiment.meta.slug}
	{@const summary = experiment.meta.summary}
	{@const image = experiment.meta.experimentImage}
	<!-- {@const path = experiment.meta.experimentUrl} -->
	<div class="experiment">
		<!-- prettier-ignore -->
		<ExperimentPreview {title} {slug} {summary} experimentImage={image} />
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
