<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title = 'Blog Title';
	export let blog_image = 'images/';
	export let desc;
</script>

<div>
	<figure><img src={blog_image} height="440" alt={title} /></figure>
	<h2>{title}</h2>
	<p>{desc}</p>
	<div class="taglist">
		<Tag name="temporary" />
	</div>
</div>

<style>
	img {
		max-width: 100%;
		max-height: 480px;
	}
	figure {
		margin: 0 auto;
		border: 1px solid purple;
		text-align: center;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
