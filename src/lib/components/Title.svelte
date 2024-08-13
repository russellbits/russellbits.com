<script>
	export let title = 'title';
	export let color = 'mauve';
	export let align = 'left';
</script>

<div class="title {align}">
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

<!--
@component
## Title
Creates a section title with cube graphic

@example
```svelte
<Figure
			imgUrl="/images/projects/seqseco-project-display.png"
			altname="iphone displaying the seqseco web app."
			caption="Seqseco is a sequenced timer web app."
			figClass="normal"
		/>
```

### Slot props
- `title` - The url for the location of the project image
- `color` - alt attribute for the <img> tag
- `align` - A text description of the image.

-->

<style>
	.title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.8em;
		border: 1px solid purple;
	}

	.title.left {
		justify-content: left;
	}

	.title.right {
		justify-content: right;
	}

	@media screen and (max-width: 768px) {
	}

	@media only screen and (max-width: 480px) {
	}
</style>
