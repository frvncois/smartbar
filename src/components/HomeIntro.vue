<template>
    <section>
        <ul>
            <li><p>Flyjin’s new non-alcoholic cocktail menu — after dark, reimagined.</p></li>
            <li><p>Join us January 29, from 8–10 PM, to discover six new alcohol-free cocktails, on us.<br>Limited space. RSVP to secure your place.</p></li>
        </ul>
    </section>
</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em 0;
    }
    p {
        text-align: center;
    }
    ul {
        display: flex;
        gap: 1em;
        flex-direction: column;
    }
     @media (max-width: 768px) {
        ul {
            gap: 6em;
        }
    }
</style>