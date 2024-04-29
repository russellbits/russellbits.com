<!-- projects/+page.svelte -->
<script>
	import Project from '$lib/components/Project.svelte';
</script>

<div class="column wide-left" />
<div class="column wide-right">
	<h1 class="intro">
		<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Projects
	</h1>
</div>

<div class="column wide-left">
	<Project
		title="Seqseco"
		project_image="images/projects/seqseco-project-display.png"
		desc="I designed Seqseco as a sequence timer to assist people who need to keep track of not just one timer, but multiple."
	/>
</div>

<div class="column wide-right">
	<Project
		title="Phylos Lab Admin"
		project_image="images/projects/phylos-project-display.png"
		desc="I designed Seqseco as a sequence timer to assist people who need to keep track of not just one timer, but multiple."
	/>
</div>

<style>
	.column {
		background-color: rgba(255, 0, 0, 0.2);
	}
	.wide-left {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.wide-right {
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
