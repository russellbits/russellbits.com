<script>
	import { page } from '$app/stores'
	const slug = $page.url.pathname
	import Title from '$lib/components/Title.svelte'
	import Figure from '$lib/components/Figure.svelte'
</script>

<article>
	<div class="header">
		<Title title="Telepathy" color="blue" align="center" />
		<h2>A Party Game Online</h2>
	</div>

	<div class="cover-image">
		<Figure
			imgUrl={`${slug}project-display-no-bkgd.png`}
			altname="Telepathy as it appears on an iphone"
			caption="none"
			figClass="inline"
		/>
	</div>

	<div class="section genesis">
		<h2>Genesis</h2>
		<p>
			I had always been a fan of the party game Telepathy. I was amazed when people succeeded at
			winning the game or even getting the same concept on the first try (even knowing that
			probablistically it has to happen). I was thinking about the game and wanting to play it on a
			message platform, but the game doesn't function as well unless the concepts arrive at the same
			time for both players. I saw an opportunity to design an online version of the game that could
			use the live synch tools of <a href="http://supabase.com/">Supabase</a> to make it happen.
		</p>

		<Figure
			imgUrl={`${slug}telepathy-screen-sequence.png`}
			altname="Six sample screenshots"
			caption="Some basic layouts fo individual screens."
			figClass="inline"
		/>
	</div>

	<div class="prototype-image">
		<Figure
			imgUrl={`${slug}telepathy-ui-flow.png`}
			altname="UI Protoype"
			caption="A more extensive look at the paths that users can take through the game."
			figClass="inline"
		/>
	</div>

	<div class="section prototype">
		<h2>Prototype</h2>

		<p>
			Once a general design aesthetic has been settled on, it's time to carry that look to every
			potential screen in the app, working screens into a logical flow. I utilize <a
				href="https://www.sketch.com">Sketch</a
			> on the Mac to create these screen designs. Sketch has a modular system for graphics built into
			it, so it is relatively easy to move from component images to component code.
		</p>
		<p>
			Moving from graphics to code can involve an intermediate step which is creating a <a
				href="https://www.figma.com/blog/design-systems-101-what-is-a-design-system/"
				>design system</a
			>. With a larger team, the design system allows for the designers on the team to make aestetic
			changes (margins, padding, font sizes) and gives developers code to copy into the build.
		</p>
	</div>

	<!-- <div class="section execution">
		<h2>Execution</h2>
	</div> -->
</article>

<style>
	article {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.6em;
		margin: 4em 0 0 0;
	}
	article .header {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
	}
	article .header h2 {
		text-align: center;
		margin: 1em 0 0 0;
	}
	article .cover-image {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 3;
	}
	article .section.genesis {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 3;
	}
	/* article .section.design {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 3;
		grid-row-end: 4;
	}
	article .design-image {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 3;
		grid-row-end: 4;
	} */
	article .prototype-image {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 4;
		grid-row-end: 5;
	}
	article .section.prototype {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 4;
		grid-row-end: 5;
	}
	/* article .section.execution {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 5;
		grid-row-end: 6;
	} */
	article p {
		text-indent: 2em;
	}
	@media only screen and (max-width: 768px) {
		article {
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 768px;
			padding: 0;
			margin: 0 0.5em;
		}
	}
	@media only screen and (max-width: 480px) {
		article {
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 480px;
			padding: 0;
			margin: 0 0.2em;
		}
	}
</style>
