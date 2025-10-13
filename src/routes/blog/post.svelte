<!-- post.svelte -->
<script>
	// @ts-nocheck
	let { title, date, children } = $props()
</script>

<svelte:head>
	<title>Russellbits Blog | {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article class="markdown">
	{@render children()}
</article>

<style>
	/* See markdown css in lib/styles */
</style>
