<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<main>
	<div class="column wide-left">
		<figure class="front-page-image">
			<img
				src="/images/projects/seqseco/seqseco-project-display.png"
				width="1200"
				height="1697"
				alt="Project Seqseco on iphone"
			/>
		</figure>
	</div>

	<div class="column wide-right">
		<div class="intro">
			<h1>
				<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Hello.
			</h1>
			<h2>I am Russell Warner.</h2>
			<p>
				I am a user interface architect. With my knowledge in aesthetics, psychology and software
				development, I take a holistic approach to any user interface. My goal with every user
				interface is to employ transparency, decision reduction, and joy.<!--You can read about interface architecture philsophy here.-->
			</p>
		</div>

		<div>
			<h1>
				<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Mauve Cube" />Seqseco
			</h1>
			<h2>A Product Design Story</h2>
			<p>
				Ask the A.I. version of me anything you would like know about me. That can seem like a lot
				so, you can also just ask for a suggestion, and the A.I. version of me will provide some
				suggestions.
				<Button label="Read More" url="/projects/seqseco" />
			</p>

			<div class="taglist">
				<Tag name="Svelte" /><Tag name="HTML5" /><Tag name="CSS3" /><Tag name="Nextjs" /><Tag
					name="Supabase"
				/>
			</div>
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
	.intro {
		margin: 0 0 2.5em 0;
	}
	h1 {
		text-align: left;
	}
	.column {
		/* border: 1px solid rgba(70, 40, 70, 1); */
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
		transform: scale(0.9);
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
