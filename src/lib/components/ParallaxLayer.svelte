<script>
	// @ts-nocheck
	import { onMount } from 'svelte'
	import Cube from '$lib/components/Cube.svelte'

	export let pageWidth, pageHeight
	let positionsArray = Array.from({ length: 6 }, () => [0, 0])

	onMount(() => {
		positionsArray = generateRandomPositions(6)
		console.log(
			`PageWidth in ParallaxLayer is ${pageWidth} and PageWidthHeight in ParallaxLayer is ${pageHeight}`
		)

		const updateSize = () => {
			pageWidth = window.innerWidth
			pageHeight = document.documentElement.scrollHeight
			positionsArray = generateRandomPositions(6)
		}

		window.addEventListener('resize', updateSize)

		return () => {
			window.removeEventListener('resize', updateSize)
		}
	})

	function generateRandomPositions(numArrays) {
		const result = []
		for (let i = 0; i < numArrays; i++) {
			let x, y
			const xSet = Math.floor(Math.random() * pageWidth)
			if (xSet > pageWidth - 125 / 2) {
				x = xSet - 125 / 2
			} else if (xSet < 125 / 2) {
				x = xSet + 125 / 2
			} else {
				x = xSet
			}
			const ySet = Math.floor(Math.random() * pageHeight)
			if (ySet > pageHeight - 123 / 2) {
				y = ySet - 123 / 2
			} else if (ySet < 123 / 2) {
				y = ySet + 123 / 2
			} else {
				y = ySet
			}
			result.push([x, y])
		}
		return result
	}
</script>

<div class="debug"><code>{positionsArray}</code></div>
<div class="parallax_layer">
	<Cube
		width={125}
		height={123}
		color="blue"
		top={positionsArray[0][0]}
		left={positionsArray[0][1]}
		distance={-50}
	/>
	<Cube
		width={125}
		height={123}
		color="blue"
		top={positionsArray[1][0]}
		left={positionsArray[1][1]}
		distance={-10}
	/>
	<Cube
		width={125}
		height={123}
		color="blue"
		top={positionsArray[2][0]}
		left={positionsArray[2][1]}
		distance={-30}
	/>
	<Cube
		width={125}
		height={123}
		color="purple"
		top={positionsArray[3][0]}
		left={positionsArray[3][1]}
		distance={-10}
	/>
	<Cube
		width={125}
		height={123}
		color="purple"
		top={positionsArray[4][0]}
		left={positionsArray[4][1]}
		distance={-20}
	/>
	<Cube
		width={125}
		height={123}
		color="purple"
		top={positionsArray[5][0]}
		left={positionsArray[5][1]}
		distance={-30}
	/>
</div>

<style>
	.parallax_layer {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		background-color: rgba(0, 0, 0, 0.3);
		margin: 0;
		padding: 0;
		z-index: -1;
	}
	.debug {
		position: absolute;
		top: 250px;
		left: 450px;
		width: 20vw;
		color: white;
	}
</style>
