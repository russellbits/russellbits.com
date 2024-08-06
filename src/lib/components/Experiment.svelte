<script>
	export let title = 'Untitled';
	export let experimentImage = 'https://placehold.co/200x200';
	export let summary = 'No summary available.';
	export let link = '#';
</script>

<div class="experiment">
	<h3>{title}</h3>
	{experimentImage}
	<p>{summary}</p>
	<a href={link}>Open Experiment</a>
</div>

<style lang="scss">
	.experiment {
		width: 20em;
	}
</style>
