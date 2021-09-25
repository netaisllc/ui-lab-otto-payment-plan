<script>
import { fade } from 'svelte/transition';
import { sample } from './store';

const planChange = () => ($sample = 'plan_change');
// const planDashboard = () => ($sample = 'plan_dashboard');
const planDashboard = () => ($sample = 'home');
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
h3,
button {
	color: #fafafa;
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 1.333rem;
	letter-spacing: 0.05rem;
	line-height: 2.5rem;
}

h3 {
	color: aquamarine;
	padding-left: 0.5rem;
}

button {
	background-color: #262626;
	border: 1px solid transparent;
	border-radius: 2px;
	font-size: 0.75rem;
	font-weight: 400;
	letter-spacing: 0.025rem;
	line-height: 1rem;
	margin: 0 0 0.75rem;
	padding: 5px 10px;
}

.samples {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
</style>

<section class="page flexed" in:fade>
	<div class="hero">
		<h1>Otto</h1>
		<h3>ui lab</h3>
	</div>

	<div class="samples">
		<button on:click="{planSignup}">Payment Plan (Signup)</button>
		<button on:click="{planDashboard}">Payment Plan (Dashboard)</button>
		<button on:click="{planChange}">Plan Change Confirmed</button>
	</div>
</section>
