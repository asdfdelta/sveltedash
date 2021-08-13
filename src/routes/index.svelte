<script context="module">
    export async function load({ fetch }) {
        let snippets = await fetch('/api/v1/snippets');
        if (snippets.ok) {
            // console.log(await snippets.json())
            return { 
                props: {
                    snippets: await snippets.json()
                }
            }
        }
        return {
			status: snippets.status,
			error: new Error(`Could not load ${snippets.status}`)
		};
    }
</script>

<script>
    import Grid from '$lib/Grid.svelte';
    export let snippets;
</script>

<svelte:head>
	<title>SvelteDash</title>
</svelte:head>

<section>
	<h1>
		SvelteDash
	</h1>

	<h2>
		Just copy/paste what'cha need
	</h2>

    {Object.keys(snippets)}

    <Grid />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
	}

	h1 {
		font-size: 5rem;
	}

    h2 {
        font-size: 2rem;
    }
</style>
