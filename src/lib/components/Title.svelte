<script>
	import { page } from '$app/state'
	const currentPath = $derived(page.url.pathname)
	let {
		title = 'title',
		color = 'mauve',
		align = 'left',
		link = 'false',
		topMargin = ''
	} = $props()
</script>

<div class="title {align} {topMargin}">
	{#if color === 'mauve'}
		<div>
			<img src="/images/cube-mauve-large.png" width="65" height="65" alt="Large Mauve Cube" />
		</div>
	{:else}
		<div>
			<img src="/images/cube-blue-large.png" width="65" height="65" alt="Large Blue Cube" />
		</div>
	{/if}
	{#if link !== 'false'}
		<div><h1><a href={link}>{title}</a></h1></div>
	{:else}
		<div><h1>{title}</h1></div>
	{/if}
</div>

<!--
@component
## Title
Creates a section title with cube graphic

@example
```svelte
<Title
	title="Project: Seqseco"
	color="blue"
	align="left"
	link="/projects/seqseco" />
```
### Slot props
- `title` - The url for the location of the project image
- `color` - alt attribute for the <img> tag
- `align` - A text description of the image.
- `link` - an optional prop that by default is set to false. Creates link around title.

-->

<style>
	.title {
		text-transform: capitalize;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.8em;
		width: 100%;
		padding: 0;
		margin: 5em auto 0 auto;
	}

	.title.noTopMargin {
		margin: 0 auto;
	}

	.title h1 a {
		font-family: 'Raleway', sans-serif;
		font-size: 1em;
		font-weight: 600;
		color: white;
		padding: 0;
		margin: 0;
	}

	.title.left {
		justify-content: left;
	}

	.title.right {
		justify-content: right;
	}

	.title.right h1 {
		padding: 0 2em 0 0;
	}

	.title.center {
		justify-content: center;
	}

	.title.home {
		justify-content: left;
	}

	@media screen and (max-width: 768px) {
		.title.home {
			justify-content: right;
		}
	}

	@media only screen and (max-width: 480px) {
		.title.home {
			justify-content: right;
		}
	}
</style>
