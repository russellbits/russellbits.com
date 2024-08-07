<script>
	import '$lib/styles/entypo.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// You can use the $page store to access the current path and other information
	$: currentPath = $page.url.pathname;

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{ label: 'Blog', href: 'blog' },
		{ label: 'Projects', href: 'projects' },
		{ label: 'Lab', href: 'lab' }
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<!-- Header.svelte -->
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

<header>
	<nav>
		<div class="inner">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={handleMobileIconClick}
				class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
				role="link"
				tabindex="0"
			>
				<div class="middle-line" />
			</div>
			<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
				<li>{currentPath}</li>
				{#each navItems as item}
					<li>
						<a class="menuitem" href={item.href}>{item.label}</a>
					</li>
				{/each}
				<li>
					<a href="contact"><i class="icon glyph-mail glyph-white" /></a>
				</li>
				<li>
					<a href="http://github.com/russellbits"><i class="icon glyph-github glyph-white" /></a>
				</li>
				<li>
					<a href="http://linkedin.com/in/russellbits"
						><i class="icon glyph-linkedin glyph-white" /></a
					>
				</li>
				<li>
					<a href="https://codepen.io/russellbits"
						><img
							class="icon"
							src="/images/icon-codepen.svg"
							width="25"
							height="25"
							alt="Codepen logo"
						/></a
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

	.logo {
		position: fixed;
		top: 20px;
		left: -50px;
		z-index: 4000;
	}

	.logo.lg {
		top: 0px;
		left: -100px;
	}

	@media (max-width: 900px) {
		#logo {
			transform: scale(0.5);
			top: -120px;
			left: -160px;
		}
	}

	.menuitem {
		font-weight: bold;
	}

	.icon {
		display: block;
		position: relative;
		top: 8px;
	}
	.glyph-github,
	.glyph-linkedin,
	.glyph-instagram {
		top: 6px;
	}

	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #424245;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;

		align-items: center;
		padding: 0 10px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}

	nav > .inner > ul > li {
		border-bottom: 4px solid rgba(1, 1, 1, 0);
		border-color: transparent;
	}

	nav > .inner > ul > li:hover {
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
