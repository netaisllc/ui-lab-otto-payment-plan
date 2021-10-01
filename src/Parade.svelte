<script>
import { fade } from 'svelte/transition';
import Ticker from 'svelte-ticker';
</script>

<style>
.page {
	background-color: #353535;
	color: white;
	height: 100vh;
	margin: 0 auto;
	max-width: var(--otto-max-width-page);
	padding: 0 1.25rem 1rem;
	width: 100%;
}
.page.flexed {
	display: flex;
	flex-direction: column;
}
.box {
	height: 50px;
	width: 100px;
}
.red {
	background-color: red;
}
.green {
	background-color: green;
}
.blue {
	background-color: cornflowerblue;
}
</style>

<section class="jst-center page flexed" in:fade>
	<div transition:fade>
		<Ticker duration="{10}" loop="{true}">
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
		</Ticker>

		<Ticker duration="{18}" loop="{true}">
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box red"></div>
			<div class="box green"></div>
			<div class="box blue"></div>
			<div class="box green"></div>
		</Ticker>
	</div>
</section>
