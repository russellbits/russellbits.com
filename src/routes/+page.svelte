<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<main>
	<div class="wide-col-right">
		<Title title="Hello." color="mauve" />
		<h2>I am Russell Warner.</h2>
		<p>
			I am a user interface architect. With my knowledge in aesthetics, psychology and software
			development, I take a holistic approach to any user interface. My goal with every user
			interface is to employ transparency, decision reduction, and joy.<!--You can read about interface architecture philsophy here.-->
		</p>
	</div>

	<div class="wide-col-left">
		<Figure
			url="/images/projects/seqseco-project-display.png"
			altname="iphone displaying the seqseco web app."
			caption="Seqseco is a sequenced timer web app."
			figClass="normal"
		/>
	</div>

	<div class="wide-col-right">
		<Title title="Seqseco" color="blue" />

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
		margin: 10em 10em 0 10em;
		padding: 0;
	}

	.wide-col-left {
		grid-column-start: 1;
		grid-column-end: 3;
		margin: 0 0 2.5em 0;
		border: 1px solid aqua;
	}
	.wide-col-right {
		grid-column-start: 3;
		grid-column-end: 5;
		margin: 0 0 2.5em 0;
		border: 1px solid aqua;
	}

	@media screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			margin: 10em 0.5em 0 0.5em;
			border: aqua;
		}
		.wide-col-right {
			width: 100%;
			margin: 0 0 0 0;
			border: 1px solid lawngreen;
		}
		.wide-col-left {
			width: 100%;
			margin: 0 0 0 0;
			border: 1px solid lawngreen;
		}
	}

	@media only screen and (max-width: 480px) {
	}
</style>
