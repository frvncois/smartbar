<template>
    <section>
        <img src="@/assets/banner.gif" alt="Banner" class="banner-desktop" />
        <img src="@/assets/banner-mobile.gif" alt="Banner" class="banner-mobile" />
    </section>
</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    img {
        width: calc(100% + 4px);
        height: auto;
        margin-left: -2px;
        margin-right: -2px;
        object-fit: cover;
        clip-path: inset(0 2px 0 2px);
    }
    .banner-mobile {
        display: none;
    }
    @media (max-width: 768px) {
        .banner-desktop {
            display: none;
        }
        .banner-mobile {
            display: block;
        }
    }
</style>