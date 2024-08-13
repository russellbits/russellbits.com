<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';
</script>

<main>
	<div class="intro">
		<div class="title">
			<div><img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" /></div>
			<div><h1>Hello.</h1></div>
		</div>
		<h2>I am Russell Warner.</h2>
		<p>
			I am a user interface architect. With my knowledge in aesthetics, psychology and software
			development, I take a holistic approach to any user interface. My goal with every user
			interface is to employ transparency, decision reduction, and joy.<!--You can read about interface architecture philsophy here.-->
		</p>
	</div>

	<div class="featured-project-image">
		<Figure
			url="/images/projects/seqseco-project-display.png"
			altname="iphone displaying the seqseco web app."
			caption="Seqseco is a sequenced timer web app."
			figClass="normal"
		/>
	</div>

	<div class="featured-project-desc">
		<div class="title">
			<div><img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" /></div>
			<div><h1>Seqseco</h1></div>
		</div>

		<h2>A Product Design Story</h2>
		<p>
			Ask the A.I. version of me anything you would like know about me. That can seem like a lot so,
			you can also just ask for a suggestion, and the A.I. version of me will provide some
			suggestions.
			<Button label="Read More" url="/projects/seqseco" style="small" />
		</p>

		<!-- <div class="taglist">
			<Tag name="Svelte" /><Tag name="HTML5" /><Tag name="CSS3" /><Tag name="Nextjs" /><Tag
				name="Supabase"
			/>
		</div> -->
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(4, 14em);
		grid-column-gap: 1em;
		// grid-template-rows: 40em 40em;
		margin: 10em 10em 0 10em;
		padding: 0;
	}
	.intro {
		grid-column-start: 3;
		grid-column-end: 5;
		margin: 0 0 2.5em 0;
		border: 1px solid aqua;
	}
	.featured-project-image {
		grid-column-start: 1;
		grid-column-end: 3;
		margin: 0 0 2.5em 0;
		border: 1px solid aqua;
	}
	.featured-project-desc {
		grid-column-start: 3;
		grid-column-end: 5;
		margin: 0 0 2.5em 0;
		border: 1px solid aqua;
	}
	.title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: left;
		align-items: flex-start;
		gap: 0.8em;
		border: 1px solid purple;
	}
	h1 {
		text-align: left;
	}
	.wide-col-left {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.wide-col-right {
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.front-page-image {
		transform: scale(0.9);
	}

	@media screen and (max-width: 768px) {
		main {
			width: 90vw;
			display: flex;
			flex-direction: column;
			margin: 10em 0 0 0;
			border: aqua;
		}
		.intro {
			width: 100%;
			margin: 0 0 2.5em 0;
			border: 1px solid lawngreen;
		}
		.featured-project-image {
			width: 100%;
			margin: 0 0 2.5em 0;
			border: 1px solid lawngreen;
		}
		.featured-project-desc {
			width: 100%;
			margin: 0 0 2.5em 0;
			border: 1px solid lawngreen;
		}
	}

	@media only screen and (max-width: 480px) {
	}
</style>
