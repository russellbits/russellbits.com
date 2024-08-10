<!-- post.svelte -->
<script>
	// @ts-nocheck
	export let title;
	export let date;
</script>

<svelte:head>
	<title>Russellbits Blog | {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article class="markdown">
	<slot />
</article>

<style>
	article.markdown {
		width: 60vw;
		margin: 0 auto;
		--card-background-color: none;
		--card-box-shadow: none;
	}
</style>
