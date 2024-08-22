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
	<BlogPostPreview
		title={post.meta.title}
		slug={post.meta.slug}
		summary={post.meta.summary}
		blogPreviewImage={post.meta.blogPreviewImage}
		publicationDate={post.meta.publicationDate}
		link={post.path}
	/>
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
