<!-- Header.svelte -->
<header>
	<a href="/">Home</a>

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
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		color: rgb(255, 255, 255);
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
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
