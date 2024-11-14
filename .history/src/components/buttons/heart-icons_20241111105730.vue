<script setup lang="ts">

</script>

<template>
<icon icon="teenyicons:heart-outline" class="disabled:opacity-0 swap-off -top-3 -left-3  size-6 absolute p-px " />
<icon icon="teenyicons:heart-solid"
    class="disabled:opacity-0 text-dark-rose swap-on size-6 text-base-content/80 absolute p-px -top-3 -left-3  [animation:heartbeat_12s__ease-in-out_infinite_both]" />
<icon icon="fluent:heart-off-20-regular"
    class="size-6 absolute text-base-content/30 disabled:opacity-100 opacity-0 -top-3 -left-3 " />
</template>

<style scoped>
.heartbeat {
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
}

@keyframes heartbeat {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }

    4% {
        -webkit-transform: scale(0.81);
        transform: scale(0.81);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    9% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }

    15% {
        -webkit-transform: scale(0.77);
        transform: scale(0.77);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    20% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
</style>