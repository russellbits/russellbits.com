<script>
	import { page } from '$app/stores'

	// List of navigation items
	const navItems = [
		{ label: 'Projects', href: '/projects' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Lab', href: '/lab' }
	]

	$: currentPath = $page.url.pathname
</script>

<footer>
	<div>
		{#each navItems as item}
			<a
				data-sveltekit-prefetch
				class:active={item.href !== '/' ? currentPath.match(item.href) : item.href === currentPath}
				href={item.href}>{item.label}</a
			>
			&nbsp;|&nbsp;
		{/each}

		Made with &#128150; and <a href="https://kit.svelte.dev">Sveltekit</a>. &copy; Russell Warner
		2024.
	</div>
	<div class="navFooter">
		<h2>Other sites you may like:</h2>
		<div class="properties">
			<div class="property">
				<h3>Banapana</h3>
				<p>A Blog: Your Mind on Media</p>
				<ul>
					<li><a href="https://banapana.com">Home</a></li>
					<li><a href="https://bit.ly/bpnstck">On Substack</a></li>
					<li><a href="https://bit.ly/bpnmedium">On Medium</a></li>
				</ul>
			</div>
			<div class="property">
				<h3>Nicolle Bradford Plays</h3>
				<p>Hype Instigator</p>
				<ul>
					<li><a href="https://nicollebradfordplays.com/">Home</a></li>
					<li><a href="https://www.ebay.com/usr/mymammasaid">My Mama Said Shop</a></li>
					<!-- <li><a href="https://nicollebradfordplays.com/">John's Cat Pet Sitting</a></li> -->
				</ul>
			</div>
			<div class="property">
				<h3>Whatnow.is</h3>
				<p>We create digtial infrastructure</p>
				<ul>
					<li><a href="https://whatnow.is/">Home</a></li>
					<li><a href="https://whatnow.is/contact/">Let's Chat</a></li>
				</ul>
			</div>
			<div class="property">
				<h3>Brother Dustfish</h3>
				<p>A novel about a strange child</p>
				<ul>
					<li><a href="https://brotherdustfish.com">Download the book so far</a></li>
					<!-- <li>Read the book so far</li> -->
					<!-- <li>Sign up for news</li> -->
				</ul>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
		bottom: 0px;
		color: white;
		text-align: center;
		width: 100%;
		margin: 0 auto;
		margin-top: 1em;
	}
	a:link,
	a:visited,
	a:active {
		padding: 0;
		margin: 0;
		text-decoration: none;
		color: rgb(219, 157, 255);
	}
	a:hover {
		text-decoration: underline;
	}
	.navFooter {
		color: white;
		background-color: black;
		width: 100%;
		margin: 0 auto;
		margin-top: 1em;
		padding: 1.4em;
	}
	.navFooter h2 {
		font-weight: 100;
		margin-bottom: 0.6em;
	}
	.properties {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.property {
		text-align: left;
		margin: 0;
		padding: 0;
	}
	.property h3 {
		font-size: 1.5em;
		margin: 0;
		padding: 0;
	}
	.property p {
		font-style: italic;
		line-height: 1.2em;
		padding: 0.6em 0;
	}
	.property ul {
		margin: 0;
		padding: 0;
	}

	.property li {
		list-style-type: none;
		padding-bottom: 0.3em;
	}
</style>
