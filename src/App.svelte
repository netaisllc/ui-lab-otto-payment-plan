<script>
import Home from './Home.svelte';
import PlanChangeConfirmed from './PlanChangeConfirmed.svelte';
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

	{#if $sample === 'plan_change'}
		<PlanChangeConfirmed />
	{/if}

	{#if $sample === 'plan_signup'}
		<PlanManager on_signup="{true}" />
	{/if}
</main>
