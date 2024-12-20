<script setup lang="ts"></script>
<template>
    <Suspense>
        <template #default>
            <slot />
        </template>
        <template #fallback>
            <ui-eclipse class="text-bc size-12" />
        </template>
    </Suspense>
</template>
<style scoped></style>
