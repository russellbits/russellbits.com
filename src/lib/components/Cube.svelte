<script>
	// @ts-nocheck
	export let color = 'blue'
	export let size = 'large'
	let width
	let height
	let cubeColors

	if (color == 'purple') {
		cubeColors = ['#E1E1E1', '#641890', '#B339F9']
	} else {
		// it's blue
		cubeColors = ['#E1E1E1', '#4354AB', '#5970E2']
	}

	if (size === 'large') {
		width = 125
		height = 123
	} else if (size === 'medium') {
		width = 93.75
		height = 92.25
	} else {
		// it's small
		width = 62.5
		height = 61.5
	}
</script>

<!--
@component
## Cube
Creates a decorative element

@example
```svelte
```

### Slot props
- `color` - blue | purple
- `size` - small | medium | large
-->

<svg
	width="{width}px"
	height="{height}px"
	viewBox="0 0 125 123"
	class="cube"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		<g transform="translate(-720.000000, -700.000000)">
			<g transform="translate(719.000000, 700.000000)">
				<g transform="translate(1.000000, -0.000000)">
					<polygon fill={cubeColors[0]} points="0 102.309623 60.0348135 80 125 102.309623 62.5 123"
					></polygon>
					<polygon fill={cubeColors[1]} points="60 0 125 22.5454545 125 101 60 79.2727273"
					></polygon>
					<polygon fill={cubeColors[0]} points="0 22.3096234 60.0348135 0 125 22.3096234 62.5 43"
					></polygon>
					<polygon fill={cubeColors[2]} points="0 23 63 43.8711434 63 123 0 102.623851"></polygon>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	.cube {
		position: relative;
		top: var(--top);
		right: var(--right);
		width: 125px;
		height: 123px;
		transform: translateZ(var(--distance));
	}
</style>
