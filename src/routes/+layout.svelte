<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@picocss/pico';
	import '$lib/styles/house.scss';
</script>

<Header />

<slot />

<Footer />

<style lang="scss">
</style>
