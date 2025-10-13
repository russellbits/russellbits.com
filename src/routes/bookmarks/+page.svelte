<!-- src/routes/bookmarks/+page.svelte -->
<script>
	import Bookmarks from '$lib/components/Bookmarks.svelte'
	let { data } = $props()
</script>

<Bookmarks {data} />
