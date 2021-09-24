<script>
import TextBlock from './TextBlock.svelte';

const text = 'Amounts may vary month to month based on the actual charges made.';
</script>

<style>
.container-advice {
	font-weight: 300;
	padding: 0 1rem;
	margin-bottom: 3.5rem;
}
</style>

<div class="container-advice">
	<TextBlock color="black-25" centered="{true}" size="subhead" text="{text}" />
</div>
