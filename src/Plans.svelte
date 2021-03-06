<script>
import { createEventDispatcher } from 'svelte';
import Plan from './Plan.svelte';
import { getNextPaymentDueOnDates } from './utils';

const send = createEventDispatcher();

export let on_signup = false;
export let total_amount = 0;

const dueDates = getNextPaymentDueOnDates();
let amounts;

let plans = [
	{
		amount: '$TOTAL',
		name: 'monthly',
		point_1: 'Paid on the 1st of every month',
		point_2: '$CASHBACK in monthly cash back',
		point_3: '$HALF charged today',
		change_1: 'Switch and pay $HALF today',
		ribbon: '+1% Cash Back',
		selected: true,
	},
	{
		amount: '$HALF',
		name: 'biweekly',
		point_1: 'Paid on or around Friday',
		point_2: '$QUARTER charged today',
		point_3: 'NEXT_PAYMENT#BIWEEKLY',
		change_1: 'Switch and pay $HALF today',
		ribbon: 'Bi-Weekly',
		selected: false,
	},
	{
		amount: '$QUARTER',
		name: 'weekly',
		point_1: 'Paid on or around Friday',
		point_2: '1st payment due today',
		point_3: 'NEXT_PAYMENT#WEEKLY',
		change_1: 'Switch and pay $HALF today',
		ribbon: 'Weekly',
		selected: false,
	},
];

const deselectAll = () => {
	plans = plans.map((plan) => {
		plan.selected = false;
		return plan;
	});
};

const developAmounts = (money) => {
	if (money) {
		return {
			cashback: ((money / 100) * 0.01).toFixed(2),
			half: (money / 100 / 2).toFixed(2),
			quarter: (money / 100 / 4).toFixed(2),
			total: (money / 100).toFixed(2),
		};
	}
	return {
		cashback: '$0.01',
		half: '$0.01',
		quarter: '$0.01',
		total: '$0.01',
	};
};

const developStatements = (amts) => {
	const replacer = (str) => {
		let value;
		if (str.includes('$TOTAL')) {
			value = str.replace('$TOTAL', `$${amts.total}`);
			return value;
		}
		if (str.includes('$HALF')) {
			value = str.replace('$HALF', `$${amts.half}`);
			return value;
		}
		if (str.includes('$QUARTER')) {
			value = str.replace('$QUARTER', `$${amts.quarter}`);
			return value;
		}
		if (str.includes('$CASHBACK')) {
			value = str.replace('$CASHBACK', `$${amts.cashback}`);
			return value;
		}
		// Retain the # sign for later string handling
		if (str === 'NEXT_PAYMENT#BIWEEKLY') {
			return `Next payment, #${dueDates.biweekly}`;
		}
		// Retain the # sign for later string handling
		if (str === 'NEXT_PAYMENT#WEEKLY') {
			return `Next payment, #${dueDates.weekly}`;
		}
		return str;
	};

	plans = plans.map((plan) => {
		for (let prop in plan) {
			if (typeof plan[prop] === 'string') {
				plan[prop] = replacer(plan[prop]);
			}
		}
		return plan;
	});
};

const selectOne = (selected) => {
	plans = plans.map((plan) => {
		plan.selected = plan.name === selected ? true : false;
		return plan;
	});
};

const handleSelection = (e) => {
	const plan = e.detail.plan;
	deselectAll();
	selectOne(plan);

	send('event', { topic: 'PLAN_SELECTED', plan: plan });
};

$: amounts = developAmounts(total_amount);
$: developStatements(amounts);
</script>

<style>
.plans {
	margin: 0 auto;
	width: 100%;
}
</style>

<div class="plans flx flx-col flx-centered">
	{#each plans as plan}
		<Plan
			amount="{plan.amount}"
			on_signup="{on_signup}"
			plan="{plan.name}"
			point_1="{plan.point_1}"
			point_2="{plan.point_2}"
			point_3="{plan.point_3}"
			change_1="{plan.change_1}"
			ribbon="{plan.ribbon}"
			selected="{plan.selected}"
			on:event="{handleSelection}" />
	{/each}
</div>
