<script>
    import Header from "./Header.svelte";
</script>

<Header />

<div class="about-container">
    <h1>About</h1>
    <p>
        Frutiger Aero is that early 2000s aesthetic that feels like a mix of glossy tech optimism and nature-inspired smoothness. Think of bubbly, translucent buttons, swooshing water droplets, and futuristic yet friendly gradients—like Windows Vista, but cool. 
        <br> <br> It’s got that corporate-but-whimsical vibe, blending sleek blues, greens, and oranges with shiny reflections and soft curves. Basically, it’s the aesthetic of a world that thought the future would be clean, smooth, and just a little bit wet.
    </p>
</div>

<style>
    .about-container {
        background: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
        padding: 20px;
        border-radius: 10px; /* Rounded corners */
        max-width: 600px; /* Adjust width */
        margin: 50px auto; /* Center the box */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow */
        text-align: center; /* Center text */
        font-family: "Comic Sans MS", "Comic Sans", cursive; /* Comic Sans font */
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
    }
</style>
