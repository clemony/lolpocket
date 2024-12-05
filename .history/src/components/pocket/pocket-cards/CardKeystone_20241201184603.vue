<script setup lang="ts">
import { RuneSet } from 'types'
import { runeColors } from '@lib/functions/GetColor'
const props = defineProps<{
    set: RuneSet
    style: any
}>()
</script>
<template>
    <div
        class="absolute top-3 z-20 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-transparent shadow-sm"
        :style="props.style"
        :class="runeColors(set)">
        <div
            class="grid size-full place-items-center rounded-full bg-gradient-to-br from-base-100/90 to-base-100/40 p-1 backdrop-blur-md">
            <img
                v-if="set.keystone && set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="h-12 w-auto object-center drop-shadow-md" />
            <ShadowedPlaceholder v-else class="size-14 rounded-full" />
        </div>
    </div>
</template>
<style scoped></style>
