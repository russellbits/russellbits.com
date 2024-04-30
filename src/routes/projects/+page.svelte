<!-- projects/+page.svelte -->
<script>
	import Project from '$lib/components/Project.svelte';
</script>

<main>
	<div class="column title">
		<h1 class="intro">
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Projects
		</h1>
	</div>

	<div class="column wide-left">
		<Project
			title="Seqseco"
			project_image="images/projects/seqseco-project-display-sm.png"
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

	<div class="column wide-left">
		<Project
			title="Z Gear"
			project_image="images/projects/zgear-project-display.png"
			desc="I designed this ecommerce site Z Gear, a producer of scuba diving vests with a GoPro shoulder mount. The site included a 3D presentation of the vest that users could rotate and see key features pop up."
		/>
	</div>

	<div class="column wide-right">
		<Project
			title="Holiday Inn Interactive Map"
			project_image="images/projects/hiex-project-display.png"
			desc="This interactive map was designed alongside the Good Maps API with custom icons, shaded activation areas and custom icons for different hotels."
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
