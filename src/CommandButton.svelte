<script>
import { createEventDispatcher } from 'svelte';

export let text = 'Confirm Plan';
export let theme = 'primary';

const send = createEventDispatcher();

const confirm = (e) => {
	send('event', { topic: 'PLAN_CONFIRMED' });
};

$: cls = theme === 'primary' ? 'primary' : 'inverted';
</script>

<style>
/* command button */
.container-button {
	margin: 0 0 1.2rem;
	width: 100%;
}

.button {
	align-items: center;
	background: var(--otto-gradient-primary);
	border: none;
	border-radius: 8px;
	box-shadow: var(--otto-box-shadow);
	color: #ffffff;
	cursor: pointer;
	display: flex;
	height: 55px;
	justify-content: center;
	line-height: 55px;
	text-align: center;
	transition: all 150ms ease-in-out;
	width: 100%;
}
.button.inverted {
	background: white;
	box-shadow: one;
	color: var(--otto-color-primary);
}
</style>

<div class="container-button">
	<button class="button text-standard {cls}" on:click="{confirm}">{text}</button>
</div>
