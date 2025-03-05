<script>
	import Router from 'svelte-spa-router'
	import routes from './routes.js'
  </script>
  
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
		color: rgb(255, 170, 0);
		font-size: 5em;
		font-weight: 300;
		text-align: center;
	}
  </style>
  
  <Router {routes} />
  