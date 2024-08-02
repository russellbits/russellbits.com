<script>
	import Tag from '$lib/components/Tag.svelte';
</script>

<main>
	<div class="column wide-left">
		<figure class="front-page-image">
			<img
				src="/images/projects/seqseco-project-display.png"
				width="1200"
				height="1697"
				alt="Project Seqseco on iphone"
			/>
		</figure>
	</div>

	<div class="column wide-right">
		<h1 class="intro">
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Hello.
		</h1>
		<h2>I am Russell Warner.</h2>
		<p>
			I am a user interface architect. With my knowledge in aesthetics, psychology and software
			development, I take a holistic approach to any user interface. My goal with every user
			interface is to employ transparency, decision reduction, and joy.<!--You can read about interface architecture philsophy here.-->
		</p>

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
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 1em;
		grid-template-rows: 20em 40em 40em;
		margin: 60px 10em 0 10em;
		padding: 0;
	}
	h1 {
		text-align: left;
	}
	.column {
		border: 1px solid rgba(70, 40, 70, 1);
	}
	.wide-left {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.wide-right {
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.front-page-image {
		transform: scale(0.6);
	}

	@media screen and (max-width: 740px) {
		main {
			width: 90vw;
			display: flex;
			flex-direction: column;
			margin: 90px 0 0 0;
		}
		.column {
		}
		.wide-left {
		}
		.wide-right {
		}
	}

	.taglist {
	}
</style>
