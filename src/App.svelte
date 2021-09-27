<script>
import Home from './Home.svelte';
import PlanChangeAcknowledged from './PlanChangeAcknowledged.svelte';
import PlanManager from './PlanManager.svelte';

import { sample } from './store';
</script>

<style>
main {
	overflow-y: auto;
	width: 100vw;
}
</style>

<main>
	{#if $sample === 'home'}
		<Home />
	{/if}

	{#if $sample === 'plan_change_acknowledged'}
		<PlanChangeAcknowledged />
	{/if}

	{#if $sample === 'plan_signup'}
		<PlanManager on_signup="{true}" />
	{/if}

	{#if $sample === 'plan_change'}
		<PlanManager on_signup="{false}" />
	{/if}
</main>
