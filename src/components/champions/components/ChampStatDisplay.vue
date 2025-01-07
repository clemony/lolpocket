<script setup lang="ts">
import { Champion } from '@/types/dataTypes'

const props = defineProps<{
    champion: Champion
    stat: any
    level: number
}>()
const displayStats = Object.entries(props.champion.stats)
</script>
<template>
    <div class="stat-title !text-3 text-bc mb-0.5 font-semibold opacity-60">
        {{ stat.name }}
    </div>

    <progress
        class="progress progress-neutral w-56"
        :value="0"
        max="100"></progress>

    <div class="flex items-center gap-3">
        <div class="stat-value text-8 drop-shadow-text">
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

        <div
            class="stat-desc text-3 text-bc mt-0.75 h-full items-start font-semibold tracking-tight opacity-60">
            {{
                computed(() => {
                    const a = displayStats.find(
                        (key) => key[0] == stat.stats[1].id
                    )
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
    </div>

    <img
        :src="stat.img"
        class="stat-img drop-shadow-xs: invert-dark size-8 justify-self-end opacity-80" />
</template>
<style scoped></style>
