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
</footer>

<style lang="scss">
	footer {
		position: relative;
		bottom: 0px;
		color: white;
		text-align: center;
		width: 60%;
		margin: 1em auto;
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
</style>
