<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGeneralStore } from '../../../stores/generalStore';
import { usePocketStore } from '../../../stores/pocketStore';
import TableContextMenu from './table-contextMenu.vue';
import { Item } from '../../../../types';
import { generateRandomString } from '../../../script/keygen';

const gs = useGeneralStore();
const ps = usePocketStore();

const props = defineProps<{
    params?: {
        data: {
            name: string;
            notes: string;
            type: string;
            pinned: boolean;
            key: string;
            items: {
                items: Item[];
            }
        };
        api: any;
        node: any;
    };
    pocketKey?: string;
}>();


const pocket = computed(() => {
    if (props.params) {
        return ps.getPocket(props.params.data.key);
    } else if (props.pocketKey) {
        return ps.getPocket(props.pocketKey);
    }
});

const name = ref('')

function doThis() {

    console.log(name)
    ps.$persist;
};
</script>

<template>
    <!------------------------⟢ name ⟣------------------------->
    <ContextMenu>
        <ContextMenuTrigger v-if="pocket" class="grid justify-start grid-rows-2 overflow-hidden size-full " @click.stop>
            <div class="relative flex items-end pt-2 group/name">
                <input v-model="pocket.name" class="align-baseline capitalize text-[13px] h-6 truncate transition-all duration-300 bg-transparent px-[4px] font-medium  
                    
                    border border-transparent focus:border hover:border  focus:border-base-300/50 hover:border-base-300/50

                    outline-none ring-0 peer  py-1 rounded-xs w-full hover:!cursor-text  z-0 "
                    @keydown.enter.prevent="gs.loseFocus; doThis()" @change="doThis()" spellcheck='false' />

                <!-- 
                <icon icon='basil:edit-alt-solid'
                    class="absolute opacity-0 group-hover/name:opacity-50 w-3.5 right-[4px] top-[2px] peer-focus:opacity-0 bg-base-100 h-full brightness-95 z-0" /> -->

                <button @click="pocket.name = ''"
                    class="size-4 opacity-0 peer-focus:opacity-70 group-hover/name:opacity-70 h-full w-4.5 absolute right-[0px] z-10 hover:cursor-pointer hover:opacity-90  -top-[3px]  *:absolute ">
                    <icon icon='teenyicons:x-small-outline' />

                </button>
            </div>
            <div class="flex self-start w-full h-full pb-1.5 text-xs">

                <SelectClass type="hover" :pocketKey="pocket.key" class="w-full" />


            </div>

            <TableContextMenu type="Pocket" :pocketKey="pocket.key">
                <ContextMenuItem @click="pocket.name = generateRandomString()" class="gap-3 group/what">
                    <icon icon="ph:question-mark"
                        class='duration-200 ease-in size-4 group-hover/what:rotate-45 group-hover/what:[transform-origin:bottom_center]  group-hover/what:fill-mode-both transition-all' />
                    New Mystery Name
                </ContextMenuItem>
                <ContextMenuSeparator />
            </TableContextMenu>
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped></style>