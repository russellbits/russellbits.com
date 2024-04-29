<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title;
	export let project_image;
	export let desc;
</script>

<div>
	<img src={project_image} alt={title} />
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
	.taglist {
		margin-top: 10px;
	}
</style>
