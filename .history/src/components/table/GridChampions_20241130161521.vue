<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { Champion } from 'types'
import { clean } from '@lib/utils'
import { getPocket } from '@utils/pocketUtilities'

const props = defineProps<{
    params: {
        data: {
            name: string
            items: any
            pinned: boolean
            key: string
            champions: {
                champions: {
                    name: string
                }
                starred: Champion[]
            }
        }
        api: any
        node: any
    }
}>()

const pocket = ref(getPocket(props.params.data.key))
</script>

<template>
    <!------------------------⟢ champions⟣------------------------->

    <PocketMenu
        type="context"
        :pocket="pocket"
        class="group relative flex size-full cursor-pointer content-center items-center justify-start gap-2 px-2"
        v-if="pocket">
        <template v-for="(champion, index) in pocket.champions[0].champions">
            <div
                v-if="index < 3"
                class="size-14 shrink-0 overflow-hidden rounded-lg border border-base-300 shadow-warm">
                <loadImg
                    :url="`/img/champions/${clean(champion.name)}.webp`"
                    class="size-14 scale-[108%] object-cover" />
            </div>
            
        </template>
        <Placeholder
    </PocketMenu>
</template>

<style scoped></style>
