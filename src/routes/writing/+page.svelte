<script>
	import { page } from '$app/stores'
	const slug = $page.url.pathname
	import Title from '$lib/components/Title.svelte'
	// import Figure from '$lib/components/Figure.svelte';
</script>

<article>
	<div class="header">
		<Title title="Writing" color="blue" align="right" />
	</div>

	<h5>Freelance Writer</h5>
	<h5>Specializing in Technology, Cognitive Science and Artificial Intelligence</h5>

	<h2>Publications and Articles</h2>

	<h3>Commercial Publications</h3>

	<ul>
		<li class="title">“Getting Your Best Rate”</li>
		<li>How to maximize the rate you get from your clientele.</li>
		<li><a href="https://bit.ly/43aSe9Z">Creative Party</a></li>
	</ul>

	<ul>
		<li class="title">“What Writing Taught Me About Coding”</li>
		<li>
			A discussion of the parallels between writing and coding and the importance of iteration and
			understanding the audience.
		</li>
		<li><a href="https://bit.ly/3PCFINy">Creative Party</a></li>
	</ul>

	<ul>
		<li class="title">“Data-driven Willpower“</li>
		<li>What is willpower and how can our devices help us “increase” it.</li>
		<li><a href="https://bit.ly/3KrzMmW">Banapana</a></li>
	</ul>

	<ul>
		<li class="title">“The Language User Interface (LUI)“</li>
		<li>A very early speculation on the value of an artificially intelligent command line.</li>
		<li><a href="http://banapana.com/its-thinking/the-lui-language-user-interface">Banapana</a></li>
	</ul>

	<ul>
		<li class="title">"Kickstarting Education”</li>
		<li>How Kickstarter offers real potential value to teachers and their classrooms.</li>
		<li><a href="https://bit.ly/1cxKfuw">Eduhacker article</a></li>
	</ul>

	<h3>Self-Published Articles</h3>

	<ul>
		<li class="title">"When Wrong Does Not Apply”</li>
		<li>Design is subjective; many designers in their critiques, miss this fact.</li>
		<li><a href="https://bit.ly/3PIkUEv">Medium article</a></li>
		<li>currently 25K hits</li>
	</ul>

	<ul>
		<li class="title">“To Photoshop or Not to Photoshop”</li>
		<li>
			Pixel-perfect design was never meant for web interfaces. The proliferation of new devices
			proves it.
		</li>
		<li><a href="https://bit.ly/3YqYnyk">Medium article</a></li>
		<li>currently 1.2K hits</li>
	</ul>

	<ul>
		<li class="title">“Glasshouse, Symmetry and Facial Indication”</li>
		<li>
			The design of Google glasses underestimates the subconscious value humans put on symmetry in
			faces.
		</li>
		<li><a href="https://bit.ly/3Qpfe2z">Medium article</a></li>
		<li>currently 2560 hits</li>
	</ul>

	<h3>Academic Publications</h3>
	<ul>
		<li>
			Warner, Russell, Todd Stoess, and Patrick Shafto. "Reasoning in pedagogical versus deceptive
			situations." Proceedings of the Annual Meeting of the Cognitive Science Society. Vol. 32. No.
			32. 2010.
			<a href="https://escholarship.org/uc/item/89j5x6kf">Paper</a>
			<!-- | <a href="">Citation</a> -->
		</li>
	</ul>
	<ul>
		<li>
			Warner, R.G, Shafto, P., Baker, C.L. & Tenenbaum, J.B. (2009). Abstract knowledge guides
			search and prediction in novel situations. Proceedings of the 31st annual conference of the
			Cognitive Science Society.
			<a href="https://cognitivesciencesociety.org/wp-content/uploads/2019/01/CogSci2009.pdf"
				>Paper</a
			>
			<!-- | <a href="">Citation</a> -->
		</li>
	</ul>
	<ul>
		<ul>
			<li>
				Montague, Robert, et al. "To catch a liar: The effects of truthful and deceptive testimony
				on inferential learning." Cognitive Science Society, 2011.
				<a href="https://escholarship.org/uc/item/7t67z4kh">Paper</a>
				<!-- | <a href="">Citation</a> -->
			</li>
		</ul>
	</ul>
</article>

<style type="text/css">
	article {
		color: white;
		width: 70vw;
		max-width: 140rem;
		margin: 0 auto 5em auto;
	}
	/* h1 {
      font-size: 5.61em;
      margin: 0.67em auto 0.2em auto;
    } */
	h2 {
		font-size: 4.209em;
	}
	h3 {
		font-size: 3.157em;
	}
	/* h4 {
      font-size: 2.369em;
    } */
	h5 {
		font-size: 1.777em;
		margin: 0;
		padding: 0;
	}
	ul {
		margin: 2rem 0;
		padding: 0;
		list-style-type: none;
	}
	li.title {
		font-size: 1.777em;
	}
	li {
		font-size: 1.333em;
		margin: 0;
		padding: 0;
	}
</style>
