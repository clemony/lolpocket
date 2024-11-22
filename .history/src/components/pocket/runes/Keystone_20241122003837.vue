<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <template v-if="set">
        <div
            class="relative z-10 size-18 shrink-0 self-center rounded-full border border-base-200 bg-base-100/50 p-1.5 shadow-pretty backdrop-blur-sm">
            <img
                v-if="set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="size-full opacity-90" />

            <div
                v-else
                class="border-base-300/80 shadow-inset-sm"
                :style="{
                    backgroundImage:
                        'url(/img/ui/green-dust-and-scratches.png),linear-gradient(135deg,oklch(var(--b1) / 0.4) 50%, oklch(var(--b2)) 100%)',
                }">
                <img
                    src="/img/runes/RunesIcon.svg"
                    class="size-full rounded-full opacity-90 brightness-95 drop-shadow-md grayscale peer-checked:!opacity-100 peer-checked:!grayscale-0" />
            </div>
        </div>
    </template>
</template>
<style scoped></style>
