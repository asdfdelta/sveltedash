<script>
	import '../app.css';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:600,400|Source+Code+Pro:400" rel="stylesheet">
</svelte:head>

<main>
	<slot />
</main>

<footer>
	<p>Ripped senselessly from <a href="https://surma.github.io/underdash/#toc">Underdash</a> created by <a href="https://github.com/surma">Surma</a>. Go star his repo!
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
        font-family: 'Yanone Kaffeesatz';
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
