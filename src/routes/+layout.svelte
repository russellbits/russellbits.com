<!-- +layout.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@picocss/pico';
	import '$lib/styles/house.scss';
	export let data;
</script>

<Header />

{#key data.currentRoute}
	<main in:fade={{ duration: 200, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<Footer />

<style lang="scss">
</style>
