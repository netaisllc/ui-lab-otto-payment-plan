<script>
import PlanManager from './PlanManager.svelte';
</script>

<style>
main {
	/*align-items: center;
	display: flex;
	justify-content: center; */
	overflow-y: auto;
	width: 100vw;
}
</style>

<main>
	<PlanManager on_signup="{true}" />
</main>
