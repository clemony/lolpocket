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
        class="absolute left-1 top-2 z-20 flex size-16 items-center justify-center rounded-full shadow-sm"
        :class="runeColors(set)">
        <div
            class="z-10 grid !aspect-square size-full place-items-center rounded-full bg-gradient-to-br from-base-100/90 to-base-100/40 p-1 backdrop-blur-md before:absolute before:-left-1 before:top-8 before:z-0 before:size-16 before:rounded-full before:bg-base-100">
            <img
                v-if="set.keystone && set.keystone.name != 'none'"
                :src="set.keystone.img"
                :style="props.style"
                class="h-14 w-auto shrink-0 object-center drop-shadow-md" />
            <ShadowedPlaceholder v-else class="size-14 rounded-full" />
        </div>
    </div>
</template>
<style scoped></style>
