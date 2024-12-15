<script setup lang="ts">
import type { Champion, pocket } from 'types'

import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        :class="
            cn(
                'border-neutral/70 shadow-standard relative size-16 rounded-lg border',
                props.class
            )
        ">
        <LoadImg
            :key="props.champion.name"
            :url="`/img/champions/${clean(props.champion.name)}.webp`"
            :alt="props.champion.name + ' Image'"
            :class="cn('aspect-square size-full!')" />
    </div>

    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
