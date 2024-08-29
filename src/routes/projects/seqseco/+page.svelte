<script>
	import { page } from '$app/stores'
	const slug = $page.url.pathname
	import Title from '$lib/components/Title.svelte'
	import Figure from '$lib/components/Figure.svelte'
</script>

<article>
	<div class="header">
		<Title title="Seqseco: A Product Design Story" color="blue" align="right" />
	</div>

	<div class="cover-image">
		<Figure
			imgUrl={`${slug}project-display.png`}
			altname="Seqseco as it appears on an iphone"
			caption="none"
			figClass="inline"
		/>
	</div>

	<div class="section genesis">
		<h2>Genesis</h2>
		<p>
			Many of us are famliar with a workout in which you engage in some acitivty for x minutes and
			then rest for y minutes, perhaps switching to a second activity for x minutes followed by a
			rest period for y minutes. I engage in this kind of workout and found it was too difficult to
			set and reset a timer during the workout. What I felt was needed was a sequence of timers in
			which timer A, when finished, sets off timer B and so forth. With that simple idea in mind, I
			began sketching concepts.
		</p>

		<Figure
			imgUrl={`${slug}design-step-1.jpg`}
			altname="Designing the UI on paper"
			caption="Sketching on paper allows for the rapid iteration of ideas."
			figClass="inline"
		/>
	</div>

	<div class="section design-image">
		<Figure
			imgUrl={`${slug}design-step-2.jpg`}
			altname="Paper Mock-ups"
			caption="With some solid ideas, it can be useful to create a paper mock-up."
			figClass="inline"
		/>
	</div>

	<div class="section design">
		<h2>Design</h2>

		<p>
			With several conceptual drafts worked out, I can begin to see what components might be useful,
			what framing devices might be useful, what controls will be needed and what settings as well.
			For instance, while drafting this particular web app, it occurred to me that two useful states
			would be one in which the timer automatically sets off the next timer, or finishes and waits
			for the user to press a "next" button—definitely a setting. It's at this stage that it's
			useful to move to the computer and begin drafting.
		</p>

		<Figure
			imgUrl={`${slug}design-step-3.jpg`}
			altname="Design Drafts"
			caption="Iterations in the design phase should move toward good UI practices and aim for increased clarity."
			figClass="inline"
		/>
	</div>

	<div class="prototype-image">
		<Figure
			imgUrl={`${slug}design-step-4.jpg`}
			altname="UI Protoype"
			caption="There are many ways to prototype, but by laying out any potential screens, this can easily identify repeating elements (components) and translate into a design system."
			figClass="inline"
		/>
	</div>

	<div class="section prototype">
		<h2>Prototype</h2>

		<p>
			Once a general design aesthetic has been settled on, it's time to carry that look to every
			potential screen in the app. I utilize <a href="https://www.sketch.com">Sketch</a> on the Mac to
			create these screen designs. Sketch has a modular system for graphics built into it, so it is relatively
			easy to move from component images to component code.
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
	}
	article .header {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
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
	article .section.design {
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
	}
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
