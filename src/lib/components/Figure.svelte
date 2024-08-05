<script>
	export let url;
	export let widthx;
	// export let heighty;
	export let altname;
	export let caption;
	export let figClass;
</script>

<figure class={figClass}>
	<img src={url} width={widthx} alt={altname} />
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure.normal {
		border: none;
	}
	figure.floater {
		float: right;
	}
	figure:nth-child(even) {
		max-width: 400px;
		margin: 0 1em 1em 0;
	}
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
	}
</style>
