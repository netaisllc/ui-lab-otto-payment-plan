<script>
import { createEventDispatcher } from 'svelte';

import FilledArrowRight from './FilledArrowRight.svelte';

const send = createEventDispatcher();

// Total money of payment plan
export let amount = '$0.00';
// Second plan point (used only for changing plans)
export let change_1 = '';
// Boolean; is the context a new signup?
export let on_signup = false;
// Plan name
export let plan = '';
// First plan point, used for both signup and plan-change use cases
export let point_1 = '';
// Second plan point; used only for signup
export let point_2 = '';
// Third plan point; used only for signup
export let point_3 = '';
// Upper right corner visual treatment text
export let ribbon = '';
// Boolean; is this plan selected?
export let selected = false;

let adjusted_point_3;
let use_span;

const developPoint3 = (str) => {
	if (str.includes('#')) {
		const parts = str.split('#');
		return parts;
	}
	return str;
};

const emit = () => {
	send('event', { topic: 'PLAN_SELECTED', plan: plan });
};

$: adjusted_point_3 = developPoint3(point_3);
$: fill = selected ? '#ffffff' : '#560AC7';
$: use_span = Array.isArray(adjusted_point_3) ? true : false;
</script>

<style>
.plan {
	background-color: var(--otto-color-background);
	border-radius: 8px;
	box-shadow: var(--otto-box-shadow);
	cursor: pointer;
	height: 128px;
	margin-bottom: 1.333rem;
	position: relative;
	width: 100%;
}
.plan.on-grid {
	align-items: center;
	display: grid;
	gap: 0;
	grid-template-columns: 60px 1fr;
	grid-template-rows: 24px 32px repeat(3, 24px) 1fr;
}
.plan.on_signup {
	height: 150px;
}

.plan.selected {
	background: var(--otto-gradient-expense-link);
}

.check-circle {
	border-radius: 12.5px;
	border: 2px solid #666666;
	border: 2px solid #bfbfbf;
	box-sizing: border-box;
	height: 25px;
	position: relative;
	width: 25px;
}
.check-circle.on-grid {
	grid-column: 1;
	grid-row: 2;
	justify-self: center;
}
.selected .check-circle {
	background-color: limegreen;
	border-color: limegreen;
}
.selected .check-circle:after {
	color: #2864e3;
	color: white;
	content: '\2713 ';
	font-size: 1.1rem;
	font-weight: 400;
	left: 4px;
	position: absolute;
	top: 1.333px;
}

.corner-mark {
	background-color: var(--otto-color-quarterBlack);
	border-bottom-left-radius: 8px;
	border-top-right-radius: 8px;
	color: white;
	font-family: var(--otto-font-body);
	font-size: 0.75rem;
	font-weight: 500;
	height: 32px;
	letter-spacing: 0.01em;
	line-height: 32px;
	position: absolute;
	right: 0;
	text-align: center;
	top: 0;
	width: 125px;
}
.selected .corner-mark {
	background-color: #ffffff;
	color: #560ac7;
}

.payment-amount {
	color: var(--otto-color-black-50);
	font-family: var(--otto-font-headline);
	font-size: 1.5rem;
	letter-spacing: 0.005em;
	line-height: 34px;
}
.payment-amount.on-grid {
	align-self: start;
	grid-column: 2;
	grid-row: 2;
	justify-self: start;
}
.selected .payment-amount {
	color: #ffffff;
}

.plan-point {
	align-items: center;
	color: var(--otto-color-black-50);
	display: flex;
	position: relative;
	padding-left: 1rem;
}
.point-text {
	font-family: var(--otto-font-body);
	font-size: 0.925rem;
	font-weight: 300;
	letter-spacing: 0.01em;
	line-height: 1.5rem;
}
.plan-point.on-grid {
	grid-column: 2;
	justify-self: start;
}
.selected .plan-point {
	color: #ffffff;
}
.container-arrow {
	font-size: 8px;
	left: 0;
	position: absolute;
	top: 4px;
}

.point-1 {
	grid-row: 3;
}
.point-2 {
	grid-row: 4;
}
.point-3 {
	grid-row: 5;
}
.point-3 span {
	color: var(--otto-color-primary);
	font-size: 0.925rem;
	font-weight: 400;
}
.selected .point-3 span {
	color: #ffffff;
	font-size: 0.925rem;
}

/* device adjustments */
@media (max-width: 320px) {
	.plan.on-grid {
		grid-template-columns: 50px 1fr;
	}

	.plan-point {
		font-size: 0.8rem;
		line-height: 1rem;
		padding-left: 0.875rem;
	}

	.point-3 span {
		font-size: 0.8rem;
		font-weight: 400;
	}
}
</style>

<div class="plan on-grid" class:selected class:on_signup data-plan="{plan}" on:click="{emit}">
	<div class="corner-mark">{ribbon}</div>
	<div class="check-circle on-grid"></div>
	<div class="payment-amount on-grid">{amount}</div>

	<!-- Plan point 1 -->
	<div class="plan-point on-grid point-1">
		<div class="container-arrow">
			<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
		</div>
		<div class="point-text">{point_1}</div>
	</div>

	{#if on_signup}
		<!-- Plan point 2 (signup)-->
		<div class="plan-point on-grid point-2">
			<div class="container-arrow">
				<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
			</div>
			<div class="point-text">{point_2}</div>
		</div>

		{#if use_span}
			<!-- Plan point 3 (signup)-->
			<div class="plan-point on-grid point-3">
				<div class="container-arrow">
					<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
				</div>
				<div class="point-text">
					{adjusted_point_3[0]}
					<span>{adjusted_point_3[1]}</span>
				</div>
			</div>
		{:else}
			<div class="plan-point on-grid point-3">
				<div class="container-arrow">
					<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
				</div>
				<div class="point-text">{adjusted_point_3}</div>
			</div>
		{/if}
	{/if}

	{#if !on_signup}
		{#if selected}
			{#if use_span}
				<!-- Plan point 2 (plan change, selected)-->
				<div class="plan-point on-grid point-2">
					<div class="container-arrow">
						<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
					</div>
					<div class="point-text">
						{adjusted_point_3[0]}
						<span>{adjusted_point_3[1]}</span>
					</div>
				</div>
			{:else}
				<div class="plan-point on-grid point-2">
					<div class="container-arrow">
						<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
					</div>
					<div class="point-text">{adjusted_point_3}</div>
				</div>
			{/if}
		{:else}
			<!-- Plan point 2 (plan change, not selected)-->
			<div class="plan-point on-grid point-2">
				<div class="container-arrow">
					<FilledArrowRight fill="{fill}" height="{14}" width="{14}" />
				</div>
				<div class="point-text">{change_1}</div>
			</div>
		{/if}
	{/if}
</div>
