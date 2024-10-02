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
    <div class="self-end py-2 pl-1.5">
        <div class="p-1 font-semibold tracking-wide"> Category</div>
        <ul
            class="rounded-lg bg-base-200/60 pointer-events-none pb-2 [&_label]:py-1.5 [&_span]:!text-xs overflow-y-scroll  p-2 ">


            <li v-for="cat in ds.uniqueCats">
                <label class="justify-start gap-4 cursor-pointer pointer-events-auto label ">
                    <input type="checkbox" :value="cat" :id="cat" v-model="is.catFilters"
                        class="checkbox opacity-80 checkbox-xs checked:checkbox-neutral rounded-[4px]" />
                    <span class="label-text"> {{ cat }}</span>

                </label>

            </li>
        </ul>
    </div>
</template>


<style scoped>
/* beautify ignore:start */
.tab:is(.v-popper--shown .tab) {
    @apply tab-active shadow-sm backdrop-brightness-150 after:hover:!opacity-0;
  }

.v-popper--theme-menuLight .v-popper__inner {
    @apply !rounded-b-box !rounded-tr-none;
}</style>