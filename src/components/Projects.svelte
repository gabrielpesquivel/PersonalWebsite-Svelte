<script>
    import Header from "./Header.svelte";
</script>

<Header />

<div class="projects-container">
    <h1>Upcoming Projects</h1>
    <p>
        1. Sentiment analysis of different social networks for stock trading <br>
        2. Analysing faces and gathering data on individual (without making it weird) <br>
        3. Game using godot or unity <br>
        4. Analysing local business opportunities
    </p>
</div>

<style>
    .projects-container {
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