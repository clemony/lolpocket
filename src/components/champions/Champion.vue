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
    <label
        :class="
            cn(
                'border-neutral/30 relative size-16 rounded-lg border shadow-sm',
                props.class
            )
        ">
        <slot />
        <LoadImg
            :key="props.champion.name"
            :url="`/img/champions/${clean(props.champion.name)}.webp`"
            :alt="props.champion.name + ' Image'"
            :class="cn('aspect-square size-full scale-108')" />
    </label>

    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
