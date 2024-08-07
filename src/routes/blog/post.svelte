<!-- post.svelte -->
<script>
	// @ts-nocheck
	export let title;
	export let date;
</script>

<article class="markdown">
	{title} - {date}

	<slot />
</article>

<style>
	article {
		width: 60vw;
		margin: 0 auto;
		--card-background-color: none;
		--card-box-shadow: none;
	}
</style>
