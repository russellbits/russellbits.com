<script>
	export let label
	export let url = undefined
	export let style = ''
	export let type = undefined
</script>

<span class="button {style}">
	{#if url}
		<a href={url}>{label}</a>
	{:else if type === 'submit'}
		<input type="submit" value={label} />
	{:else}
		<button {type}>{label}</button>
	{/if}
</span>

<!--
@component
## Button
Creates a button

@example
```svelte
```

### Slot props
- `label` - The text of the button.
- `url` - the link for the button when clicked.
- `style` - There are three button styles: fill | medium | small
-->

<style>
	span.button {
		display: block;
		color: white;
		text-align: center;
		text-transform: uppercase;
		background: rgba(28, 42, 113, 1);
		width: auto;
		padding: 8px 22px;
		margin: 1em auto;
		border: 1px solid white;
		border-radius: 30px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	span.button:hover {
		background: rgb(167, 31, 208);
	}

	span.button.fill {
		border: 1px solid purple;
	}

	span.button.medium {
		width: 160px;
	}

	span.button.medium.center {
		margin: 1em auto;
	}

	span.button.small {
		width: 130px;
	}

	a:link,
	a:visited,
	a:active,
	input[type='submit'],
	button {
		appearance: none;
		display: inline;
		font:
			15px 'Raleway',
			sans-serif;
		font-weight: 700;
		color: white;
		border: none; /* Removes border that may be causing bevel */
		box-shadow: none; /* Removes any default shadows */
		outline: none; /* Removes focus outline */
		background: none; /* Ensures background is inherited */
		padding: 0;
		margin: 2px auto;
	}
	a:hover,
	input[type='submit']:hover,
	button:hover {
		cursor: pointer;
		text-decoration: none;
	}
	/* span.readmore:first-child {
		margin-left: 0;
		margin-right: 4px;
	} */
</style>
