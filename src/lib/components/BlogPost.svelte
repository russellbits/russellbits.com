<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title = 'Blog Title';
	export let blog_image = 'images/';
	export let desc;
</script>

<div class="post">
	<figure><img src={blog_image} alt={title} /></figure>
	<div class="content">
		<h2>{title}</h2>
		<p>{desc}</p>
		<div class="taglist">
			<Tag name="Supabase" />
			<Tag name="HTML 5" />
			<Tag name="Javascript" />
		</div>
	</div>
</div>

<style>
	.post {
		margin: 0 0 2em 0;
		padding: 0;
		display: flex;
		flex-direction: row; /* or column */
		align-items: flex-start;
		border: 1px solid purple;
	}
	.post h2 {
		line-height: 1em;
		margin: 0;
	}
	.post p {
		margin: 0;
	}
	.post figure {
		margin: 0 1em 0 0;
		width: 280px;
		height: 280px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		flex-shrink: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
