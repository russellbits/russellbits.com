<!-- post.svelte -->
<script>
	// @ts-nocheck
	export let title;
	export let date;
</script>

<svelte:head>
	<title>Russellbits Projects | {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article class="markdown">
	<slot />
</article>

<style lang="scss"></style>
