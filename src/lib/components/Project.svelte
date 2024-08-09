<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';

	export let title = 'Project Title';
	export let publicationDate = 'No date available';
	export let projectImage = 'https://placehold.co/500x250';
	export let summary;
	export let link = '#';
</script>

<div>
	<figure><img src={projectImage} height="480" alt={title} /></figure>
	<h2>{title}</h2>
	<p>{summary}</p>
	<Button url={link} label="see more" style="small" />
	<!-- <div class="taglist">
		<Tag name="temporary" />
	</div> -->
	<p>Published on: {publicationDate}</p>
</div>

<!--
@component
## Project
Creates a project card for the site

@example
```svelte
<Project
			title="My Project"
			project_image="images/projects/my-project-sm.png"
			desc="I designed this project."
		/>
```

### Slot props
- `title` - A single text element used in sev3eral places in the component tenplate
- `project_image` - A url for the location of the project image
- `desc` - A text description of the project.
-->

<style>
	img {
		width: auto;
		max-height: 480px;
	}
	figure {
		margin: 0 auto;
		text-align: center;
		height: 480px;
		max-height: 480px;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
