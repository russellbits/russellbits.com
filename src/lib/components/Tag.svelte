<script>
	export let name;
</script>

<span class="tag">{name}</span>

<style>
	span.tag {
		color: white;
		text-align: center;
		font: 18px 'Raleway', sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		background: #b339f9;
		width: auto;
		padding: 10px;
		margin: 4px;
		border: 1px solid #3b4781;
	}
	span.tag:first-child {
		margin-left: 0;
		margin-right: 4px;
	}
</style>
