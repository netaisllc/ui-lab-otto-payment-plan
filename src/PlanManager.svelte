<script>
import { fly } from 'svelte/transition';

import AdviceTextBlock from './AdviceText.svelte';
import CommandButton from './CommandButton.svelte';
import IntroductionTextBlock from './IntroductionText.svelte';
import Legal from './Legal.svelte';
import PageHeader from './PageHeader.svelte';
import Plans from './Plans.svelte';
import TopSpacer from './SpacerTop.svelte';

// TODO Dev only
import { paymentPlan, sample, totalAmount } from './store';

// Receive this from the route
export let on_signup = false;

const title = 'My OttoPay Plan';

let selectedPlan = $paymentPlan;

const handleCommand = (e) => {
	// TODO Ned to handle the use cases here:
	// 1. On Signup, a plan was selected.
	// 2. On ChangePlan, a plan change was requested

	// TODO Dev only
	alert(`You should hanlde the plan ${selectedPlan.toUpperCase()} here. On_Signup: ${on_signup}`);
	$sample = 'home';
};

const handleLegal = (e) => {
	// TODO Dev only
	alert(`You should show the ACH Legal Agreement via modal here.`);
};

const handleSelection = (e) => {
	selectedPlan = e.detail.plan;
	$paymentPlan = selectedPlan;
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
	<Plans on_signup="{on_signup}" total_amount="{$totalAmount}" on:event="{handleSelection}" />
	<AdviceTextBlock />
	<CommandButton on_signup="{on_signup}" on:event="{handleCommand}" />
	<Legal on:event="{handleLegal}" />
</section>
