<script>
	// @ts-nocheck
	import Figure from '$lib/components/Figure.svelte'
	import Tag from '$lib/components/Tag.svelte'

	let {
		title = 'Timeline Item Title',
		projectImage = 'https://placehold.co/582x379',
		caption = 'No caption available.',
		tags = [],
		link = '#',
		date = '0000-00-00'
	} = $props()
</script>

<div class="timelineItem">
	<div>
		<a href={link}
			><Figure
				imgUrl={`/timeline/${projectImage}`}
				altname={title}
				caption="none"
				figClass="timelineWebsite"
			/></a
		>
	</div>
	<div>
		<h2>{title}</h2>
		<p class="caption">{caption}</p>
		<p class="date">{date}</p>
		<div class="taglist">
			{#each tags as tag}
				<Tag name={tag} />
			{/each}
		</div>
	</div>
</div>

<!--
@component
## Timeline
Creates a timeline card for the site

@example
```svelte
<TimelinePreview
	title={project.meta.title}
	summary={project.meta.summary}
	publicationDate={project.meta.date}
	projectImage={project.meta.projectImage}
	link={project.path}
	tags={project.meta.tags}
/>
```

### Slot props
- `title` - A single text element used in several places in the component tenplate
- `summary` - A single sentence descibing the project
- `publicationDate` - Date that the project portfolio was published
- `projectImage` - A url for the location of the project image
- `link` - path to the project page
-->

<style>
	/* p.date {
		font-size: 0.7em;
	} */
	.timelineItem {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		width: 40vw;
		margin-left: 10vw;
	}
	.timelineItem > div {
		border: 1px solid greenyellow;
	}
	h2 {
		font-family: 'Raleway', sans-serif;
		font-size: 1em;
		font-style: bold;
		font-weight: 700;
		line-height: 1.2em;
		margin-bottom: 0.6em;
	}
	p.caption {
		line-height: 1.2em;
		margin-bottom: 0.6em;
	}
	.taglist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	@media only screen and (max-width: 768px) {
	}

	@media screen and (max-width: 480px) {
		h2 {
			margin: 0.6em 0;
		}
		.caption {
			display: none;
		}
	}
</style>
