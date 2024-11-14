<script setup lang="ts">

</script>

<template>
<icon icon="teenyicons:heart-outline"
    class="disabled:opacity-0 peer-checked:opacity-0 swap-off -top-3 -left-3  size-6 absolute p-px " />
<icon icon="teenyicons:heart-solid"
    class="disabled:opacity-0 text-dark-rose swap-on size-6 text-base-content/80 absolute p-px -top-3 -left-3  opacity-0 peer-checked:opacity-100[animation:heartbeat_6s__ease-in-out_infinite_both]" />
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

    2% {
        -webkit-transform: scale(0.71);
        transform: scale(0.71);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    3% {
        -webkit-transform: scale(1.28);
        transform: scale(1.28);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }

    6% {
        -webkit-transform: scale(0.77);
        transform: scale(0.77);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    7% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
</style>