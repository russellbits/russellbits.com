<script>
	// import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte'
	import Figure from '$lib/components/Figure.svelte'
	import BlogPostDateButton from './BlogPostDateButton.svelte'

	let {
		title = 'Untitled',
		slug = '',
		blogPreviewImage = 'No image available.',
		summary = 'No summary available.',
		publicationDay,
		publicationMonth,
		link = '#'
	} = $props()
</script>

<div class="post">
	<div class="preview-image">
		<div class="preview-image-date">
			<BlogPostDateButton day={publicationDay} month={publicationMonth} />
		</div>
		<div class="preview-image-figure">
			<Figure
				imgUrl={`/blog/${slug}/${blogPreviewImage}`}
				altname={title}
				caption="none"
				figClass="preview"
			/>
		</div>
	</div>
	<div class="content">
		<h2><a href={link}>{title}</a></h2>
		<!-- <p class="publicationDate">{publicationDate}</p> -->
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
		margin: 2em 0 2em 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.content {
		flex-shrink: 2;
	}
	.preview-image {
		position: relative;
		width: 250px;
		margin: -3.5em 1.2em 0 0;
	}
	.preview-image-date {
		position: relative;
		top: 35px;
		left: -30px;
		z-index: 10;
	}
	.preview-image-figure {
		z-index: 5;
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
	/*.post p.publicationDate {
		text-transform: none;
	}
	 .taglist {
		margin-top: 10px;
	} */
	@media only screen and (max-width: 768px) {
		.post {
			flex-direction: column;
		}
	}
</style>
