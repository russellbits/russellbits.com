<!-- post.svelte -->
<script>
	// @ts-nocheck
	export let title;
	export let date;
</script>

<svelte:head>
	<title>Russellbits - {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article>
	<slot />
</article>

<style lang="scss">
	article {
		background-color: none;
		border: 1px solid purple;
		width: 70vw;
		margin: 0 auto;
		--card-background-color: none;
	}
</style>
