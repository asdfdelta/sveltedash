<script>
	let count = 0;
	let open = true;

	function increase() {
		count += 1;
	}
	function current(e) {
		console.log(e.currentTarget);
	}

	function toggle() {
		open = !open;
	}
</script>

<button
	on:click={increase}
	on:click={current}
	on:click={toggle}
	on:click={() => console.log('click!')}
>
	Click me!
</button>

<h1>{count}</h1>

{#if open}
	<div>I'm open!</div>
{/if}
