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
	/* See markdown css in lib/styles */
</style>
