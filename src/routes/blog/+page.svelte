<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
	import BlogPost from '$lib/components/BlogPost.svelte';
	// import BlogSidebar from '$lib/components/BlogSidebar.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<!--<div class="column" />-->
<!-- <div class="column sidebar">
		<BlogSidebar />
	</div> -->

{#each data.posts as post}
	<BlogPost
		title={post.meta.title}
		summary={post.meta.summary}
		blogImage={post.meta.blogImage}
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
