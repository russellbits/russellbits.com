<script>
	import Tag from '$lib/components/Tag.svelte';

	export let title = 'Project Title';
	export let project_image = 'images/';
	export let desc;
</script>

<div>
	<figure><img src={project_image} height="480" alt={title} /></figure>
	<h2>{title}</h2>
	<p>{desc}</p>
	<div class="taglist">
		<Tag name="temporary" />
	</div>
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
		max-width: 100%;
		max-height: 480px;
	}
	figure {
		margin: 0 auto;
		border: 1px solid purple;
		text-align: center;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
