<!-- +layout.svelte -->
<script>
	import { fade } from 'svelte/transition'
	import { onMount, onDestroy } from 'svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import ParallaxLayer from '$lib/components/ParallaxLayer.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Title from '$lib/components/Title.svelte'
	import '$lib/styles/house.scss'
	import { page } from '$app/stores'
	// import Saos from 'saos'

	export let data

	let scaleFactor = 1 // Default scale (500x500)
	let translateXFactor = 0 // Default position (no translation)
	let pageWidth = 0
	let pageHeight = 0

	const handleScroll = () => {
		let scrollY = window.scrollY
		const maxScroll = 200 // Maximum scroll value to reach the smallest size

		// Clamp scrollY between 0 and maxScroll to prevent excessive shrinking
		scrollY = Math.min(scrollY, maxScroll)

		// Calculate scale based on scrollY (linear interpolation)
		// Scales between 1 (100%) and 0.6 (60%)
		scaleFactor = 1 - (scrollY / maxScroll) * 0.4
		// Translate left by up to -60px
		translateXFactor = (scrollY / maxScroll) * 60
	}

	onMount(() => {
		pageWidth = window.innerWidth
		pageHeight = document.documentElement.scrollHeight
		window.addEventListener('scroll', handleScroll)
	})

	// onDestroy(() => {
	// 	window.removeEventListener('scroll', handleScroll)
	// })

	$: currentPath = $page.url.pathname
	$: layoutClass =
		data.currentRoute.slice(1) !== '' ? data.currentRoute.slice(1).replace(/\/$/, '') : 'home'
</script>

<!-- Logo -->
{#if currentPath !== '/'}
	<div class="logo small">
		<a href="/">
			<img src="/images/russellbits-logo-lg.png" alt="Russellbits Logo" />
		</a>
	</div>
{:else}
	<div class="logo" style="transform: scale({scaleFactor}) translateX({translateXFactor}px);">
		<a href="/">
			<img src="/images/russellbits-logo-lg.png" alt="Russellbits Logo" />
		</a>
	</div>
{/if}

<Navigation />

<!-- why does lab sometimes contain a '/'? -->
{#if layoutClass === 'lab' || layoutClass === 'lab/' || layoutClass === 'blog' || layoutClass === 'projects'}
	<Title title={layoutClass} color="mauve" align="right" />
{/if}

{#key data.currentRoute}
	<!-- <div class="test">{layoutClass}</div> -->
	<main class={layoutClass} in:fade={{ duration: 400, delay: 150 }} out:fade={{ duration: 250 }}>
		<slot />
	</main>
{/key}

<!-- <ParallaxLayer {pageHeight} {pageWidth} /> -->

<Footer />

<style lang="scss">
	.test {
		position: absolute;
		bottom: 0;
		right: 0;
		text-align: right;
		color: white;
		background-color: black;
		width: 60px;
		height: 20px;
	}

	main {
		display: grid;
		width: 80vw;
		max-width: 80vw;
		margin: 2em auto 0 auto;
		z-index: 1000;
	}
	main.home {
		grid-template-columns: 40vw 40vw;
		column-gap: 1em;
		row-gap: 4em;
	}
	main.projects {
		grid-template-columns: 50% 50%;
		gap: 1em;
		align-items: space-between;
		justify-content: space-between;
	}
	main.blog {
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		column-gap: 2em;
	}
	main.lab {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		align-items: space-between;
		justify-content: space-between;
		gap: 20px;
		margin: 1em auto;
	}
	.logo {
		position: fixed;
		top: 0px;
		left: -100px;
		z-index: 1000;
		transform-origin: top left; /* Ensures smooth scaling */
		transition: transform 0.1s linear; /* Smooth scaling */
	}

	// .logo.large {
	// 	transform: scale(1); /* Default size (500px) */
	// }

	/* Default size for non-home pages */
	.logo.small {
		transform: scale(0.6) translateX(60px); /* 300px / 500px = 0.6 scale factor */
	}

	// .logo.large {
	// 	top: 0px;
	// 	left: -100px;
	// 	z-index: 1000;
	// }

	@media screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			max-width: 700px;
			margin: 1em auto 0 auto;
			z-index: 1000;
		}
		// .logo {
		// 	position: absolute;
		// 	top: -30px;
		// 	left: -80px;
		// 	z-index: 1000;
		// 	transform: scale(0.8);
		// }
		// .logo.lg {
		// 	position: absolute;
		// 	top: -95px;
		// 	left: -160px;
		// 	z-index: 1000;
		// 	transform: scale(0.6);
		// }
	}

	@media screen and (max-width: 480px) {
		main {
			display: flex;
			flex-direction: column;
			max-width: 460px;
			margin: 1em auto 0 auto;
			z-index: 1000;
		}
		.logo {
			position: absolute;
			top: -75px;
			left: -105px;
			z-index: 100;
			transform: scale(0.5);
		}
		.logo.lg {
			position: absolute;
			top: -175px;
			left: -205px;
			z-index: 100;
		}
	}
	@keyframes -global-shrink {
		0% {
			transform: scale(0.5);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>
