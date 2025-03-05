<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let size = 100;
  export let boundary = 400;
  export let speed = 10;

  let x = tweened((boundary - size) / 2, { duration: 2000, easing: cubicOut });
  let y = tweened((boundary - size) / 2, { duration: 2000, easing: cubicOut });
  let directionX = 1;
  let directionY = 1;

  function animate() {
    setInterval(() => {
      let newX = $x + directionX * speed;
      let newY = $y + directionY * speed;
      
      if (newX + size >= boundary || newX <= 0) directionX *= -1;
      if (newY + size >= boundary || newY <= 0) directionY *= -1;
      
      x.set(newX);
      y.set(newY);
    }, 30);
  }

  onMount(() => {
    animate();
  });
</script>

<style>
  .container {
    width: var(--boundary, 400px);
    height: var(--boundary, 400px);
    position: relative;
    margin: 2rem auto 0;
    border: 1px solid white;
    overflow: hidden;
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: calc(var(--size, 100px) / 2) solid transparent;
    border-right: calc(var(--size, 100px) / 2) solid transparent;
    border-bottom: var(--size, 100px) solid orange;
    position: absolute;
    transform-origin: center;
  }
</style>

<div class="container" style="--boundary: {boundary}px;">
  <div class="triangle" style="--size: {size}px; transform: translate({$x}px, {$y}px);"></div>
</div>
