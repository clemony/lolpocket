<script setup lang="ts">
import { Item } from '../../stores/dataStore';
import { ItemSet } from './../../stores/itemStore';
import { useItemStore } from './../../stores/itemStore';
import { useUserStore } from '../../stores/userStore';
import { toast } from 'vue3-toastify';
import { computed, watch } from 'vue';
import { useChampStore } from '../../stores/champStore';

const cs = useChampStore();
const is = useItemStore();
const props = defineProps<{
    item: Item;
    variant: string;
    set?: ItemSet;
    champ?;
}>();


// Watch for changes to likedItems and log the new value
watch(() => is.likedItems, (newVal) => {
    //console.log('likedItems changed:', newVal);
}, { immediate: true });

// Computed property to check if the item is liked
const isLiked = computed(() => {
    return is.likedItems.some(item => item.name === props.item.name);
});


</script>


<!-- This will be the content of the popover -->
<template v-if="props.item">
    <div class="relative grid p-4 !min-w-60  max-w-80 w-fit overscroll-none">
        <div class="grid grid-cols-[1fr_2fr] border-b border-base-300 pb-3 gap-2 w-full ">

            <div class="h-full col-start-1">
                <img :key="item.id" :src="item.img" :alt="item.name + ' Image'"
                    class="border rounded-md pointer-events-none border-base-300 shadow-warm" />
            </div>

            <!---------------------------⟢ Header ⟣---------------------------->

            <div class="grid h-full grid-cols-1">

                <div class="flex text-middle">

                    <h3 class="flex flex-wrap text-sm font-bold leading-4 tracking-tight">
                        {{ item.name }}
                    </h3>
                </div>

                <div class="flex items-end justify-end gap-2 ">

                    <button
                        class="btn btn-circle btn-neutral btn-xs aspect-square group/liked hover:opacity-75 *:size-3.5 *:absolute relative  *:transition-all *:duration-100"
                        @click="is.handleLike(item)">





                        <icon v-if="isLiked" icon="teenyicons:heart-solid" class="text-dark-rose" />
                        <icon icon="teenyicons:heart-outline" class="" :class="{ 'text-neutral/20': isLiked }" />




                    </button>



                    <a :href="item.wiki" target="_blank"
                        class="btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75"
                        alt="link to league wiki">

                        <Icon icon="teenyicons:link-outline" class="size-3" />

                        <!--  <Icon icon="teenyicons:link-remove-outline"
                            class="p-0 m-0 opacity-0 size-3 group-hover:opacity-100" />
 -->

                    </a>


                    <VDropdown v-if="props.variant == 'add'" theme="detail" :key="item.id + 'dropdown'"
                        class="flex items-center gap-2 border-none btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75">


                        <icon icon='teenyicons:add-solid' class="size-3.5" />




                        <template #popper :key="item.name + 'addToSet'">
                            <ul class="!w-full items-center p-2 grid gap-2 min-w-28 pointer-events-auto">
                                <span class="pl-2 cursor-default">Add to Set</span>
                                <li v-for="set in is.itemSets" class="justify-start btn btn-xs btn-ghost "
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

                    <button v-if="props.variant == 'remove' && props.champ"
                        class=" btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75" alt="remove from set"
                        title="remove from set" @click="cs.removeFromSet(item, props.champ)">


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