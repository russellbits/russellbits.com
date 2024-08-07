<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';

	export let title = 'Untitled';
	export let blogImage = 'No image available.';
	export let summary = 'No summary available.';
	export let publicationDate;
	export let link = '#';
</script>

<div class="post">
	<figure><img src={blogImage} alt={title} /></figure>
	<div class="content">
		<h2><a href={link}>{title}</a></h2>
		<p class="publicationDate">{publicationDate}</p>
		<p>{summary}</p>
		<Button label="read more" url={link} />
		<div class="taglist">
			<Tag name="Supabase" />
			<Tag name="HTML 5" />
			<Tag name="Javascript" />
		</div>
	</div>
</div>

<style>
	.post {
		margin: 0 0 2em 0;
		padding: 0;
		display: flex;
		flex-direction: row; /* or column */
		align-items: flex-start;
		border: 1px solid purple;
	}
	.post h2 {
		line-height: 1em;
		margin: 0;
	}
	.post p {
		margin: 0;
	}
	.post p.publicationDate {
		text-transform: uppercase;
	}
	.post figure {
		margin: 0 1em 0 0;
		width: 280px;
		height: 280px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		flex-shrink: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.taglist {
		margin-top: 10px;
	}
</style>
