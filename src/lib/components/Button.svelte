<script>
	export let label
	export let url
	export let style
</script>

<span class="button {style}"><a href={url}>{label}</a></span>

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
		padding: 10px;
		margin: 1em 0 1em 0;
		border: 1px solid rgba(30, 44, 115, 1);
		border-radius: 30px;
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
	a:active {
		display: inline;
		font:
			15px 'Raleway',
			sans-serif;
		font-weight: 700;
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
