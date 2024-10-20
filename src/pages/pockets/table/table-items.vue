<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSessionStore } from '../../../stores/sessionStore'
import { Item } from '../../../../types'
import { useGeneralStore } from '../../../stores/generalStore'

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

// Watch for changes in pocket items
watch(
    () => pocket.items[0].items,
    (newItems) => {
        if (newItems) {
            //refresh();
        }
    },
    { deep: true }
)

// Refresh method for AG Grid's cell renderer
function refresh() {
    // Trigger a manual refresh of the grid cell
    props.params.api.refreshCells({
        rowNodes: [props.params.node],
        force: true, // Force refresh to ensure re-rendering
    })
}

const starredItems = computed(() => {
    return pocket.items[0].itemSets[pocket.items[0].starred].items
})
</script>

<template>
    <ContextMenu class="context-menu [&_>span]:size-full flex items-center">
        <!------------------------⟢ items ⟣------------------------->

        <ContextMenuTrigger class="size-full">
            <button
                class="flex items-center w-full h-full gap-[11px] px-1 overflow-x-scroll overflow-y-clip">
                <template v-if="starredItems.length > 0">
                    <template
                        v-for="(item, index) in starredItems"
                        :key="index">
                        <KinesisContainer
                            :perspective="100"
                            :duration="200"
                            class="items-center h-full group"
                            :disabled="gs.reducedMotion == true">
                            <KinesisElement
                                type="depth"
                                :strength="4"
                                class="flex items-center h-full">
                                <div
                                    v-if="index <= 5"
                                    :key="item.id"
                                    class="border rounded-md shadow-sm size-[52px] overflow-clip shrink-0 opacity-95 border-base-300 aspect-square transition-all duration-300">
                                    <div class="size-full">
                                        <img
                                            :src="`/img/items/${item.id}.webp`"
                                            class="size-full"
                                            :data-item="item.name" />
                                    </div>
                                </div>
                            </KinesisElement>
                        </KinesisContainer>
                    </template>
                </template>

                <div
                    v-else
                    @click.stop="
                        sn.navigateTo(
                            `/pocket/${pocket.key}/pocket-items`,
                            pocket.name,
                            pocket.icon
                        )
                    "
                    class="flex group items-center rounded-[4px] size-[52px] justify-center self-center !justify-self-start gap-2 border shadow-sm opacity-70 aspect-square bg-base-200/30 border-base-200 cursor-pointer hover:opacity-70 hover:border-base-300 transition-all duration-300 hover:shadow-inner">
                    <icon
                        icon="teenyicons:add-outline"
                        class="group-hover:stroke-[1.5]" />
                </div>
            </button>

            <TableContextMenu type="items" :pocketKey="pocket.key">
                <ContextMenuSub>
                    <ContextMenuSubTrigger
                        :disabled="pocket.items[0].itemSets <= 1"
                        :class="{
                            'last:[&_svg]:hidden':
                                pocket.items[0].itemSets <= 1,
                            'opacity-50': pocket.items[0].itemSets == 0,
                        }">
                        <icon
                            v-if="pocket.items[0].itemSets != ''"
                            icon="iconoir:star"
                            class="size-3.5" />
                        <icon
                            v-else
                            icon="iconoir:star-dashed"
                            class="size-3.5" />
                        Set
                    </ContextMenuSubTrigger>

                    <ContextMenuSubContent>
                        <ContextMenuItem
                            v-for="set in pocket.items[0].itemSets">
                            <label class="flex items-center gap-0.5">
                                <icon
                                    v-if="
                                        pocket.items[0].starred.key == set.key
                                    "
                                    icon="teenyicons:tick-outline"
                                    class="mr-2" />
                                <span v-else class="w-5"></span>
                                <input
                                    type="radio"
                                    class="hidden"
                                    :value="set"
                                    v-model="pocket.items[0].starred" />
                                <div v-for="(item, index) in set.items">
                                    <img
                                        :src="`/img/items/${item.id}.webp`"
                                        class="size-5 rounded-xs" />
                                </div>
                            </label>
                        </ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
            </TableContextMenu>
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped></style>
