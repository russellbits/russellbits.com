<script>
	// @ts-nocheck
	import { onMount } from 'svelte'
	import Cube from '$lib/components/Cube.svelte'

	let width = 0
	let height = 0
	let positionsArray = Array.from({ length: 6 }, () => [0, 0])

	onMount(() => {
		width = window.innerWidth
		height = window.innerHeight
		positionsArray = generateRandomPositions(6)

		const updateSize = () => {
			width = window.innerWidth
			height = window.innerHeight
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
			const x = Math.floor(Math.random() * width)
			const y = Math.floor(Math.random() * height)
			result.push([x, y])
		}
		return result
	}
</script>

<!-- <div class="debug"><code>{positionsArray}</code></div> -->
<div class="parallax_layer">
	<Cube
		width={125 / 2}
		height={123 / 2}
		color="blue"
		top={positionsArray[0][0]}
		left={positionsArray[0][1]}
		distance={-10}
	/>
	<Cube
		width={93.75 / 2}
		height={92.25 / 2}
		color="blue"
		top={positionsArray[1][0]}
		left={positionsArray[1][1]}
		distance={-10}
	/>
	<Cube
		width={62.5 / 2}
		height={61.5 / 2}
		color="blue"
		top={positionsArray[2][0]}
		left={positionsArray[2][1]}
		distance={-30}
	/>
	<Cube
		width={125 / 2}
		height={123 / 2}
		color="purple"
		top={positionsArray[3][0]}
		left={positionsArray[3][1]}
		distance={-10}
	/>
	<Cube
		width={93.75 / 2}
		height={92.25 / 2}
		color="purple"
		top={positionsArray[4][0]}
		left={positionsArray[4][1]}
		distance={-20}
	/>
	<Cube
		width={62.5 / 2}
		height={61.5 / 2}
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
		width: 100vw;
		min-height: 100vh;
		height: 100%;
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
