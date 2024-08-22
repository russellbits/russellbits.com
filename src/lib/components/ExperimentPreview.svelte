<script>
	export let title = 'Untitled';
	export let experimentImage = 'https://placehold.co/250x250';
	export let summary = 'No summary available.';
	export let slug = 'https://codepen.io/russellbits';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';
</script>

<div class="experiment-card">
	<div>
		<a href={`${slug}`}
			><Figure
				imgUrl={experimentImage}
				altname={`${title} experiment`}
				caption="none"
				figClass="experiment"
			/></a
		>
	</div>
	<div class="title"><h3><a href={`${slug}`}>{title}</a></h3></div>
	<div class="summary"><p>{summary}</p></div>
	<div><Button url={`${slug}`} label="Open Experiment" style="medium center" /></div>
</div>

<style lang="scss">
	.experiment-card {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		align-items: flex-start;
	}

	.title {
		align-self: flex-start;
	}

	.summary {
		flex-grow: 1;
	}

	h3 > a {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
		font-size: 1.6em;
		text-align: center;
		line-height: 1.3em;
		align-self: flex-start;
		margin: 0.2em 0 0.2em 0;
	}

	p {
		line-height: 1.4em;
	}
</style>
