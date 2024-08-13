<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
	import BlogPost from '$lib/components/BlogPost.svelte';
	// import BlogSidebar from '$lib/components/BlogSidebar.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>
	<!--<div class="column" />-->
	<!-- <div class="column sidebar">
		<BlogSidebar />
	</div> -->
	<div class="title">
		<Title title="Blog" color="mauve" align="right" />
	</div>

	<div class="content">
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
		margin: 6em 10em 0 10em;
		padding: 0;
		/* background-color: rgba(255, 0, 0, 0.4); */
	}

	/* .sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
	} */

	.title {
		margin: 4em 0 0 0;
		grid-column-start: 2;
		grid-column-end: 5;
	}
	.content {
		grid-column-start: 1;
		grid-column-end: 5;
	}

	/* .taglist {
		margin-top: 10px;
	} */

	@media screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			margin: 10em 0.5em 0 0.5em;
			border: aqua;
		}
	}

	/* .sidebar {
		grid-column-start: 1;
		grid-column-end: 1;
	} */
</style>
