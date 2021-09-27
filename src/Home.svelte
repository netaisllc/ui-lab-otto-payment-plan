<script>
import { fade } from 'svelte/transition';
import { sample, totalAmount } from './store';

const planChangeAcknowledged = () => ($sample = 'plan_change_acknowledged');
const planChange = () => ($sample = 'plan_change');
const planSignup = () => ($sample = 'plan_signup');
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

.hero {
	margin: 4.5rem 0 1rem;
}

h1 {
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 40pt;
	letter-spacing: 0.05rem;
	line-height: 40pt;
}
h3 {
	color: aquamarine;
	font-family: 'Open Sans', sans-serif;
	font-size: 1.333rem;
	font-weight: 300;
	letter-spacing: 0.05rem;
	line-height: 2.5rem;
	padding-left: 0.5rem;
}

button {
	background-color: #242424;
	border: none;
	padding: 0 10px;
}

button,
input {
	color: #fafafa;
	font-family: 'Open Sans', Arial, Helvetica, sans-serif;
	font-size: 0.875rem;
	font-weight: 300;
	height: 2rem;
	letter-spacing: 0.025rem;
	line-height: 2rem;
}

input {
	background-color: #494949;
	border: none;
	border-bottom: 1px solid aquamarine;
	margin: 0 0 0 1rem;
	padding: 5px;
	width: 5rem;
}

.samples {
	display: flex;
	flex-direction: column;
}

.container-view {
	height: 2.5rem;
	margin: 0 0 0.25rem 0;
	width: 100%;
}
</style>

<section class="page flexed" in:fade>
	<div class="hero">
		<h1>Otto</h1>
		<h3>ui lab</h3>
	</div>

	<div class="samples">
		<div class="container-view flx aln-center jst-between">
			<button on:click="{planSignup}">Payment Plan (Signup)</button>
			<input bind:value="{$totalAmount}" />
		</div>

		<div class="container-view flx aln-center jst-between">
			<button on:click="{planChange}">Payment Plan (Change plan)</button>
			<input bind:value="{$totalAmount}" />
		</div>

		<div class="container-view flx aln-center jst-between">
			<button on:click="{planChangeAcknowledged}">Plan Change Acknowledgement</button>
			<input bind:value="{$totalAmount}" />
		</div>
	</div>
</section>
