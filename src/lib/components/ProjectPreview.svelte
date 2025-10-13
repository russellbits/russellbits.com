<script>
	// @ts-nocheck
	// import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte'
	import Figure from '$lib/components/Figure.svelte'
	import Tag from '$lib/components/Tag.svelte'

	let {
		title = 'Project Title',
		slug = '',
		// export let publicationDate = 'No date available';
		projectImage = 'https://placehold.co/582x379',
		caption = 'No caption available.',
		tags = [],
		link = '#'
	} = $props()
</script>

<div>
	<a href={link}
		><Figure
			imgUrl={`/projects${slug}/${projectImage}`}
			altname={title}
			caption="none"
			figClass="project"
		/></a
	>
	<div class="content">
		<h2><a href={link}>{title}</a></h2>
		<p class="caption">{caption}</p>
		<!-- <p class="date">Published: {publicationDate}</p> -->
		<div class="taglist">
			{#each tags as tag}
				<Tag name={tag} />
			{/each}
		</div>
		<div class="readMoreBtn">
			<Button url={link} label="see more" style="small" />
		</div>
	</div>
</div>

<!--
@component
## Project
Creates a project card for the site

@example
```svelte
<ProjectPreview
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
	h2 {
		font-family: 'Raleway', sans-serif;
		font-style: bold;
		font-weight: 700;
		line-height: 1.2em;
		margin-top: -1em;
		margin-bottom: 0.6em;
	}
	h2 > a:link {
		font-size: 1.3em;
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

	.readMoreBtn {
		align-self: left;
		justify-self: left;
	}
	@media only screen and (max-width: 768px) {
	}
	@media screen and (max-width: 480px) {
		h2 {
			margin: 0.6em 0;
		}
		h2 > a:link {
			font-size: 1.3em;
		}
		.caption {
			display: none;
		}
	}
</style>
