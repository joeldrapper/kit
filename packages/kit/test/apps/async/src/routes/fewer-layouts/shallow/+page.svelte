<script>
	import { hold } from '../held.svelte.js';
	import { tick } from 'svelte';
</script>

<p>{await tick().then(() => 'ticked')}</p>
<h1>{await hold()}</h1>
