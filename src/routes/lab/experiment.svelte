<!-- experiment.svelte -->
<script>
	export let title;
	export let date;
</script>

<svelte:head>
	<title>Russellbits Lab | {title}</title>
	<meta property="og:title" content={title} />
	<meta name="date" content={date} />
</svelte:head>

<article class="markdown" style="width:100vw;">
	<slot />
</article>

<style lang="scss"></style>
