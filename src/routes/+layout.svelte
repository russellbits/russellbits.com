<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@picocss/pico';
	import '$lib/styles/house.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		position: absolute;
		right: 2em;
		width: 90vw;
	}
</style>
