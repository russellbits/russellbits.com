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
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 16em 10em;
		padding: 0;
		border: 1px solid red;
	}
</style>
