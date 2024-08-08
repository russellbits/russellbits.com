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
	Lab name:
	<!-- <h1>{title}</h1>

	<p>Published: {date}</p> -->

	<slot />
</article>

<style lang="scss">
	article {
		background-color: none;
		width: 70vw;
		margin: 0 auto;
		--card-background-color: none;
		--card-border: none;
		--card-box-shadow: none;
	}
</style>
