<script>
	// import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte'
	import Figure from '$lib/components/Figure.svelte'

	export let title = 'Untitled'
	export let slug = ''
	export let blogPreviewImage = 'No image available.'
	export let summary = 'No summary available.'
	export let publicationDate
	export let link = '#'
</script>

<div class="post">
	<div class="preview-image">
		<Figure
			imgUrl={`/blog/${slug}/${blogPreviewImage}`}
			altname={title}
			caption="none"
			figClass="preview"
		/>
	</div>
	<div class="content">
		<h2><a href={link}>{title}</a></h2>
		<p class="publicationDate">{publicationDate}</p>
		<p>{summary}</p>
		<Button label="read more" url={link} style="small" />
		<!-- <div class="taglist">
			<Tag name="Supabase" />
			<Tag name="HTML 5" />
			<Tag name="Javascript" />
		</div> -->
	</div>
</div>

<!--
@component
## BlogPost
Lays out a blog post summary for the blog index page

@example
```svelte
<BlogPost
	title={post.meta.title}
	summary={post.meta.summary}
	blogImage={post.meta.blogImage}
	publicationDate={post.meta.publicationDate}
	link={post.path}
/>
```

### Slot props
- `title` - Title of the post
- `slug` - Title of the post in shishkabob format
- `summary` - Summary of the post
- `blogPreviewImage` - An image that accompanies the post summary
- `publicationDate` - date of publication (from frontmatter of blog markdown)
- `link` - the path to the full blog post
-->

<style>
	.post {
		margin: 0 0 2em 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.content {
		flex-shrink: 2;
	}
	.preview-image {
		width: 250px;
		margin: 0 0.8em 0 0;
	}
	.post h2 {
		line-height: 1em;
		margin: 0;
	}
	.post h2 > a:link {
		color: white;
		font-size: 1em;
	}
	.post p {
		margin: 0;
	}
	.post p.publicationDate {
		text-transform: none;
	}
	/* .taglist {
		margin-top: 10px;
	} */
	@media only screen and (max-width: 768px) {
		.post {
			flex-direction: column;
		}
	}
</style>
