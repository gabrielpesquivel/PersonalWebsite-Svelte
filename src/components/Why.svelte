<script>
    import Header from "./Header.svelte";
</script>

<Header />

<div class="why-container">
    <h1>Why</h1>
    <p>
        What do I like about the Frutiger Aero aesthetic. Well, that's a bit of a difficult question to answer. To me it represents this nostalgic time in my life,
         between the ages of around 4 to 13 years old. When I look back, I think about these clean UI's I experienced on my consoles or my parents computers, and even
         interacting with the pre-loaded graphics when looking at new TV's after my soccer game on a Saturday. <br> <br> It reminds me of a more simple time where I had no real
         worries about anything in the world, except for my progress in club penguin, moshi monsters, minecraft or Pokemon Platinum. Interacting with this aesthetic 
         is able to so vividly bring me back to those times, and I think that's why I like it so much. <br> <br> This is not to say I am unhappy now, it's just all a little different.
    </p>
</div>

<style>
    .why-container {
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