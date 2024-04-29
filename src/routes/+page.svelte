<script>
	import Tag from '$lib/components/Tag.svelte';
</script>

<div class="column wide-left" />
<div class="column wide-right">
	<h1 class="intro">
		<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Hello.
	</h1>
	<h2>I am Russell Warner.</h2>
	<p>
		I am a user interface architect. With my knowledge in aesthetics, psychology and software
		development, I take a holistic approach to any user interface. <!--You can read about interface architecture philsophy here.-->
	</p>
</div>

<div class="column wide-left">
	<h1>
		<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Seqseco
	</h1>
	<h2>A Product Design Story</h2>
	<p>Some text about the project.</p>
	<div class="taglist">
		<Tag name="Svelte" /><Tag name="HTML5" /><Tag name="CSS3" /><Tag name="Nextjs" /><Tag
			name="Supabase"
		/>
	</div>
</div>

<div class="column wide-right">
	<img
		src="/images/projects/seqseco-project-display.png"
		width="1200"
		height="1697"
		alt="Project Seqseco on iphone"
	/>
</div>

<style lang="scss">
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
	.intro {
	}
	.taglist {
		margin-top: 10px;
	}
</style>
