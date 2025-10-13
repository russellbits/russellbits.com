<!-- src/routes/banapana/+page.svelte -->
<script>
	// @ts-nocheck
	import Button from '$lib/components/Button.svelte'

	let { data } = $props()

	const PostBySlug = $derived(data.PostBySlug)

	const post = $derived(PostBySlug?.data?.post)
</script>

<div class="column" />
<div class="column sidebar">
	<!-- <BlogSidebar /> -->
</div>
<div class="column">
	<h1>{post.title}</h1>
	<p>{@html post.excerpt}</p>
	<Button label="Read More @ Banapana" url={`https://banapana.com/${post.uri}`} style="small" />
	<p class="taglist">
		{#each post.tags.nodes as tag}
			<span class="tag">{tag.name}</span>&nbsp;
		{/each}
	</p>
</div>

<style>
	.sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	}

	.taglist {
		margin-top: 10px;
	}

	.tag {
		color: white;
		text-align: center;
		font:
			15px 'Raleway',
			sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		background: #b339f9;
		width: auto;
		padding: 8px;
		margin: 4px;
		border: 1px solid #3b4781;
	}
</style>
