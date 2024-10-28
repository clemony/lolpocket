<script setup lang="ts">
import { computed } from 'vue'
import { Item, Rune } from 'types'
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'
import { useRuneStore } from '@stores/runeStore'
import { useGeneralStore } from '@stores/generalStore'

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

<template><!------------------------⟢ runes ⟣------------------------->
<ContextMenu class="context-menu flex items-center [&_>span]:size-full">
    <ContextMenuTrigger class="group relative flex size-full items-center justify-center gap-4 opacity-95">
        <div class="flex size-full items-center justify-center gap-3">
            <div v-if="keystone && keystone.name != 'none' && runeSet"
                class="relative flex aspect-square !size-[52px] shrink-0 cursor-pointer items-center rounded-full bg-gradient-to-br from-transparent to-75% shadow-sm"
                :class="{
                    'border-resolve via-resolve':
                        keystone.path == 'resolve',
                    'border-sorcery via-sorcery':
                        keystone.path == 'sorcery',
                    'border-inspiration via-inspiration':
                        keystone.path == 'inspiration',
                    'border-domination via-domination':
                        keystone.path == 'domination',
                    'border-precision via-precision':
                        keystone.path == 'precision',
                    'to-resolve': runeSet.secondary == 'resolve',
                    'to-sorcery': runeSet.secondary == 'sorcery',
                    'to-inspiration': runeSet.secondary == 'inspiration',
                    'to-domination': runeSet.secondary == 'domination',
                    'to-precision': runeSet.secondary == 'precision',
                    'to-bg-base-200': !runeSet.secondary,
                }">
                <div
                    class="flex size-full items-start justify-center gap-2 rounded-full bg-gradient-to-br from-base-100/90 to-base-100/40 p-1 backdrop-blur-md">
                    <KinesisContainer :disabled="gs.reducedMotion == true" :perspective="100" :duration="200"
                        class="group flex size-full items-center">
                        <KinesisElement type="depth" :strength="6" class="group flex size-full items-center">
                            <img :src="keystone.img"
                                class="drop-shadow-softer h-auto w-12  transition-all duration-200 hover:drop-shadow-sm" />
                        </KinesisElement>
                    </KinesisContainer>
                </div>
            </div>
            <div v-else-if="pocket" @click.stop="
                sn.navigateTo(
                    `/pocket/${pocket.key}/items`,
                    pocket.name,
                    pocket.icon
                )
                "
                class="group flex aspect-square !size-[52px] shrink-0 cursor-pointer items-center justify-center gap-2 !justify-self-start rounded-[4px] border border-base-200 bg-base-200/30 opacity-70 shadow-sm transition-all duration-300 hover:border-base-300 hover:opacity-70 hover:shadow-inner">
                <icon icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />
            </div>

            <KinesisContainer :disabled="gs.reducedMotion == true" :perspective="100" :duration="200"
                class="group flex size-full items-center">
                <KinesisElement type="depth" :strength="5" class="group flex size-full items-center">
                    <div v-if="
                        runeSet &&
                        runeSet.secondary &&
                        runeSet.secondary != 'none'
                    " :class="{
                        'border-resolve':
                            runeSet.secondary == 'resolve',
                        'border-sorcery':
                            runeSet.secondary == 'sorcery',
                        'border-inspiration':
                            runeSet.secondary == 'inspiration',
                        'border-domination':
                            runeSet.secondary == 'domination',
                        'border-precision':
                            runeSet.secondary == 'precision',
                    }"
                        class="!aspect-square !size-7 cursor-pointer overflow-clip rounded-full border-2 bg-base-100/80 p-[2px] shadow-md backdrop-blur-md group-hover:scale-90">
                        <img :src="`/img/runes/${runeSet.secondary}.webp`"
                            class="drop-shadow-softest size-full !object-contain transition-all duration-200 hover:opacity-80" />
                    </div>
                </KinesisElement>
            </KinesisContainer>
        </div>

        <CmPocket v-if="pocket" type="runes" :pocketKey="pocket.key">
            <CmOptionRunes :pocket="pocket" />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
