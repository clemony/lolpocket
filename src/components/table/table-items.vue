<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { Item } from 'types'
import { useGeneralStore } from '@stores/generalStore'

const props = defineProps<{
    params: {
        data: {
            name: string
            key: string
            items: {
                items: Item[]
            }
            icon: string
            pinned: any
        }
        api: any
        node: any
    }
}>()


const sn = useSessionStore()
const gs = useGeneralStore()
const pocket = props.params.data


const starredItems = computed(() => {
    return pocket.items[0].itemSets[pocket.items[0].starred].items
})
</script>

<template>
<ContextMenu class="context-menu flex items-center [&_>span]:size-full">
    <!------------------------⟢ items ⟣------------------------->

    <ContextMenuTrigger class="size-full" @click.stop="
        sn.navigateTo(
            `/pocket/${pocket.key}/items`,
            pocket.name,
            pocket.icon
        )
        ">
        <button class="flex h-full w-full items-center gap-2 overflow-y-clip overflow-x-scroll px-1">

            <template v-if="starredItems.length > 0">

                <template v-for="(item, index) in starredItems" :key="index" class=''>

                    <loadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`" :index="index"
                        class='size-14 rounded-lg border border-base-300 shadow-sm' />

                </template>
            </template>

            <PlaceholderSquare v-else class='size-14 m-px' />
        </button>

        <CmPocket type="items" :pocketKey="pocket.key">
            <CmOptionItems :pocket="pocket" />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
