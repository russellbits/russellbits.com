<script>
	export let title = 'title';
	export let color = 'mauve';
</script>

<div class="title">
	{#if color === 'mauve'}
		<div>
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Large Mauve Cube" />
		</div>
	{:else}
		<div>
			<img src="/images/cube-blue-large.png" width="65" height="65" alt="Large Blue Cube" />
		</div>
	{/if}
	<div><h1>{title}</h1></div>
</div>

<style>
	.title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: left;
		align-items: flex-start;
		gap: 0.8em;
		border: 1px solid purple;
	}
	@media screen and (max-width: 768px) {
	}

	@media only screen and (max-width: 480px) {
	}
</style>
