<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useItemStore } from '@stores/itemStore'
const is = useItemStore()

const sortNameStatus = computed(() => {
    if (is.sortName) {
        return 'ON'
    } else {
        return 'OFF'
    }
})

const sortPriceText = computed(() => {
    let text = ''
    if (is.sortPrice == 'ascending') {
        text = 'From Low'
    } else if (is.sortPrice == 'descending') {
        text = 'From High'
    } else {
        text = 'Price'
    }
    return text
})
</script>
<template><!--     <div v-if="is.sortName != '' || is.sortPrice != ''" class="z-10 flex items-center gap-3 justify-self-start btn-xs">
      <div
        class="filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success bg-success relative mb-2 top-[3px] right-[0px] after:rounded-full after:animate-ping">
      </div>

      <Icon icon="iconoir:bin-full" class="self-center  size-[1rem] p-0" @click="is.sortName = ''; is.sortPrice = ''"
        alt="Remove Sort" title="Remove Sort" />
    </div>
 -->

<div class="grid">
    <!-------------------------------⟢ Name ⟣-------------------------------->

    <div class="-ml-2 grid w-full items-center justify-center gap-3 pb-3 pt-1">
        <div class="relative flex w-full items-center gap-2 px-1">
            <label :class="{ 'opacity-40': is.sortName != 'az' }">
                <input type="radio" value="az" v-model="is.sortName" class="peer hidden" />
                <kbd class="kbd aspect-square overflow-clip p-0 *:size-6">
                    <icon icon="mynaui:letter-a" />
                </kbd>
            </label>

            <button v-if="is.sortName == 'az'" @click="is.sortName = ''"
                class="absolute left-[5px] top-0.5 z-10 size-6 opacity-0"></button>

            <icon v-if="is.sortName == ''" icon="codicon:arrow-swap" class="mb-1" />

            <icon v-if="is.sortName != ''" :class="{ 'rotate-180': is.sortName == 'za' }" icon="codicon:arrow-right"
                class="mb-1 transition-all duration-300" />

            <label :class="{ 'opacity-40': is.sortName != 'za' }">
                <input type="radio" value="za" v-model="is.sortName" class="peer hidden" />
                <kbd class="kbd aspect-square overflow-clip p-0 *:size-6">
                    <icon icon="mynaui:letter-z" />
                </kbd>
            </label>

            <button v-if="is.sortName == 'za'" @click="is.sortName = ''"
                class="absolute right-1 top-0.5 z-10 size-6 opacity-0"></button>
        </div>

        <!-------------------------------⟢ Price ⟣-------------------------------->

        <div class="relative flex w-full gap-2 px-1 py-0.5">
            <label :class="{
                'opacity-40 ring-0': is.sortPrice != 'ascending',
            }" class="z-10">
                <input type="radio" value="ascending" v-model="is.sortPrice" class="peer hidden" />
                <kbd class="kbd aspect-square p-0 *:size-5">
                    <icon icon="system-uicons:coin" />
                </kbd>
            </label>

            <button v-if="is.sortPrice == 'ascending'" @click="is.sortPrice = ''"
                class="absolute left-[5px] top-0.5 z-10 size-6 border opacity-0"></button>

            <icon v-if="is.sortPrice == ''" icon="codicon:arrow-swap" class="mt-1.5" />

            <icon v-if="is.sortPrice != ''" :class="{ 'rotate-180': is.sortPrice == 'descending' }"
                icon="codicon:arrow-right" class="mt-1.5 transition-all duration-300" />

            <label :class="{ 'opacity-40': is.sortPrice != 'descending' }" class="z-0">
                <input type="radio" value="descending" v-model="is.sortPrice" class="peer hidden" />
                <kbd class="kbd aspect-square p-0 *:size-5">
                    <icon icon="system-uicons:coins" />
                </kbd>
            </label>

            <button v-if="is.sortPrice == 'descending'" @click="is.sortPrice = ''"
                class="absolute right-1 top-0.5 z-10 size-6 border opacity-0"></button>
        </div>
    </div>
</div>
</template>

<style scoped>
/* beautify ignore:start */
.tab:is(.v-popper--shown .tab) {
    @apply tab-active shadow-sm backdrop-brightness-150 after:hover:!opacity-0;
}</style>
