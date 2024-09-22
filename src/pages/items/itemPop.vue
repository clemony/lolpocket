<script setup lang="ts">
import { Item } from '../../stores/dataStore';
import { ItemSet } from './../../stores/itemStore';
import { useItemStore } from './../../stores/itemStore';
import { useUserStore } from '../../stores/userStore';

const us = useUserStore();
const is = useItemStore();
const props = defineProps<{
    item: Item;
    variant: string;
    set?: ItemSet;
}>();




</script>


<!-- This will be the content of the popover -->
<template v-if="props.item">
    <div class="relative grid p-2 w-60 overscroll-none">
        <div class="grid grid-cols-[1fr_2fr] border-b border-base-300 pb-3 gap-2 w-full ">

            <div class="h-full col-start-1">
                <img :key="item.id" :src="item.img" :alt="item.name + ' Image'"
                    class="border rounded-md pointer-events-none border-base-300 shadow-warm" />
            </div>

            <!-------------------------------⟢ Header ⟣-------------------------------->

            <div class="grid h-full grid-cols-1">

                <div class="flex text-middle">

                    <h3 class="flex flex-wrap text-sm font-bold leading-4 tracking-tight">
                        {{ item.name }}
                    </h3>
                </div>

                <div class="flex items-end justify-end gap-2 ">

                    <label
                        class="btn btn-circle btn-neutral btn-xs aspect-square group/fave hover:opacity-75 *:size-3.5 *:absolute relative  *:transition-all *:duration-100">


                        <input type="checkbox" v-model="us.faveItems" :true-value="item" false-value=""
                            class="hidden peer" />


                        <icon icon="teenyicons:heart-solid" class="opacity-0 peer-checked:opacity-100 text-tea-rose " />
                        <icon icon="teenyicons:heart-outline" class="peer-checked:text-old-rose " />




                    </label>



                    <a :href="item.wiki" target="_blank"
                        class="btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75"
                        alt="link to league wiki">

                        <Icon icon="teenyicons:link-outline" class="size-3" />

                        <!--  <Icon icon="teenyicons:link-remove-outline"
                            class="p-0 m-0 opacity-0 size-3 group-hover:opacity-100" />
 -->

                    </a>


                    <VDropdown v-if="props.variant == 'add'" theme="menuDark" :triggers="['hover']"
                        :popperTriggers="['hover']" :key="item.id + 'dropdown'"
                        class="flex items-center gap-2 border-none btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75">


                        <icon icon='teenyicons:add-solid' class="size-3.5" />




                        <template #popper :key="item.name + 'addToSet'">
                            <ul class="!w-full items-center grid gap-2 p-2 min-w-28 pointer-events-auto">
                                <span class="pl-2 cursor-default">Item Sets</span>
                                <li v-for="set in is.itemSets"
                                    class="justify-start btn btn-xs btn-ghost hover:btn-neutral hover:backdrop-brightness-95"
                                    @click="is.addToSet(item, set.key)">
                                    {{ set.name }}
                                </li>
                            </ul>
                        </template>
                    </VDropdown>

                    <button v-if="props.variant == 'remove' && set"
                        class=" btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75" alt="remove from set"
                        title="remove from set" @click="is.removeFromSet(item, set.key)">


                        <icon icon='teenyicons:denied-outline' class="size-3.5" />

                    </button>
                </div>


            </div>

        </div>


        <!-------------------------------⟢ Stats ⟣-------------------------------->


        <div :key="item.name + 'statsdiv'" v-show="item.stats || item.active.length > 2 || item.passive.length > 2"
            class="grid self-start grid-cols-1 gap-2 py-2 text-xs whitespace-pre-line border-b border-base-300">

            <p v-html="item.stats" v-if="item.stats" class="leading-5 capitalize">
            </p>

            <p v-html="item.active" v-if="item.active.length > 2">
            </p>

            <p v-html="item.passive" v-if="item.passive.length > 2" :key="item.name + 'Passive'" class="text-pretty ">

            </p>
        </div>
        <!--  {{ item.passive }} first-line:font-bold  first-line:tracking-wide-->

        <div class="flex items-end pt-2">
            <p v-if="item.id" class="flex items-end gap-2 text-xs align-baseline grow">
                Item ID: <span class="font-mono">{{ item.id }}</span>
            </p>
            <p v-if="item.buy" class="flex items-center self-end justify-end gap-1 px-1 text-xs">

                <img src="@assets/img/icons/Gold.png" class="h-3" />
                {{ item.buy }}
            </p>
        </div>

    </div>

</template>

<style scoped></style>