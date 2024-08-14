<script>
	export let title = 'Untitled';
	export let experimentImage = 'https://placehold.co/250x250';
	export let summary = 'No summary available.';
	export let link = '#';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';
</script>

<div class="experiment-card">
	<Figure
		imgUrl={experimentImage}
		altname={`${title} experiment`}
		caption="none"
		figClass="experiment"
	/>
	<h3>{title}</h3>
	<p>{summary}</p>
	<Button url={link} label="Open Experiment" style="medium center" />
</div>

<style lang="scss">
	.experiment-card {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}

	h3 {
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
		font-size: 1.6em;
		text-align: center;
		line-height: 1.3em;
		margin: 0.4em 0 0.4em 0;
	}
	p {
		line-height: 1.4em;
	}
</style>
