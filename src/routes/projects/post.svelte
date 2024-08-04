<!-- post.svelte -->
<script>
	// @ts-nocheck
	export let title;
	export let date;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>

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
