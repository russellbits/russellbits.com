<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
	import BlogPostPreview from '$lib/components/BlogPostPreview.svelte';
	// import BlogSidebar from '$lib/components/BlogSidebar.svelte';
</script>

<!--<div class="column" />-->
<!-- <div class="column sidebar">
		<BlogSidebar />
	</div> -->

{#each data.posts as post}
	{@const title = post.meta.title}
	{@const slug = post.meta.slug}
	{@const summary = post.meta.summary}
	{@const blogPreviewImage = post.meta.blogPreviewImage}
	{@const publicationDate = post.meta.publicationDate}
	{@const link = post.path}
	<BlogPostPreview {title} {slug} {summary} {blogPreviewImage} {publicationDate} {link} />
{/each}

<style>
	/* .sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	} */

	/* .taglist {
		margin-top: 10px;
	} */
</style>
