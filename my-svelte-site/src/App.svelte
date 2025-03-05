<script>
    import Header from "./components/Header.svelte";
  	import Fish from "./components/SearchingFish.svelte";
	import Main from "./components/Main.svelte";
</script>

<Header />

<Main />

<Fish />


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
	
</style>