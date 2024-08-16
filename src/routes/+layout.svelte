<!-- +layout.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Title from '$lib/components/Title.svelte';
	import '$lib/styles/house.scss';
	export let data;
	$: layoutClass = data.currentRoute.slice(1) !== '' ? data.currentRoute.slice(1) : 'home';
</script>

<Header />

{#if layoutClass === 'lab' || layoutClass === 'blog' || layoutClass === 'projects'}
	<Title title={layoutClass} color="mauve" align="right" />
{/if}

{#key data.currentRoute}
	<!-- <div class="test">{layoutClass}</div> -->
	<main class={layoutClass} in:fade={{ duration: 200, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

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
		margin: 1em auto 0 auto;
	}
	@media screen and (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			max-width: 700px;
			margin: 1em auto 0 auto;
		}
	}
	@media screen and (max-width: 480px) {
		main {
			display: flex;
			flex-direction: column;
			max-width: 460px;
			margin: 1em auto 0 auto;
		}
	}
</style>
