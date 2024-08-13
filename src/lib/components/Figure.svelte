<script>
	export let imgUrl;
	// export let widthx;
	// export let heighty;
	export let altname;
	export let caption = 'none';
	export let figClass;
</script>

<figure class={`figure ${figClass}`}>
	<img src={imgUrl} alt={altname} />
	{#if caption !== 'none'}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<!--
@component
## Figure
Creates a liquid image with a caption

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
- `imgUrl` - The url for the location of the project image
- `altname` - alt attribute for the <img> tag
- `caption` - A text description of the image.
- `figClass` - normal | floater | title
-->

<style>
	figure {
		max-width: 778px;
		margin: 0 auto;
		margin-bottom: 1em;
	}
	figure img {
		width: 100%;
		height: 100%;
	}

	figure.normal {
		width: 100%;
		border: none;
	}

	figure.preview {
		width: 250px;
		max-width: 250px;
		height: 250px;
		max-height: 250px;
		margin: 0 1em 0 0;
		border: 1px solid aquamarine;
	}

	figure.preview img {
		object-fit: cover;
	}

	figure.floater {
		float: right;
	}
	figure.title {
		margin: 0;
		padding: 0;
	}
	/* figure:nth-child(even) {
		max-width: 400px;
		margin: 0 1em 1em 0;
	} */
	/* figure:nth-child(odd) {
		float: right;
		max-width: 400px;
		margin: 0 0 1em 1em;
		border: 1px solid red;
	} */
	figcaption {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 0.8em;
		line-height: 1em;
		text-align: center;
	}
	@media screen and (max-width: 768px) {
		figure {
			max-width: 738px;
			padding: 0;
			margin: 0;
		}
		figure.preview {
			width: 200px;
			max-width: 200px;
			height: 200px;
			max-height: 200px;
			margin: 0 0 0.8em 0;
			border: 1px solid aquamarine;
		}
	}

	@media only screen and (max-width: 480px) {
		figure {
			max-width: 480px;
			padding: 0;
			margin: 0;
		}
		figure.preview {
			width: 150px;
			max-width: 150px;
			height: 150px;
			max-height: 150px;
			margin: 0 0 0.8em 0;
			border: 1px solid aquamarine;
		}
	}
</style>
