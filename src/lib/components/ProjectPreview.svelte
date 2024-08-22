<script>
	// import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
	import Figure from '$lib/components/Figure.svelte';

	export let title = 'Project Title';
	export let slug = '';
	export let publicationDate = 'No date available';
	export let projectImage = 'https://placehold.co/500x250';
	export let summary;
	export let link = '#';
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
	<h2><a href={link}>{title}</a></h2>
	<p>{summary}</p>
	<p class="date">Published: {publicationDate}</p>
	<Button url={link} label="see more" style="small" />
	<!-- <div class="taglist">
		<Tag name="temporary" />
	</div> -->
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
	p.date {
		font-size: 0.7em;
	}
	h2 > a:link {
		font-size: 1.5em;
	}
	/* .taglist {
		margin-top: 10px;
	} */
</style>
