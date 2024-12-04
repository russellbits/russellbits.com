<script>
	// @ts-nocheck
	import Cube from '$lib/components/Cube.svelte'

	const generateRandomPositions = (numArrays, arrayLength) => {
		const result = []
		for (let i = 0; i < numArrays; i++) {
			const randomArray = []
			for (let j = 0; j < arrayLength; j++) {
				randomArray.push(Math.random() * 100)
			}
			result.push(randomArray)
		}
		return result
	}
	const positionArrays = generateRandomPositions(6, 2)
</script>

<div class="parallax_layer">
	<Cube
		size="large"
		color="blue"
		--top="{positionArrays[0][0]}%"
		--right="{positionArrays[0][1]}%"
		--distance="-10px"
	/>
	<Cube
		size="large"
		color="blue"
		--top="{positionArrays[1][0]}%"
		--right="{positionArrays[1][1]}%"
		--distance="-20px"
	/>
	<Cube
		size="large"
		color="blue"
		--top="{positionArrays[2][0]}%"
		--right="{positionArrays[2][1]}%"
		--distance="-30px"
	/>
	<Cube
		size="large"
		color="purple"
		--top="{positionArrays[3][0]}%"
		--right="{positionArrays[3][1]}%"
	/>
	<Cube
		size="medium"
		color="purple"
		--top="{positionArrays[4][0]}%"
		--right="{positionArrays[4][1]}%"
	/>
	<Cube
		size="small"
		color="purple"
		--top="{positionArrays[5][0]}%"
		--right="{positionArrays[5][1]}%"
	/>
</div>

<style>
	.parallax_layer {
		position: relative;
		width: 50vw;
		height: 100vh;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(120, 120, 120, 0.5);
		margin: 0;
		padding: 0;
		z-index: 10;
	}
</style>
