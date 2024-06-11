<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title = 'Blog Title';
	export let blog_image = 'images/';
	export let desc;
</script>

<div id="zero">
	<figure><img src={blog_image} height="440" alt={title} /></figure>
	<h2>{title}</h2>
	<p>{desc}</p>
	<div class="taglist">
		<Tag name="Supabase" />
		<Tag name="HTML 5" />
		<Tag name="Javascript" />
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
	#zero {
		border: 1px solid purple;
	}
</style>
