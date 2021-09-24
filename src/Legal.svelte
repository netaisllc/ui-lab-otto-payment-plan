<script>
import { createEventDispatcher } from 'svelte';

const send = createEventDispatcher();

const text = {
	link: 'ACH Authorization Agreement',
	main: 'By selecting a payment plan, you authorize us to initiate ACH transfers on your behalf and agree to the',
};

const emit = () => {
	send('event', { topic: 'ACH_AGREEMENT_OPENED' });
};
</script>

<style>
/* legalese */
.container-legal {
	margin: 0 0 0.875rem;
	width: 100%;
}

p {
	color: var(--otto-color-black-25);
	margin: 0;
	padding: 0;
	width: 100%;
}
</style>

<div class="container-legal">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<p class="caption text-centered">
		{text.main}
		<a class="caption text-centered" href="#" on:click="{emit}">{text.link}</a>.
	</p>
</div>
