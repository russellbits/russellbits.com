<script>
	export let label;
	export let url;
	export let style;
</script>

<span class="button {style}"><a href={url}>{label}</a></span>

<style>
	span.button {
		display: block;
		color: white;
		text-align: center;
		font:
			15px 'Raleway',
			sans-serif;
		text-transform: uppercase;
		font-weight: 700;
		background: rgba(28, 42, 113, 1);
		width: auto;

		padding: 10px;
		margin: 1em 0 1em 0;
		border: 1px solid rgba(30, 44, 115, 1);
		border-radius: 30px;
	}
	span.button.fill {
		border: 1px solid purple;
	}

	span.button.small {
		width: 130px;
	}

	a:link,
	a:visited,
	a:active {
		display: inline;
		font:
			15px 'Raleway',
			sans-serif;
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
