<!-- projects/+page.svelte -->
<script>
	import Blog from '$lib/components/Blog.svelte';
</script>

<main>
	<div class="column title">
		<h1 class="intro">
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Blog
		</h1>
	</div>

	<!--<div class="column" />-->

	<div class="column sidebar">
		<ul>
			<li>Article 1</li>
			<li>Article 2</li>
			<li>Article 3</li>
		</ul>
	</div>

	<div class="column content">
		<Blog
			title="The Problem with Free Social Media"
			desc="How can we continue to pretend that it is free?"
			blog_image="images/blog-1.png"
		/>
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
