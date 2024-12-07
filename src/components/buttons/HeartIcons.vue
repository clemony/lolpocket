<script setup lang="ts"></script>

<template>
    <div
        class="border-b2 relative -top-[8px] -left-3 size-full border ring-0 ring-offset-0 outline-hidden [&_>svg]:absolute [&_>svg]:size-[16px]">
        <icon
            icon="teenyicons:heart-outline"
            class="a swap-off opacity-40 disabled:opacity-0" />
        <icon
            icon="teenyicons:heart-solid"
            class="swap-on text-bc/80 text-dark-rose opacity-0 peer-checked:opacity-100 disabled:opacity-0" />

        <icon
            icon="fluent:heart-off-20-regular"
            class="text-bc/30 opacity-0 disabled:opacity-100" />
    </div>
</template>
