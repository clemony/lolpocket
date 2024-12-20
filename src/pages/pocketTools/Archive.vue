<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePocketStore } from '@stores/pocketStore'

const ps = usePocketStore()
</script>

<template>
    <LayoutSpacer />
    <icon icon="file-icons:build-boot" class="size-10" />
</template>

<style scoped></style>
