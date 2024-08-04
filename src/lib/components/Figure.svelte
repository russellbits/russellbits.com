<script>
	export let url;
	export let widthx;
	export let heighty;
	export let altname;
	export let caption;
</script>

<figure>
	<img src={url} width={widthx} height={heighty} alt={altname} />
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure:nth-child(even) {
		float: left;
		max-width: 400px;
		margin: 0 1em 1em 0;
		border: 1px solid blue;
	}
	figure:nth-child(odd) {
		float: right;
		max-width: 400px;
		margin: 0 0 1em 1em;
		border: 1px solid red;
	}
	figcaption {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 0.8em;
		line-height: 1em;
	}
</style>
