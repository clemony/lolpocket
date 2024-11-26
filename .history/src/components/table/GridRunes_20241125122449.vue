<script setup lang="ts">
import { computed } from 'vue'
import { Item, Rune } from 'types'
import { usePocketStore } from '@/stores/pocketStore'
import { useSessionStore } from '@/stores/sessionStore'
import { useRuneStore } from '@/stores/runeStore'
import { useGeneralStore } from '@/stores/generalStore'
import { runeColors } from '@lib/functions/GetColor'
const props = defineProps<{
    params: {
        data: {
            name: string
            items: Item[]
            pinned: boolean
            key: string
            runes: {
                runes: Rune[]
                starred: number
            }
        }
        api: any
        node: any
    }
}>()
const sn = useSessionStore()
const gs = useGeneralStore()

const ps = usePocketStore()
const pocket = ps.getPocket(props.params.data.key)
const runeSet = computed(() => {
    if (!pocket) {
        return
    }
    return pocket.runes[0].runeSets[pocket.runes[0].starred]
})

const keystone = computed(() => {
    if (runeSet.value && keystone) {
        const stone = runeSet.value.keystone

        return stone
    }
})
</script>

<template>
    <!------------------------⟢ runes ⟣------------------------->
    <PocketMenu v-if="pocket" :pocket="pocket" type="context">
        <div class="flex size-full items-center justify-center gap-3">
            <template v-if="keystone && keystone.name != 'none' && runeSet">
                <RouterLink
                    :to="`/pocket/${pocket.key}/runes`"
                    class="relative grid aspect-square !size-14 shrink-0 cursor-pointer place-items-center items-center rounded-full bg-gradient-to-br from-transparent to-75% shadow-sm"
                    :class="runeColors(runeSet)">
                    <div
                        class="grid size-full place-items-center rounded-full bg-gradient-to-br from-base-100/90 to-base-100/40 p-1 backdrop-blur-md">
                        <KinesisContainer
                            :disabled="gs.reducedMotion == true"
                            :perspective="100"
                            :duration="200"
                            class="group flex size-full items-center">
                            <KinesisElement
                                type="depth"
                                :strength="6"
                                class="group flex size-full items-center">
                                <img
                                    :src="keystone.img"
                                    class="shrink-0 object-contain drop-shadow-softer transition-all duration-200 hover:drop-shadow-sm" />
                            </KinesisElement>
                        </KinesisContainer>
                    </div>
                </RouterLink>
            </template>
            <Placeholder v-else class="size-14" />

            <!-- <template
                    v-if="
                        runeSet.secondary != 'none' &&
                        runeSet.secondary != 'undefined' &&
                        runeSet
                    ">
                    <div
                        class="relative flex aspect-square !size-14 shrink-0 cursor-pointer items-center rounded-full bg-gradient-to-br from-transparent to-75% shadow-sm"
                        :class="runeColors(runeSet)"">
                        <KinesisContainer
                            :disabled="gs.reducedMotion == true"
                            :perspective="100"
                            :duration="200"
                            class="group flex size-full items-center">
                            <KinesisElement
                                type="depth"
                                :strength="5"
                                class="group flex size-full items-center">
                                <div
                                    class="!aspect-square !size-14 cursor-pointer overflow-clip rounded-full bg-base-100/70 p-2.5 backdrop-blur-md group-hover:scale-90">
                                    <img
                                        :src="`/img/runes/${runeSet.secondary}.webp`"
                                        class="size-full !object-contain drop-shadow-softest transition-all duration-200 hover:opacity-80" />
                                </div>
                            </KinesisElement>
                        </KinesisContainer>
                    </div>
                </template> -->
            <Placeholder v-else :size="41" />
        </div>

        <!--   <CmOptionRunes :pocket="pocket" /> -->
    </PocketMenu>
</template>

<style scoped></style>
