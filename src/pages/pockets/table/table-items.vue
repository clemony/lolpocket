<script setup lang="ts">
import { computed, watch } from 'vue';
import { useSessionStore } from '../../../stores/sessionStore';
import { Item } from '../../../../types';

const props = defineProps<{
    params: {
        data: {
            name: string;
            key: string;
            items: {
                items: Item[];
            }
            icon: string;
        };
        api: any;
        node: any;
    };
}>();

const sn = useSessionStore();
const pocket = props.params.data;


// Watch for changes in pocket items
watch(() => pocket.items[0].items, (newItems) => {

    if (newItems) {
        //refresh();
    }
}, { deep: true });

// Refresh method for AG Grid's cell renderer
function refresh() {
    // Trigger a manual refresh of the grid cell
    props.params.api.refreshCells({
        rowNodes: [props.params.node],
        force: true // Force refresh to ensure re-rendering
    });
}

const starredItems = computed(() => {
    return pocket.items[0].starred[0].items;
});

</script>

<template>
    <ContextMenu class='context-menu'>


        <!------------------------⟢ items ⟣------------------------->


        <ContextMenuTrigger class=" size-full">
            <button class="flex overflow-x-scroll overflow-y-hidden items-center w-full h-full  gap-[5px]">

                <template v-if="pocket.items[0].starred.items && pocket.items[0].starred.items.length > 0">


                    <template v-for="(item, index) in pocket.items[0].starred.items" :key="index">

                        <div v-if="index <= 5" :key="item.id"
                            class="h-full border rounded-md shadow-sm overflow-clip shrink-0 opacity-95 border-base-300 aspect-square ">
                            <div class="size-full">
                                <img :src="`/img/items/${item.id}.webp`" class=" size-full" :data-item="item.name" />
                            </div>
                        </div>

                    </template>


                </template>

                <div v-else @click.stop="sn.navigateTo(`/pocket/${pocket.key}/pocket-items`, pocket.name, pocket.icon)"
                    class="flex group items-center rounded-[4px] justify-center !justify-self-start  w-auto h-full gap-2 border shadow-sm opacity-70 aspect-square bg-base-200/30 border-base-200 cursor-pointer hover:opacity-70 hover:border-base-300 transition-all duration-300 hover:shadow-inner ">
                    <icon icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />

                </div>
            </button>

            <TableContextMenu type="items" :params="props.params">
                <ContextMenuSub>
                    <ContextMenuSubTrigger :disabled="pocket.items[0].itemSets <= 1"
                        :class="{ 'last:[&_svg]:hidden': pocket.items[0].itemSets <= 1, 'opacity-50': pocket.items[0].itemSets == 0 }">


                        <icon v-if="pocket.items[0].itemSets != ''" icon="iconoir:star" class='size-3.5' />
                        <icon v-else icon="iconoir:star-dashed" class='size-3.5' />
                        Set
                    </ContextMenuSubTrigger>

                    <ContextMenuSubContent>
                        <ContextMenuItem v-for="set in pocket.items[0].itemSets">
                            <label class="flex items-center gap-0.5">
                                <icon v-if="pocket.items[0].starred.key == set.key" icon="teenyicons:tick-outline"
                                    class='mr-2' />
                                <span v-else class="w-5"></span>
                                <input type="radio" class='hidden' :value="set" v-model="pocket.items[0].starred" />
                                <div v-for="(item, index) in set.items">

                                    <img :src="`/img/items/${item.id}.webp`" class="size-5 rounded-xs" />

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
