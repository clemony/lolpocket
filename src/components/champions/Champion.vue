<script setup lang="ts">
import type { pocket } from '@/types/pocketTypes'
import type { Champion } from '@/types/dataTypes'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
}>()

console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
    <!--     <Tooltip :content="champion.name">
 -->
    <label
        :class="
            cn(
                'border-neutral/30 relative size-16 rounded-lg border shadow-sm',
                props.class
            )
        ">
        <slot />
        <LoadImg
            :key="props.champion.key"
            :url="`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.id}.png`"
            :alt="props.champion.name + ' Image'"
            :class="cn('aspect-square size-full scale-108')" />
    </label>
    <!--     </Tooltip>
 -->
    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
