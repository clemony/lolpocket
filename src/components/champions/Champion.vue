<script setup lang="ts">
import type { pocket } from '@/types/pocketTypes'
import type { Champion } from '@/types/dataTypes'
import type { HTMLAttributes } from 'vue'
import { championDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@/functions/utils'
import { getChampionImage } from '@/functions/makeLinks'
const props = defineProps<{
    champion: Champion
    pocket?: pocket
    class?: HTMLAttributes['class']
}>()

///console.log('💠 - champion.image.full:', props.champion)
</script>

<template>
    <!--     <Tooltip :content="champion.name">
 -->
    <label
        @click.right="toggleDrawerState(championDrawer, null, champion)"
        :class="
            cn(
                'border-b3 relative size-16 rounded-lg border shadow-sm',
                props.class
            )
        ">
        <LoadImg
            :key="props.champion.name"
            :url="getChampionImage(champion.apiname)"
            :alt="props.champion.name + ' Image'"
            class="size-full scale-108" />
    </label>
    <!--     </Tooltip>
 -->
    <!-- </TransitionGroup> -->
</template>

<style scoped></style>
