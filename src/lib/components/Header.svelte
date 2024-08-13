<script>
	// @ts-nocheck

	import '$lib/styles/entypo.css';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
	$: isVisible = false;
	$: isHamburgerOpen = true;

	// List of navigation items
	const navItems = [
		{ label: 'Blog', href: '/blog' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Lab', href: '/lab' }
	];

	function toggleMobileMenu() {
		console.log('Menu toggle activated.');
		isVisible = !isVisible;
		isHamburgerOpen = !isHamburgerOpen;
	}
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
	<nav class="menu">
		<ul>
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
	</nav>
	<!-- Begin mobile menu -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="mobile-menu-control" on:click={toggleMobileMenu}>
		<div class:open={!isHamburgerOpen} class="bar1"></div>
		<div class:open={!isHamburgerOpen} class="bar2"></div>
		<div class:open={!isHamburgerOpen} class="bar3"></div>

		<ul class:hidden={!isVisible} class="mobile-menu">
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
			<li class="icons">
				<a href="http://github.com/russellbits"><i class="glyph-github glyph-white" /></a>

				<a href="http://linkedin.com/in/russellbits"><i class="glyph-linkedin glyph-white" /></a>

				<a href="https://codepen.io/russellbits"
					><img src="/images/icon-codepen.svg" width="25" height="25" alt="Codepen logo" /></a
				>
				<a href="http://instagram.com/belovedleader"
					><i class="icon glyph-instagram glyph-white" /></a
				>
			</li>
		</ul>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		padding: 0;
		margin: 0;
		color: white;
		background: rgba(0, 0, 0, 0.5);
	}

	nav.menu {
		display: flex;
		flex-direction: row;
		justify-content: right;
		font-family: 'Raleway', sans-serif;
		font-style: bold;
		font-weight: 700;
		padding: 0;
		margin: 0 0 0 0;
		width: 100vw;
	}

	nav.menu > ul {
		display: flex;
		flex-direction: row;
		list-style-type: none;
		gap: 1em;
		margin: 0;
		padding: 0;
	}

	nav.menu > ul > li {
		margin: 0 1em 0 0;
		padding: 0;
	}

	nav.menu > ul > li > a {
		color: #fff;
		text-decoration: none;
		display: flex;
		align-items: stretch;
		padding: 18px 12px 20px 12px;
		border-bottom: 4px solid rgba(0, 0, 0, 0);
		border-color: transparent;
	}

	nav.menu > ul > li > a:hover {
		border-bottom: 4px solid white;
		transform: scale(1.2);
		transition: 0.3s;
	}

	nav.menu > ul > li > a.active {
		border-bottom: 4px solid white;
	}

	ul.mobile-menu {
		width: 100vw;
		padding: 0;
		margin: 0;
		opacity: 1;
		visibility: visible;
		transition:
			opacity 0.4s ease,
			visibility 0.4s ease,
			transform 0.4s ease;
		position: fixed; /* Fix it to the viewport */
		top: 53px;
		left: 0;
		transform: translateY(0); /* Ensure it's in place when visible */
		background-color: rgba(0, 0, 0, 0.5);
	}

	ul.mobile-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	ul.mobile-menu > li {
		text-align: center;
		width: 100%;
		padding: 10px;
		margin: 0;
		border-bottom: 1px solid white;
	}

	ul.mobile-menu > li.icons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	ul.mobile-menu > li > a {
		font-family: 'Raleway', sans-serif;
		font-style: bold;
		font-weight: 700;
		height: 25px;
		color: white;
		padding: 5px;
	}

	ul.mobile-menu > li > a:hover {
		text-decoration: none;
	}

	ul.mobile-menu.hidden {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-100%); /* Move it off-screen */
	}

	#mobile-menu-control {
		display: none;
		flex-direction: column;
		align-items: flex-end; /* Aligns the bars to the right */
		margin: 0;
		padding: 10px;
		cursor: pointer;
		border: 1px solid lawngreen;
	}

	#mobile-menu-control div {
		display: block;
		width: 35px;
		height: 3px;
		background-color: white;
		margin: 4px 0;
		transition: 0.4s;
	}

	.bar1.open {
		-webkit-transform: rotate(-45deg) translate(-8px, 8px);
		transform: rotate(-45deg) translate(-8px, 8px);
	}

	.bar2.open {
		opacity: 0;
	}

	.bar3.open {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}

	@media only screen and (max-width: 1020px) {
		nav.menu > ul {
			gap: 0.5em;
		}
		nav.menu > ul > li {
			margin: 0 0 0 0;
			padding: 0;
		}
		nav.menu > ul > li:last-child {
			margin: 0 1em 0 0;
			padding: 0;
		}
	}

	@media only screen and (max-width: 768px) {
		nav.menu {
			display: none;
		}

		#mobile-menu-control {
			display: flex;
		}
	}

	@media only screen and (max-width: 480px) {
		#mobile-menu-control {
			display: flex;
		}
	}
</style>
