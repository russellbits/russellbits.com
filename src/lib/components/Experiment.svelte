<script>
	export let title = 'Untitled';
	export let experimentImage = 'https://placehold.co/250x250';
	export let summary = 'No summary available.';
	export let link = '#';
	import Button from '$lib/components/Button.svelte';
</script>

<div>
	<img src={experimentImage} alt={title} />
	<h4>{title}</h4>
	<p>{summary}</p>
	<Button url={link} label="Open Experiment" style="small" />
</div>

<style lang="scss">
	h4 {
		margin: 0;
	}
	p {
		line-height: 1em;
	}
</style>
