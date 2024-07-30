<script lang="ts">
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';


export default {
    setup() {
        // Define a ref for the loading state
        const isLoading = ref(false);


        const router = useRouter();
        const route = useRoute();
        onBeforeRouteUpdate(() => {
            isLoading.value = true; // Start loading when route changes


            // Watch the route path and stop loading when the component is ready
            watch(() => route.path, () => {
                isLoading.value = false; // Stop loading when the route path changes
            });
        });
        return {
        }
    },

    mounted() {
    }
}




</script>

<template>
    <div class="hypnotic-8"></div>
</template>

<style scoped>
.hypnotic-8 {
    width: 25px;
    height: 50px;
    display: grid;
    background:
        linear-gradient(currentColor 0 0) top/100% 2px,
        radial-gradient(farthest-side at top, #0000 calc(100% - 2px), currentColor calc(100% - 1px), #0000) top,
        linear-gradient(currentColor 0 0) bottom/100% 2px,
        radial-gradient(farthest-side at bottom, #0000 calc(100% - 2px), currentColor calc(100% - 1px), #0000) bottom;
    background-size: 100% 1px, 100% 50%;
    background-repeat: no-repeat;
    animation: h8 4s infinite linear;
}

.hypnotic-8::before,
.hypnotic-8::after {
    content: "";
    grid-area: 1/1;
    background: inherit;
    border: inherit;
    animation: inherit;
}

.hypnotic-8::after {
    animation-duration: 2s;
}

@keyframes h8 {
    100% {
        transform: rotate(1turn)
    }
}
</style>