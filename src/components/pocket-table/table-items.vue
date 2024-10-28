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

    <ContextMenuTrigger class="size-full">
        <button class="flex h-full w-full items-center gap-[11px] overflow-y-clip overflow-x-scroll px-1">

            <template v-if="starredItems.length > 0">

                <div v-for="(item, index) in starredItems" :key="index"
                    class=' rounded-md   shadow-sm border border-neutral/40'>

                    <KinesisContainer :perspective="100" :duration="1000"
                        class="group overflow-hidden content-center relative rounded  "
                        :disabled="gs.reducedMotion == true">
                        <KinesisElement type="translate" :strength="6" class="flex  items-center ">
                            <div v-if="index <= 5" :key="item.id"
                                class="aspect-square size-[48px] shrink-0   border border-base-300 opacity-95 transition-all duration-300 ">

                                <div class="size-full absolute top-0 left-0 z-0 ">
                                    <img :src="`/img/items/${item.id}.webp`" class="z-0 size-full scale-150 blur-sm"
                                        :data-item="item.name" />
                                </div>

                                <div class="size-full absolute top-0 left-0 z-10 ">
                                    <img :src="`/img/items/${item.id}.webp`" class="size-full mask mask-1 scale-105"
                                        :data-item="item.name" />
                                </div>
                            </div>
                        </KinesisElement>

                        <div class="size-full  z-50 absolute top-0  left-0 rounded-md 
                        
                        shadow-[inset_1px_1px_2px_3px_#00000040]
                            ">
                        </div>
                    </KinesisContainer>
                </div>
            </template>

            <div v-else @click.stop="
                sn.navigateTo(
                    `/pocket/${pocket.key}/items`,
                    pocket.name,
                    pocket.icon
                )
                "
                class="group flex aspect-square size-[48px] cursor-pointer items-center justify-center gap-2 self-center !justify-self-start rounded-full border border-base-200 bg-base-200/30 opacity-70 shadow-sm transition-all duration-300 hover:border-base-300 hover:opacity-70 hover:shadow-inner">
                <icon icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />
            </div>
        </button>

        <CmPocket type="items" :pocketKey="pocket.key">
            <CmOptionItems :pocket="pocket" />
        </CmPocket>
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped></style>
