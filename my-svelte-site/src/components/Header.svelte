<script>
    
</script>

<header class="header">
	<h1>Gabe's Fruitger Aero World</h1>
	<nav>
	  <!-- Notice the '#' in these links because svelte-spa-router uses hash routing by default -->
	  <a href="#/">Home</a>
	  <a href="#/about">About</a>
	  <a href="#/projects">Projects</a>
	  <a href="#/blog">Blog</a>
	</nav>
  </header>
  

<style>
    .header {
    background-image: url('/header.png');
    background-repeat: repeat; 
    background-position: top left;
    background-color: white; /* fallback color */
    
    padding: 15px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    .header h1 {
        color: white;
        font-size: 2em;
		font-weight: 300;
        font-family: "Comic Sans MS", cursive;
    }
    nav a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        font-weight: bold;
        padding: 5px 10px;
        border: 2px solid #64c8dc; 
    }
    nav a:hover {
        background: #64c8dc; 
        color: black;
    }
</style>
