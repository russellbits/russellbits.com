<script>
	let { data } = $props()
	const bookmarks = data.bookmarks
</script>

<div class="bookmarks-container">
	<h2>Recent Bookmarks</h2>

	{#if bookmarks && bookmarks.length > 0}
		<ul class="bookmark-list">
			{#each bookmarks as bookmark}
				<li class="bookmark-item">
					<a href={bookmark.href} target="_blank" rel="noopener noreferrer">
						{bookmark.description}
					</a>
					<p class="bookmark-extended">{bookmark.extended}</p>
					<div class="bookmark-meta">
						<span class="bookmark-date">{new Date(bookmark.time).toLocaleDateString()}</span>
						{#if bookmark.tags}
							<span class="bookmark-tags">
								{bookmark.tags
									.split(' ')
									.filter((t) => t)
									.map((tag) => `#${tag}`)
									.join(' ')}
							</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No bookmarks found.</p>
	{/if}
</div>

<style>
	.bookmarks-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	h2 {
		margin-bottom: 20px;
		color: #333;
	}

	.bookmark-list {
		list-style: none;
		padding: 0;
	}

	.bookmark-item {
		margin-bottom: 24px;
		padding-bottom: 24px;
		border-bottom: 1px solid #eee;
	}

	.bookmark-item:last-child {
		border-bottom: none;
	}

	.bookmark-item a {
		font-size: 18px;
		font-weight: 500;
		color: #0066cc;
		text-decoration: none;
	}

	.bookmark-item a:hover {
		text-decoration: underline;
	}

	.bookmark-extended {
		margin: 8px 0;
		color: #666;
		font-size: 14px;
	}

	.bookmark-meta {
		display: flex;
		gap: 16px;
		font-size: 13px;
		color: #999;
	}

	.bookmark-tags {
		color: #0066cc;
	}
</style>
