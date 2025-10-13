<!-- projects/+page.svelte -->
<script>
	let { data } = $props()
	import ProjectPreview from '$lib/components/ProjectPreview.svelte'
</script>

<div class="grid">
	{#each data.projects as project, index}
		{@const title = project.meta.title}
		{@const caption = project.meta.caption}
		{@const projectImage = project.meta.projectImage}
		{@const link = project.path}
		{@const tags = project.meta.tags}
		<div class={index % 2 === 0 ? 'preview left' : 'preview right'}>
			<ProjectPreview {title} {caption} {projectImage} {link} {tags} />
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
	.preview {
		width: 380px;
		margin: 1em;
	}
	.left {
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.right {
		grid-column-start: 2;
		grid-column-end: 3;
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
