<script>
	export let label;
</script>

<span class="button">{label}</span>

<style>
	span.button {
		display: block;
		color: white;
		text-align: center;
		font: 15px 'Raleway', sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		background: rgba(78, 98, 198, 1);
		width: 120px;
		height: 40px;
		padding: 10px;
		margin: 1em 0 1em 0;
		border: 1px solid rgba(30, 44, 115, 1);
		border-radius: 30px;
	}
	/* span.readmore:first-child {
		margin-left: 0;
		margin-right: 4px;
	} */
</style>
