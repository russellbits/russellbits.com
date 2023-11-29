<script>
	import '$lib/styles/entypo.css';
</script>

<!-- Header.svelte -->
<div id="logo">
	<a href="/">
		<img src="/images/russellbits-logo.png" width="500" height="500" alt="Russellbits Logo" />
	</a>
</div>

<header>
	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/lab">Lab</a>
			</li>
			<li>
				<a href="http://pinterest.com/belovedleader"><i class="glyph-pinterest glyph-white" /></a>
			</li>
			<li><a href="http://github.com/russellbits"><i class="glyph-github glyph-white" /></a></li>
			<li>
				<a href="http://instagram.com/belovedleader"><i class="glyph-instagram glyph-white" /></a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		font-family: 'Raleway', sans-serif;
		font-style: black;
		font-weight: 900;
		padding: 0.3rem;
		padding-bottom: 0em;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	nav > ul > li {
		border-bottom: 4px solid white;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
