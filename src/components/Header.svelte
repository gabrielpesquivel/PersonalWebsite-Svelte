<script>
  import { onMount } from 'svelte';
  let clickSound;

  onMount(() => {
    clickSound = new Audio('/sounds/nav_sound.mp3');
    clickSound.volume = 0.1;
  });

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
</script>
  
  <header class="header">
    <h1>Gabe's Fruitger Aero World</h1>
    <nav>
      <a href="#/" on:click={playClickSound}>Home</a>
      <a href="#/about" on:click={playClickSound}>About</a>
      <a href="#/why" on:click={playClickSound}>Why</a>
      <a href="#/projects" on:click={playClickSound}>Upcoming Projects</a>
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
  