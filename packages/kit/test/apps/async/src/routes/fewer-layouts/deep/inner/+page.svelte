<script>
	import { hold } from '../../held.svelte.js';

	let inner = $state(0);
</script>

<h1>deep</h1>

<button onclick={() => (inner += 1)}>inner: {inner}</button>

<svelte:boundary>
	<p>{await hold()}</p>

	{#snippet pending()}
		<p>waiting</p>
	{/snippet}
</svelte:boundary>
