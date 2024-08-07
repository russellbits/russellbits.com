<script>
	export let label;
	export let url;
</script>

<span class="button"><a href={url}>{label}</a></span>

<style>
	span.button {
		display: block;
		color: white;
		text-align: center;
		font: 15px 'Raleway', sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		background: rgba(28, 42, 113, 1);
		width: 120px;
		height: 40px;
		padding: 10px;
		margin: 1em 0 1em 0;
		border: 1px solid rgba(30, 44, 115, 1);
		border-radius: 30px;
	}
	a:link,
	a:visited,
	a:active {
		display: inline;
		font: 15px 'Raleway', sans-serif;
		color: white;
	}
	a:hover {
		text-decoration: none;
	}
	/* span.readmore:first-child {
		margin-left: 0;
		margin-right: 4px;
	} */
</style>
