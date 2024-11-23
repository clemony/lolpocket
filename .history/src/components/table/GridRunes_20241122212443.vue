<script setup lang="ts">
import { computed } from 'vue'
import { Item, Rune } from 'types'
import { usePocketStore } from '@/stores/pocketStore'
import { useSessionStore } from '@/stores/sessionStore'
import { useRuneStore } from '@/stores/runeStore'
import { useGeneralStore } from '@/stores/generalStore'

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

const isImageLoaded = ref<Boolean>(false)
const isImageLoaded2 = ref<Boolean>(false)

function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
    }, 2000)
}
</script>

<template>
    <!------------------------⟢ runes ⟣------------------------->
    <ContextMenu
        class="context-menu flex items-center justify-center [&_>span]:size-full">
        <ContextMenuTrigger
            class="group relative flex size-full items-center justify-center gap-4 opacity-95"
            @click.stop="
                sn.navigateTo(`/pocket/${pocket.key}`, pocket.name, pocket.icon)
            ">
            <div class="flex size-full items-center justify-center gap-3">
                <template v-if="keystone && keystone.name != 'none' && runeSet">
                    <Skeleton
                        v-show="!isImageLoaded"
                        class="size-14 rounded-full" />

                    <div
                        v-show="isImageLoaded"
                        class="relative grid aspect-square !size-14 shrink-0 cursor-pointer place-items-center items-center rounded-full bg-gradient-to-br from-transparent to-75% shadow-sm"
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
                            'to-inspiration':
                                runeSet.secondary == 'inspiration',
                            'to-domination': runeSet.secondary == 'domination',
                            'to-precision': runeSet.secondary == 'precision',
                            'to-bg-base-200': !runeSet.secondary,
                        }">
                        <div
                            class="grid size-full place-items-center gap-2 rounded-full bg-gradient-to-br from-base-100/90 to-base-100/40 p-1 backdrop-blur-md">
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
                                        class="h-auto w-10 drop-shadow-softer transition-all duration-200 hover:drop-shadow-sm"
                                        @load="imageLoaded()" />
                                </KinesisElement>
                            </KinesisContainer>
                        </div>
                    </div>
                </template>
                <Placeholder v-else :size="41" />

                <template v-if="runeSet.secondary != 'none' && runeSet">
                    <Skeleton
                        v-show="!isImageLoaded"
                        class="size-10 rounded-full" />

                    <div
                        v-show="isImageLoaded"
                        class="relative flex aspect-square !size-10 shrink-0 cursor-pointer items-center rounded-full bg-gradient-to-br from-transparent to-75% shadow-sm"
                        :class="{
                            'to-resolve': runeSet.secondary == 'resolve',
                            'to-sorcery': runeSet.secondary == 'sorcery',
                            'to-inspiration':
                                runeSet.secondary == 'inspiration',
                            'to-domination': runeSet.secondary == 'domination',
                            'to-precision': runeSet.secondary == 'precision',
                            'to-bg-base-200': !runeSet.secondary,
                        }">
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
                                    class="!aspect-square !size-10 cursor-pointer overflow-clip rounded-full bg-base-100/70 p-2.5 backdrop-blur-md group-hover:scale-90">
                                    <img
                                        :src="`/img/runes/${runeSet.secondary}.webp`"
                                        class="size-full !object-contain drop-shadow-softest transition-all duration-200 hover:opacity-80"
                                        @load="imageLoaded()" />
                                </div>
                            </KinesisElement>
                        </KinesisContainer>
                    </div>
                </template>
                <Placeholder v-else :size="41" />
            </div>

            <PocketContext v-if="pocket" type="runes" :pocket="pocket">
                <CmOptionRunes :pocket="pocket" />
            </PocketContext>
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped></style>
