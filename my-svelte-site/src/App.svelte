<script>
	import Router from 'svelte-spa-router'
	import routes from './routes.js'
	import { onMount } from 'svelte';
  	let audioElement;

	onMount(() => {
		// Once the component is mounted, you can set volume via the DOM element
		if (audioElement) {
		audioElement.volume = 0.1; // 20% volume
		}
	});
</script>

<audio
  bind:this={audioElement}
  src="/sounds/aquaticambience.mp3"
  autoplay
  loop
>
  Your browser does not support the <code>audio</code> element.
</audio>
  
  <style>
	:global(body) {
	  margin: 0;
	  padding: 0;
	  background-image: url('/wallpaper.png');
	  background-repeat: repeat;
	  background-size: auto;
	  background-attachment: scroll;
	}
	:global(h1) {
		color: rgb(232, 157, 7);
		font-size: 5em;
		font-weight: 300;
		text-align: center;
	}
  </style>
  
  <Router {routes} />
  