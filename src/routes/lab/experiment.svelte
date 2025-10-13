<!-- experiment.svelte -->
<script>
	let { title, date, children } = $props()
</script>

<svelte:head>
	<title>Russellbits Lab | {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article class="markdown lab" style="width:100vw;">
	{@render children()}
</article>

<style lang="scss">
	.markdown.lab {
		margin: 4em auto;
	}
</style>
