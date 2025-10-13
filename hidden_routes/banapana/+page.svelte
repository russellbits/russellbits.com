<!-- src/routes/banapana/+page.svelte -->
<script lang="ts">
	// import type { GetLatestPosts } from '$houdini'

	let { data } = $props()
	// @ts-ignore
	const GetLatestPosts = $derived(data.GetLatestPosts)
	const posts = $derived(GetLatestPosts?.data?.posts)
</script>

<div class="column" />
<div class="column sidebar">
	<!-- <BlogSidebar /> -->
</div>

<div class="post-list">
	<h2>The latest from Banapana</h2>
	{#each posts.nodes as post}
		{@const href = `https://banapana.com${post.uri}`}
		<div class="post-preview">
			<h3><a {href}>{post.title}</a></h3>
			<p>{@html post.excerpt}</p>
			<a {href}>Read More</a>
		</div>
	{/each}
</div>

<style>
	.sidebar {
		min-width: 30vw;
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.post-list {
		margin: 3em 0;
		grid-column-start: 2;
		grid-column-end: 3;
	}
	.post-preview {
		margin: 2em 1em;
	}
	.post-preview h3 > a {
		font-size: 1.8em;
	}
</style>
