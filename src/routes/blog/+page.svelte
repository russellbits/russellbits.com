<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
	import BlogPost from '$lib/components/BlogPost.svelte';
	import BlogSidebar from '$lib/components/BlogSidebar.svelte';
</script>

<main>
	<div class="column title">
		<h1 class="intro">
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Blog
		</h1>
	</div>

	<!--<div class="column" />-->
	<div class="column sidebar">
		<BlogSidebar />
	</div>

	<div class="column content">
		{#each data.posts as post}
			<BlogPost
				title={post.meta.title}
				summary={post.meta.summary}
				blogImage={post.meta.blogImage}
				publicationDate={post.meta.publicationDate}
				link={post.path}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 1em;
		grid-template-rows: 8em 40em 40em;
		margin: 60px 10em 0 10em;
		padding: 0;
		/* background-color: rgba(255, 0, 0, 0.4); */
	}
	h1 {
		text-align: right;
	}
	.title {
		grid-column-start: 1;
		grid-column-end: 5;
		text-align: center;
	}
	.column {
		/* background-color: rgba(255, 0, 0, 0.2); */
	}
	.sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.content {
		grid-column-start: 2;
		grid-column-end: 5;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
