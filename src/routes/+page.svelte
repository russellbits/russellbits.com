<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="wide-col-right">
	<Title title="Hello." color="mauve" align="home" />
	<h2>I am Russell Warner.</h2>
	<p>
		I am a user interface architect. With my knowledge in aesthetics, psychology and software
		development, I take a holistic approach to any user interface. My goal with every user interface
		is to employ transparency, decision reduction, and joy.<!--You can read about interface architecture philsophy here.-->
	</p>
</div>

<div class="wide-col-left">
	<Figure
		imgUrl="/images/projects/seqseco-project-display.png"
		altname="iphone displaying the seqseco web app."
		caption="Seqseco is a sequenced timer web app."
		figClass="normal"
	/>
</div>

<div class="wide-col-right">
	<Title title="Project: Seqseco" color="blue" />

	<h2>A Product Design Story</h2>
	<p>
		While creating a new workout for myself, I realized it would be useful to have a timer that
		could, in turn, set off another timer—sequenced timers. I realized this might useful for other
		activities, too, like cooking or the pomadoro technique. After finding nothing online and not
		being impressed with the apps on the app store, I set out to make my own.
		<Button label="Read More" url="/projects/seqseco" style="small" />
	</p>

	<!-- <div class="taglist">
			<Tag name="Svelte" /><Tag name="HTML5" /><Tag name="CSS3" /><Tag name="Nextjs" /><Tag
				name="Supabase"
			/>
		</div> -->
</div>

<style lang="scss">
	.wide-col-left {
		grid-column-start: 1;
		grid-column-end: 3;
		margin: 0 0 2.5em 0;
	}
	.wide-col-right {
		grid-column-start: 3;
		grid-column-end: 5;
		margin: 0 0 2.5em 0;
	}

	@media screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			width: 80vw;
			margin: 10em auto 0 auto;
		}
		.wide-col-right {
			width: 100%;
			margin: 0 0 0 0;
		}
		.wide-col-left {
			width: 100%;
			margin: 0 0 0 0;
		}
	}

	@media only screen and (max-width: 480px) {
		main {
			width: 95vw;
			margin: 5em auto 0 auto;
		}
	}
</style>
