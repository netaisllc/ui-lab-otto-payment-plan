<script>
import TextBlock from './TextBlock.svelte';

const text = 'Enjoy financial flexibility and select the ideal frequency to pay Otto back.';
</script>

<style>
.container-introduction {
	align-items: flex-start;
	display: flex;
	height: 5.25rem;
	padding-top: 0.4rem;
}
</style>

<div class="container-introduction">
	<TextBlock text="{text}" />
</div>
