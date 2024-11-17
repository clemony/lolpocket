<script setup lang="ts"></script>

<template>
    <div
        class="relative -left-3 -top-2.5 size-full [&_>svg]:absolute [&_>svg]:size-5.5 [&_>svg]:p-px">
        <icon
            icon="teenyicons:heart-outline"
            class="a swap-off opacity-50 disabled:opacity-0" />
        <icon
            icon="teenyicons:heart-solid"
            class="swap-on text-base-content/80 text-dark-rose opacity-0 disabled:opacity-0 peer-checked:opacity-100" />

        <icon
            icon="fluent:heart-off-20-regular"
            class="text-base-content/30 opacity-0 disabled:opacity-100" />
    </div>
</template>
