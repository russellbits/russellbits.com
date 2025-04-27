<script>
	import { page } from '$app/stores'
	$: currentPath = $page.url.pathname
	export let imgUrl
	export let altname
	export let caption = 'none'
	export let figClass
</script>

<figure class={`figure ${figClass}`}>
	<code></code>
	<img src={`/images${imgUrl}`} alt={altname} />
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
	imgUrl="section/image-name.png"
	altname="A literal description."
	caption="Something more pithy than a literal description."
	figClass="normal"
/>
```

### Slot props
- `imgUrl` - The local images path and name for the location of the project image in the images directoy
- `altname` - alt attribute for the <img> tag
- `caption` - A text description of the image.
- `figClass` - normal | inline | preview | experiment | title
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
	figure.inline {
		width: 100%;
		max-width: none;
		border: none;
		margin: 1em 0;
	}

	figure.preview {
		width: 250px;
		max-width: 250px;
		height: 250px;
		max-height: 250px;
		margin: 0 1em 0 0;
		/* clip-path: polygon(87% 0, 100% 13%, 100% 100%, 14% 100%, 0 86%, 0 0);*/
	}

	figure.preview img {
		object-fit: cover;
	}

	figure.timelineWebsite {
		padding: 0;
		margin: 0;
	}

	figure.timelineWebsite img {
		/* transform: scale(0.5); */
		width: 300px;
		height: 220px;
		object-fit: cover;
		margin: 0;
	}

	figure.project {
		height: 250px;
		max-height: 250px;
		/* background-color: rgba(0, 0, 0, 0.2); */
		border-radius: 35px;
		padding: 0.8em 0;
	}

	figure.project img {
		max-height: 250px;
		object-fit: scale-down;
	}

	figure.experiment {
		max-height: 200px;
		padding: 0;
		margin: 0;
	}

	figure.experiment img {
		max-height: 200px;
		object-fit: contain;
	}

	figure.floater {
		float: right;
	}

	figure.title {
		width: 90%;
		max-width: none;
		margin: 1.6em 0 0 0;
		padding: 0;
	}
	figcaption {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 0.8em;
		line-height: 1.4em;
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
		}
		figure.project {
			max-height: 200px;
		}
		figure.project img {
			max-height: 200px;
			object-fit: scale-down;
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
		}
		figure.project {
			max-height: 150px;
		}
		figure.project img {
			max-height: 150px;
			object-fit: scale-down;
		}
	}
</style>
