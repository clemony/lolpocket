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
        class="b absolute left-0.5 top-1.5 z-20 flex size-18 items-center justify-center rounded-full">
        <div
            class="z-40 grid !aspect-square size-full place-items-center rounded-full">
            <img
                v-if="set.keystone && set.keystone.name != 'none'"
                :src="set.keystone.img"
                :style="props.style"
                class="h-16 w-auto shrink-0 object-center drop-shadow-md" />
            <ShadowedPlaceholder v-else class="size-16 rounded-full" />
        </div>
    </div>
</template>
<style scoped></style>
