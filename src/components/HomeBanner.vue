<template>
    <section>
        <video src="@/assets/desktop.mp4" class="banner-desktop" autoplay loop muted playsinline></video>
        <video src="@/assets/mobile.mp4" class="banner-mobile" autoplay loop muted playsinline></video>
    </section>
</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    video {
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