<script>
	import '$lib/styles/entypo.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// You can use the $page store to access the current path and other information
	$: currentPath = $page.url.pathname;

	// List of navigation items
	const navItems = [
		{ label: 'Blog', href: '/blog' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Lab', href: '/lab' }
	];
</script>

<!-- Logo -->
{#if currentPath !== '/'}
	<div class="logo">
		<a href="/">
			<img src="/images/russellbits-logo-md.png" width="300" height="300" alt="Russellbits Logo" />
		</a>
	</div>
{:else}
	<div class="logo lg">
		<a href="/">
			<img src="/images/russellbits-logo-lg.png" width="500" height="500" alt="Russellbits Logo" />
		</a>
	</div>
{/if}

<!-- Header.svelte -->
<header>
	<nav>
		<div>
			<ul class="navbar">
				<!-- Debugging: <li>{currentPath}</li> -->
				{#each navItems as item}
					<li>
						<a
							data-sveltekit-prefetch
							class:active={item.href !== '/'
								? currentPath.match(item.href)
								: item.href === currentPath}
							href={item.href}>{item.label}</a
						>
					</li>
				{/each}
				<!-- Uncomment contact icon when contact page is functional -->
				<!-- <li>
					<a href="/contact"><i class="icon glyph-mail glyph-white" /></a>
				</li> -->
				<li>
					<a href="http://github.com/russellbits"><i class="glyph-github glyph-white" /></a>
				</li>
				<li>
					<a href="http://linkedin.com/in/russellbits"><i class="glyph-linkedin glyph-white" /></a>
				</li>
				<li>
					<a href="https://codepen.io/russellbits"
						><img src="/images/icon-codepen.svg" width="25" height="25" alt="Codepen logo" /></a
					>
				</li>
				<li>
					<a href="http://instagram.com/belovedleader"
						><i class="icon glyph-instagram glyph-white" /></a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		padding: 0;
		margin: 0;
		color: white;
		background: rgba(0, 0, 0, 0.5);
	}

	nav {
		display: flex;
		justify-content: right;
		font-family: 'Raleway', sans-serif;
		font-style: bold;
		font-weight: 700;
		padding: 0;
		margin: 0 0 0 0;
	}

	ul.navbar {
		display: flex;
		width: 100%;
		justify-content: space-between;
		list-style-type: none;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	ul.navbar > li {
		margin: 0 1em 0 0;
		padding: 0;
	}

	ul.navbar > li > a {
		color: #fff;
		text-decoration: none;
		display: flex;
		align-items: stretch;
		padding: 18px 12px 20px 12px;
		border-bottom: 4px solid rgba(0, 0, 0, 0);
		border-color: transparent;
	}

	ul.navbar > li > a:hover {
		border-bottom: 4px solid white;
	}

	ul.navbar > li > a.active {
		border-bottom: 4px solid white;
	}
</style>
