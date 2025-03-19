<script>
	// @ts-nocheck

	import '$lib/styles/entypo.css'
	import { page } from '$app/stores'
	import iconCodepen from '$lib/assets/icon-codepen.svg'

	$: currentPath = $page.url.pathname
	$: isVisible = false
	$: isHamburgerOpen = true

	// List of navigation items
	const navItems = [
		{ label: 'Projects', href: '/projects' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Lab', href: '/lab' }
	]

	function toggleMobileMenu() {
		console.log('Menu toggle activated.')
		isVisible = !isVisible
		isHamburgerOpen = !isHamburgerOpen
	}
</script>

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
			<li>
				<span tooltip="Send me a message!" flow="down"
					><a href="/contact"><i class="icon glyph-mail glyph-white" /></a></span
				>
			</li>
			<li>
				<span tooltip="See my code" flow="down"
					><a href="http://github.com/russellbits"><i class="glyph-github glyph-white" /></a></span
				>
			</li>
			<li>
				<span tooltip="Network me" flow="down"
					><a href="http://linkedin.com/in/russellbits"><i class="glyph-linkedin glyph-white" /></a
					></span
				>
			</li>
			<li>
				<span tooltip="See my experiments" flow="down"
					><a href="https://codepen.io/russellbits"
						><img src={iconCodepen} width="25" height="25" alt="Codepen logo" /></a
					></span
				>
			</li>
			<li>
				<span tooltip="See my pictures" flow="down">
					<a href="http://instagram.com/belovedleader"
						><i class="icon glyph-instagram glyph-white" /></a
					></span
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
					><img src={iconCodepen} width="25" height="25" alt="Codepen logo" /></a
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
		z-index: 100;
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

	nav.menu > ul > li > a,
	nav.menu > ul > li > span > a {
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

	ul.mobile-menu > li > span > a {
		font-family: 'Raleway', sans-serif;
		font-style: bold;
		font-weight: 700;
		height: 25px;
		color: white;
		padding: 5px;
	}

	ul.mobile-menu > li > span > a:hover {
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
	/* START TOOLTIP STYLES */
	[tooltip] {
		position: relative; /* opinion 1 */
	}

	/* Applies to all tooltips */
	[tooltip]::before,
	[tooltip]::after {
		text-transform: none; /* opinion 2 */
		font-size: 0.9em; /* opinion 3 */
		line-height: 1;
		user-select: none;
		pointer-events: none;
		position: absolute;
		display: none;
		opacity: 0;
	}
	[tooltip]::before {
		content: '';
		border: 5px solid transparent; /* opinion 4 */
		z-index: 1001; /* absurdity 1 */
	}
	[tooltip]::after {
		content: attr(tooltip); /* magic! */

		/* most of the rest of this is opinion */
		font-family: Helvetica, sans-serif;
		text-align: center;

		/* 
    Let the content set the size of the tooltips 
    but this will also keep them from being obnoxious
    */
		min-width: 3em;
		max-width: 21em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 1ch 1.5ch;
		border-radius: 0.3ch;
		box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
		background: #333;
		color: #fff;
		z-index: 1000; /* absurdity 2 */
	}

	/* Make the tooltips respond to hover */
	[tooltip]:hover::before,
	[tooltip]:hover::after {
		display: block;
	}

	/* don't show empty tooltips */
	[tooltip='']::before,
	[tooltip='']::after {
		display: none !important;
	}

	/* FLOW: UP */
	[tooltip]:not([flow])::before,
	[tooltip][flow^='up']::before {
		bottom: 100%;
		border-bottom-width: 0;
		border-top-color: #333;
	}
	[tooltip]:not([flow])::after,
	[tooltip][flow^='up']::after {
		bottom: calc(100% + 5px);
	}
	[tooltip]:not([flow])::before,
	[tooltip]:not([flow])::after,
	[tooltip][flow^='up']::before,
	[tooltip][flow^='up']::after {
		left: 50%;
		transform: translate(-50%, -0.5em);
	}

	/* FLOW: DOWN */
	[tooltip][flow^='down']::before {
		top: 100%;
		border-top-width: 0;
		border-bottom-color: #333;
	}
	[tooltip][flow^='down']::after {
		top: calc(100% + 5px);
	}
	[tooltip][flow^='down']::before,
	[tooltip][flow^='down']::after {
		left: 50%;
		transform: translate(-50%, 0.5em);
	}

	/* FLOW: LEFT */
	[tooltip][flow^='left']::before {
		top: 50%;
		border-right-width: 0;
		border-left-color: #333;
		left: calc(0em - 5px);
		transform: translate(-0.5em, -50%);
	}
	[tooltip][flow^='left']::after {
		top: 50%;
		right: calc(100% + 5px);
		transform: translate(-0.5em, -50%);
	}

	/* FLOW: RIGHT */
	[tooltip][flow^='right']::before {
		top: 50%;
		border-left-width: 0;
		border-right-color: #333;
		right: calc(0em - 5px);
		transform: translate(0.5em, -50%);
	}
	[tooltip][flow^='right']::after {
		top: 50%;
		left: calc(100% + 5px);
		transform: translate(0.5em, -50%);
	}

	/* KEYFRAMES */
	@keyframes tooltips-vert {
		to {
			opacity: 0.9;
			transform: translate(-50%, 0);
		}
	}

	@keyframes tooltips-horz {
		to {
			opacity: 0.9;
			transform: translate(0, -50%);
		}
	}

	/* FX All The Things */
	[tooltip]:not([flow]):hover::before,
	[tooltip]:not([flow]):hover::after,
	[tooltip][flow^='up']:hover::before,
	[tooltip][flow^='up']:hover::after,
	[tooltip][flow^='down']:hover::before,
	[tooltip][flow^='down']:hover::after {
		animation: tooltips-vert 300ms ease-out forwards;
	}

	[tooltip][flow^='left']:hover::before,
	[tooltip][flow^='left']:hover::after,
	[tooltip][flow^='right']:hover::before,
	[tooltip][flow^='right']:hover::after {
		animation: tooltips-horz 300ms ease-out forwards;
	}
</style>
