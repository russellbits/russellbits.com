<script>
	// Make the cubes all the same width and height and then just change their translate3d z values!
	export let color = 'blue'
	export let width
	export let height
	export let top = 300
	export let left = 300
	export let distance = -50

	let cubeColors

	if (color == 'purple') {
		cubeColors = ['#E1E1E1', '#641890', '#B339F9']
	} else {
		// it's blue
		cubeColors = ['#E1E1E1', '#4354AB', '#5970E2']
	}
</script>

<!--
@component
## Cube
Creates a decorative element

@example
```svelte
```

### Props
- `color` - blue | purple
- `width` - 62.5 | 93.75 | 125
- `height` - 61.5 | 92.25 | 123
-->

<svg
	width="{width}px"
	height="{height}px"
	opacity="0.5"
	viewBox="0 0 125 123"
	class="cube"
	style="top: {top}px; left: {left}px; transform: translateZ({distance}px);"
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
		display: block;
		position: absolute;
		z-index: 10;
	}
</style>
