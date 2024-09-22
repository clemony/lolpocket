<script setup lang="ts">
import { computed } from 'vue';
import { useItemStore } from "../../stores/itemStore";
import { useDataStore } from "../../stores/dataStore";


const ds = useDataStore();
const is = useItemStore();

const icons = [{
    index: 0,
    icon: ['teenyicons:circle-solid'],
},
{
    index: 1,
    icon: ['']
},];


</script>

<template>
    <VDropdown theme="menuDark" placement="bottom-end" class=" border-none join-item btn btn-xs t btn-outline">

        <button class="flex">
            <icon icon="ph:brackets-curly" class="size-4" />
        </button>

        <template #popper>

            <!--             <div v-if="is.tierFilters.length > 0" class="z-10 flex items-center gap-3 justify-self-start btn-xs">
                <div
                    class="filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success bg-success relative mb-2 top-[3px] right-[0px] after:rounded-full after:animate-ping">
                </div>


                <Icon icon="teenyicons:x-outline" class=" self-center  size-3 -mt-[2px] p-0"
                    @click="is.tierFilters.length = 0" alt="Reset Filters" title="Reset Filters" />
            </div> -->




            <ul class="pointer-events-none pb-2 [&_label]:py-1.5 [&_span]:!text-xs overflow-y-scroll h-full p-2">


                <li v-for="tier in ds.uniqueTiers">
                    <label class="justify-start gap-4 cursor-pointer pointer-events-auto label *:text-neutral-content">
                        <input type="checkbox" :value="tier" :id="tier" v-model="is.tierFilters"
                            class="checkbox checkbox-xs checked:checkbox-info rounded-[4px]" />
                        <span class="label-text"> {{ tier }}</span>

                    </label>

                </li>
            </ul>

        </template>
    </VDropdown>
</template>

<style scoped>
.active,
.v-popper--shown {
    @apply bg-neutral text-neutral-content;
}

.active {
    @apply ring-1 ring-offset-1 ring-neutral ring-offset-base-100;
}
</style>