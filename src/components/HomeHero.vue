<template>
    <section>
        <img src="@/assets/logo.svg" alt="Logo" class="logo-desktop" />
        <img src="@/assets/logo-mobile.svg" alt="Logo" class="logo-mobile" />
    </section>
</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1em;
    }
    img {
        width: 100%;
        height: auto;
    }
    .logo-mobile {
        display: none;
    }
    @media (max-width: 768px) {
        .logo-desktop {
            display: none;
        }
        .logo-mobile {
            display: block;
        }
    }
</style>