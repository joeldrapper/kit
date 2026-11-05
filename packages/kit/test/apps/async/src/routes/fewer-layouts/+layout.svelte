<script>
	import { page } from '$app/state';
	import { release } from './held.svelte.js';

	let { children } = $props();

	let count = $state(0);
</script>

<button onclick={() => (count += 1)}>count: {count}</button>
<button onclick={release}>release</button>
<p id="path">{page.url.pathname}</p>

{@render children()}
