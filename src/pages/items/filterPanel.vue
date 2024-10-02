<script setup lang="ts">
import { useItemStore } from '../../stores/itemStore';
const is = useItemStore();
</script>

<template>
    <VDropdown theme="menuLight" placement="bottom" :overflowPadding="19" show-group="menu-bar" role="tablist"
        class="relative w-10 -mr-[1px] border-none tabs tabs-lifted ">
        <button role="tab"
            class="px-2 tab hover:after:opacity-100 after:w-10 after:transition-all after:duration-100 after:h-[27px] after:border-base-300/70 after:shadow-inner after:opacity-0 after:absolute after:rounded-btn after:border after:top-[0px] hover:drop-shadow-soft ">
            <icon icon="teenyicons:filter-outline" class="size-3.5 -mt-1.5 " />

        </button>






        <template #popper role="tabpanel" class="border-r tab-content border-l-base-300 ">
            <div class="grid w-auto grid-cols-[1fr_1.5fr] gap-3">
                <div class='grid col-start-1'>

                    <button
                        :disabled="is.sortName == '' && is.sortPrice == '' && is.statFilters.length == 0 && is.catFilters.length == 0"
                        class="flex items-center gap-3 disabled:opacity-40 disabled:hover:bg-transparent content-center p-0.5 h-7 -ml-2 my-2 hover:bg-base-200 text-mini font-bold  rounded-btn justify-start w-fit px-3 justify-self-center"
                        @click="{ is.sortName = ''; is.sortPrice = ''; is.statFilters.splice(0); is.catFilters.splice(0) }">

                        <icon icon='ph:eraser' class="opacity-80 size-3.5" />
                        CLEAR ALL

                    </button>


                    <Sort />
                    <TierFilters />
                </div>
                <div class="col-start-2">
                    <StatFilters />
                </div>
            </div>
        </template>
    </VDropdown>
</template>

<style scoped>
/* beautify ignore:start */
.tab:is(.v-popper--shown .tab) {
    @apply tab-active shadow-sm backdrop-brightness-150 after:hover:!opacity-0;
  }</style>
