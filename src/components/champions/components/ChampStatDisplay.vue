<script setup lang="ts">
import { Champion } from '@/types/dataTypes'

const props = defineProps<{
    champion: Champion
    stat: any
}>()
const displayStats = Object.entries(props.champion.stats)
</script>
<template>
    <div class="stat-title !text-3 text-bc mb-0.5 font-semibold opacity-60">
        {{ stat.name }}
    </div>
    <div class="flex items-center gap-3">
        <div class="stat-value text-8 drop-shadow-text grow">
            {{
                computed(() => {
                    const a = displayStats.find(
                        (key) => key[0] == stat.stats[0].id
                    )
                    if (a) {
                        if (stat.name == 'Attack Speed') {
                            return a[1].toFixed(3)
                        }
                        return a[1]
                    }
                })
            }}
        </div>
        <img :src="stat.img" class="size-8 justify-self-end drop-shadow-xs" />
    </div>
    <div
        class="stat-desc text-3 text-bc mt-0.75 font-medium tracking-tight opacity-60">
        {{
            computed(() => {
                const a = displayStats.find((key) => key[0] == stat.stats[1].id)
                if (a) {
                    return '+ ' + a[1] + ' / lvl'
                }
            })
        }}

        <span v-if="stat.name == 'Attack Speed'">
            {{
                computed(() => {
                    const a = displayStats.find(
                        (key) => key[0] == stat.stats[2].id
                    )
                    if (a) {
                        return ' | ' + a[1].toFixed(3) + ' ratio'
                    }
                })
            }}
        </span>
    </div>
</template>
<style scoped></style>
