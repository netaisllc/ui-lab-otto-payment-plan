<script>
import BackIcon from './Back.svelte';

export let fill = '#560AC7';
export let title = 'App page';
</script>

<style>
.page-header {
	background-color: var(--otto-color-background);
	color: var(--otto-color-pureBlack);
	font-family: var(--otto-font-body);
	font-weight: 500;
	height: 44px;
	line-height: 44px;
	width: 100%;
}
.back,
.forward {
	cursor: pointer;
	height: 44px;
	width: 44px;
}
.forward,
.title {
	font-size: 17px;
	padding-top: 1px;
}
</style>

<div class="page-header flx aln-center jst-between">
	<div class="back flx aln-center jst-start">
		<BackIcon fill="{fill}" />
	</div>
	<div class="title">{title}</div>
	<div class="forward flx-centered hidden">
		<div>Done</div>
	</div>
</div>
