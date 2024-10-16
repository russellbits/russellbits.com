<script>
	export let day = '22'
	export let month = 'SEP'
</script>

<div class="date-button-container">
	<div class="date-button-border"></div>
	<div class="date-button">
		<div class="day">{day}</div>
		<div class="month">{month}</div>
	</div>
</div>

<style>
	.date-button-container {
		position: relative;
	}
	.date-button-border {
		height: 70px;
		width: 60px;
		clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
		/* background-color: rgb(43, 59, 137); */
		background-color: white;
	}
	.date-button {
		position: absolute;
		top: 0;
		left: 0;
		width: 60px;
		height: 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		clip-path: polygon(1% 26%, 1% 74%, 50% 99%, 99% 74%, 99% 26%, 50% 1%);
		background-color: rgb(67, 84, 171);
	}
	.day {
		font: 30px 'Trebuchet MS';
		color: white;
		letter-spacing: -1px;
		text-align: center;
	}
	.month {
		font: 16px 'Trebuchet MS';
		color: white;
		margin-top: -7px;
		text-align: center;
		text-transform: uppercase;
	}
</style>
