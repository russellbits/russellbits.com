<script>
	let { data } = $props()
	const bookmarks = data?.bookmarks || []
</script>

<div class="bookmarks">
	<h1>Bookmarks</h1>
	{#if bookmarks.length > 0}
		<ul>
			{#each bookmarks as bookmark}
				<li>
					<a href={bookmark.href} target="_blank" rel="noopener noreferrer">
						{bookmark.description}
					</a>
					{#if bookmark.extended}
						<p>{bookmark.extended}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No bookmarks found.</p>
	{/if}
</div>

<style>
	.bookmarks {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		margin-bottom: 1rem;
	}
</style>
