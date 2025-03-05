<script>
    import Header from "./components/Header.svelte";
  	import Triangle from "./components/BouncingTriangle.svelte";
</script>

<Header />

<main>
	<h1>Hello Stranger!</h1>
	<p>Visit <a href="www.gabrielpesquivel.com "> my react website </a> to have a look at my more professional side.</p>
</main>

<Triangle size={100} boundary={400} speed={70} />


<style>
	:global(body) {
		margin: 0;
		padding: 0;
		
		/* Provide the path to your texture image */
		background-image: url('/wallpaper.png');
		background-repeat: repeat;
		background-size: auto;
		background-attachment: scroll;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: white;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		color: white;
		font-size: 1.5em;
	}

	a {
		color: orange;
		text-decoration: none;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>