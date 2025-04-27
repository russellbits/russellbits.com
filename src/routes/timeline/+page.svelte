<!-- projects/+page.svelte -->
<script>
	export let data
	import TimelinePreview from '$lib/components/TimelinePreview.svelte'
</script>

<div class="grid">
	{#each data.timeline as website, index}
		{@const title = website.meta.title}
		{@const caption = website.meta.caption}
		{@const projectImage = website.meta.projectImage}
		{@const link = website.path}
		{@const tags = website.meta.tags}
		<div>
			<TimelinePreview {title} {caption} {projectImage} {link} {tags} />
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 75vw;
		margin-left: 10vw;
	}

	/*
	.taglist {
		margin-top: 10px;
	} */

	@media only screen and (max-width: 768px) {
	}
	@media screen and (max-width: 480px) {
	}
</style>
