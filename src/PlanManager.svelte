<script>
import { fly } from 'svelte/transition';

import AdviceTextBlock from './AdviceText.svelte';
import CommandButton from './CommandButton.svelte';
import IntroductionTextBlock from './IntroductionText.svelte';
import Legal from './Legal.svelte';
import PageHeader from './PageHeader.svelte';
import Plans from './Plans.svelte';
import TopSpacer from './SpacerTop.svelte';

import { sample } from './store';

// export let on_signup = false;

const title = 'My OttoPay Plan';

let selectedPlan = 'basic';

const handleCommand = (e) => {
	// TODO Dev only
	alert(`You should confirm the plan ${selectedPlan.toUpperCase()} here.`);
	$sample = 'home';
};

const handleLegal = (e) => {
	// TODO Dev only
	alert(`You should show the ACH Legal Agreement via modal here.`);
};

const handleSelection = (e) => {
	selectedPlan = e.detail.plan;
};
</script>

<style>
.page {
	background-color: var(--otto-color-background);
	margin: 0 auto;
	max-width: var(--otto-max-width-page);
	padding: 0 1.25rem 1rem;
	width: 100%;
}
</style>

<section class="page" transition:fly="{{ duration: 300, x: 600 }}">
	<TopSpacer />
	<PageHeader title="{title}" fill="#560AC7" />
	<IntroductionTextBlock />
	<Plans total_amount="{25675}" on:event="{handleSelection}" />
	<AdviceTextBlock />
	<CommandButton on:event="{handleCommand}" />
	<Legal on:event="{handleLegal}" />
</section>
