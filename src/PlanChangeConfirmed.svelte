<script>
import { fly } from 'svelte/transition';

import CheckCircleIcon from './CircleCheckmark.svelte';
import CommandButton from './CommandButton.svelte';
import TopSpacer from './SpacerTop.svelte';

import { sample } from './store';

const handleCommand = (e) => {
	// TODO Dev only
	alert(`You should navigate to Dashboard here.`);
	$sample = 'home';
};
</script>

<style>
.page {
	background-color: var(--otto-color-primary);
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

.fill {
	background-color: var(--otto-color-primary);
	width: 100%;
}

.container-top {
	height: 44px;
	width: 100%;
}

.one {
	flex: 1 1 auto;
	max-height: 120px;
}
.two {
	flex: 1 1 auto;
	max-height: 36px;
}
.three {
	flex: 1 1 1rem;
}

.container-button {
	height: 55px;
	width: 100%;
}

.container-hero {
	height: 150px;
	width: 100%;
}
.container-hero h1 {
	font-family: 'Apercu Pro Bold', 'Apercu Pro', 'Apercu', Arial, Helvetica, sans-serif;
	font-weight: 700;
	letter-spacing: 0.01em;
	padding-right: 3rem;
}

.container-icon {
	height: 110px;
	margin-left: -0.25rem;
	width: 100%;
}

.container-lead {
	height: 100px;
	width: 100%;
	font-weight: 300;
	font-size: 1.15rem;
	letter-spacing: 0.01rem;
	padding-right: 2rem;
}

.indented {
	padding-left: 1.5rem;
}

@media (max-width: 340px) {
	.container-hero h1 {
		font-family: 'Apercu Pro Bold', 'Apercu Pro', 'Apercu', Arial, Helvetica, sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: 0.01em;
		line-height: 1.5rem;
		padding-right: 0;
	}
	.container-lead {
		font-weight: 300;
		font-size: 0.925rem;
		letter-spacing: 0.05rem;
		line-height: 1rem;
		padding-right: 0;
	}
	.indented {
		padding-left: 0;
	}
	.one {
		flex: 1 1 auto;
		max-height: 3rem;
	}
}
</style>

<section class="page flexed" transition:fly="{{ duration: 300, x: 600 }}">
	<div class="container-top">
		<TopSpacer theme="primary" />
	</div>

	<div class="fill one"></div>

	<div class="indented">
		<div class="container-icon">
			<CheckCircleIcon fill="{'#FFFFFF'}" height="{64}" width="{64}" />
		</div>

		<div class="container-hero">
			<h1>Updated to <br />Bi-Weekly Payments!</h1>
		</div>

		<div class="container-lead text-standard">
			Your next payment of $125.50 will be charged on or around Friday Oct 30.
		</div>
	</div>

	<div class="fill two"></div>

	<div class="container-button">
		<CommandButton theme="inverted" text="Dashboard" on:event="{handleCommand}" />
	</div>

	<div class="fill three"></div>
</section>
