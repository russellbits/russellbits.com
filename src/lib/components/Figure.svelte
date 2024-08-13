<script>
	export let url;
	// export let widthx;
	// export let heighty;
	export let altname;
	export let caption;
	export let figClass;
</script>

<figure class={figClass}>
	<img src={url} alt={altname} />
	<figcaption>{caption}</figcaption>
</figure>

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
	figure.floater {
		float: right;
	}
	figure.title {
		margin: 0;
		padding: 0;
	}
	/* figure:nth-child(even) {
		max-width: 400px;
		margin: 0 1em 1em 0;
	} */
	/* figure:nth-child(odd) {
		float: right;
		max-width: 400px;
		margin: 0 0 1em 1em;
		border: 1px solid red;
	} */
	figcaption {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 0.8em;
		line-height: 1em;
		text-align: center;
	}
	@media screen and (max-width: 768px) {
		figure {
			max-width: 738px;
			padding: 0;
			margin: 0;
		}
	}

	@media only screen and (max-width: 480px) {
		figure {
			max-width: 480px;
			padding: 0;
			margin: 0;
		}
	}
</style>
