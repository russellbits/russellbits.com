<!-- src/routes/blog/+page.svelte -->
<script>
	export let data
	let index = 0
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte'
	// import BlogSidebar from '$lib/components/BlogSidebar.svelte';
</script>

<!-- <div class="column" />
<div class="column sidebar">
	<BlogSidebar />
</div> -->

<div class="grid">
	{#each data.posts as post}
		{@const title = post.meta.title}
		{@const slug = post.meta.slug}
		{@const summary = post.meta.summary}
		{@const blogPreviewImage = post.meta.blogPreviewImage}
		{@const publicationDay = post.meta.publicationDay}
		{@const publicationMonth = post.meta.publicationMonth}
		{@const link = post.path}
		<div class={index % 2 === 0 ? 'preview left' : 'preview right'}>
			<BlogPostPreview
				{title}
				{slug}
				{summary}
				{blogPreviewImage}
				{publicationDay}
				{publicationMonth}
				{link}
			/>
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 75vw;
		margin-left: 10vw;
	}
	.preview {
		width: 500px;
		margin: 1em;
	}
	.left {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.right {
		grid-column-start: 2;
		grid-column-end: 3;
	}
	/* .sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	} */

	/* .taglist {
		margin-top: 10px;
	} */
</style>
