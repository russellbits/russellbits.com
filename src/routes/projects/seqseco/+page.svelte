<script>
	import Figure from '$lib/components/Figure.svelte';
</script>

<article>
	<h1>Seqseco: A Product Design Story</h1>

	<h2>Genesis</h2>

	<p>
		Many of us are famliar with a workout in which you engage in some acitivty for x minutes and
		then rest for y minutes, perhaps switching to a second activity for x minutes followed by a rest
		period for y minutes. I engage in this kind of workout and found it was too difficult to set and
		reset a timer during the workout. What I felt was needed was a sequence of timers in which timer
		A, when finished, sets off timer B and so forth. With that simple idea in mind, I began
		sketching concepts.
	</p>

	<Figure
		imgUrl="/images/projects/seqseco/seqseco-design-step-1.jpg"
		altname="Designing the UI on paper"
		caption="Sketching on paper allows for the rapid iteration of ideas."
		figClass="normal"
	/>

	<Figure
		imgUrl="/images/projects/seqseco/seqseco-design-step-2.jpg"
		altname="Paper Mock-ups"
		caption="With some solid ideas, it can be useful to create a paper mock-up."
		figClass="normal"
	/>

	<h2>Design</h2>

	<p>
		With several conceptual drafts worked out, I can begin to see what components might be useful,
		what framing devices might be useful, what controls will be needed and what settings as well.
		For instance, while drafting this particular web app, it occurred to me that a useful modal
		state would be one in which the timer automatically sets off the next timer, or finishes and
		waits for the user to press a "next" modal button. It's at this stage that it's useful to move
		to the computer and begin drafting.
	</p>

	<Figure
		imgUrl="/images/projects/seqseco/seqseco-design-step-3.jpg"
		altname="Design Drafts"
		caption="Iterations in the design phase should move toward good UI practices and aim for clarity."
		figClass="normal"
	/>
	<h2>Prototype</h2>

	<p>
		Once a general design aesthetic has been settled on, it's time to carry that to every potential
		screen in the app.
	</p>

	<Figure
		imgUrl="/images/projects/seqseco/seqseco-design-step-4.jpg"
		altname="UI Protoype"
		caption="There are many ways to prototype, but by laying out any potential screens, this can easily identify repeating elements (components) and translate into a design system."
		figClass="normal"
	/>

	<h2>Execution</h2>
</article>

<style>
	article {
		width: 778px;
		margin: 10em auto 0 auto;
		background-color: none;
		/* Need to find where these variables exist */
		--card-background-color: none;
		--card-box-shadow: none;
	}
	article p {
		text-indent: 2em;
	}
	section {
		display: flex;
		flex-direction: row;
		gap: 1em;
	}
	div.flex-item {
		flex: 1 1 50%;
	}
</style>
