<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title = 'Project Title';
	export let project_image = 'images/';
	export let desc;
</script>

<div>
	<figure><img src={project_image} height="480" alt={title} /></figure>
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
