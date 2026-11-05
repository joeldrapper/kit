<script>
	let inner = $state(0);
	const slow = (n) => new Promise((r) => setTimeout(() => r(n), 300));
</script>

<h1>deep</h1>

<p>slow: {await slow(inner)}</p>

<button onclick={() => (inner += 1)}>inner: {inner}</button>

<a href="/fewer-layouts/shallow">shallow</a>
