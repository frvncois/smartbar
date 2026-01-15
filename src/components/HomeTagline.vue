<template>
    <section>
        <ul>
            <li></li>
            <li>
                <img src="@/assets/tagline.svg" alt="Tagline" />
            </li>
            <li></li>
        </ul>
    </section>
</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        display: grid;
        grid-template-columns: 0.33fr 1fr 0.33fr;
        gap: 3em;
    }
    img {
        width: 100%;
        height: auto;
        padding: 1em 0
    }
    @media (max-width: 768px) {
        ul {
            display: flex;
            flex-direction: column;
        }
    }
</style>