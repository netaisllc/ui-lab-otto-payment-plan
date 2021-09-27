<script>
import { createEventDispatcher } from 'svelte';

export let theme = 'primary';
export let on_signup = false;

const send = createEventDispatcher();

const emit = (e) => {
	send('event', { topic: 'PLAN_COMMAND_CLICKED' });
};

const developLabel = (on_signup, theme) => {
	if (theme === 'inverted') {
		return 'Dashboard';
	}
	if (on_signup) {
		return 'Confirm Plan';
	}
	return 'Update Plan';
};

$: cls = theme === 'primary' ? 'primary' : 'inverted';
$: label = developLabel(on_signup, theme);
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
	<button class="button text-standard {cls}" on:click="{emit}">{label}</button>
</div>
