<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { Item } from 'types'
import { useGeneralStore } from '@stores/generalStore'
import { Skeleton } from '@/components/ui/skeleton'

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

const Champion = defineAsyncComponent({
    loader: () => import('../pocket/items/sm-item.vue'),

    loadingComponent: Skeleton,
    delay: 200,
})

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
        <button class="flex h-full w-full items-center gap-[11px] overflow-y-clip overflow-x-scroll px-1">

            <template v-if="starredItems.length > 0">

                <div v-for="(item, index) in starredItems" :key="index" class=' rounded-md   shadow-sm '>

                    <SmItem :item="item" :index="index" />

                </div>
            </template>

            <PlaceholderSquare v-else :size="50" />
        </button>

        <CmPocket type="items" :pocketKey="pocket.key">
            <CmOptionItems :pocket="pocket" />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
