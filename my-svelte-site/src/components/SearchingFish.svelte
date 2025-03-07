<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  // Customize these props as needed
  export let size = 200;        // size of the fish (in px)
  export let boundary = 500;    // size of the container (in px)
  export let duration = 3000;   // how long each swim transition should last

  // Initialize tweened positions
  let x = tweened((boundary - size) / 2, { duration, easing: cubicOut });
  let y = tweened((boundary - size) / 2, { duration, easing: cubicOut });

  // Generates a random coordinate within [0, boundary - size]
  function randomCoord() {
    return Math.random() * (boundary - size);
  }

  // Periodically move the fish to a new random position
  onMount(() => {
    // Immediately pick an initial random point
    x.set(randomCoord());
    y.set(randomCoord());

    // Then update to new random points every few seconds
    const intervalId = setInterval(() => {
      x.set(randomCoord());
      y.set(randomCoord());
    }, duration); // swim somewhere new after each transition finishes

    // Clean up when component unmounts
    return () => clearInterval(intervalId);
  });
</script>

<style>
  .container {
    width: calc(var(--boundary, 400px)*2);
    height: var(--boundary, 400px);
    position: relative;
    margin: 2rem auto 0;
    border: 1px solid white;
    overflow: hidden;
  }

  .fish {
    position: absolute;
  }

  /* Just a placeholder style for the fish image; adjust as needed */
  img {
    display: block;
  }
</style>

<div class="container" style="--boundary: {boundary}px;">
  <div class="fish" style="transform: translate({$x}px, {$y}px);">
    <!-- Replace with any local or remote fish image you have -->
    <img
      src= /fish.gif
      alt="Fish"
      style="width: {size}px; height: auto;"
    />
  </div>
</div>
