<script setup lang="ts">
import { useItemStore } from '@stores/itemStore'
const is = useItemStore()

function filter() {
    is.sortName = ''
    is.sortPrice = ''
    is.statFilters.splice(0)
    is.catFilters.splice(0)
}
</script>

<template>
<VDropdown theme="menuLight" placement="bottom" :overflowPadding="19" show-group="menu-bar" role="tablist"
    class="tabs tabs-lifted relative -mr-[1px] w-10 border-none">
    <button role="tab"
        class="hover:drop-shadow-soft tab px-2 after:absolute after:top-[0px] after:h-[27px] after:w-10 after:rounded-btn after:border after:border-base-300/70 after:opacity-0 after:shadow-inner after:transition-all after:duration-100 hover:after:opacity-100">
        <icon icon="teenyicons:filter-outline" class="-mt-1.5 size-3.5" />
    </button>

    <template #popper role="tabpanel" class="tab-content border-r border-l-base-300">
        <div class="grid w-auto grid-cols-[1fr_1.5fr] gap-3">
            <div class="col-start-1 grid">
                <button :disabled="is.sortName == '' &&
                    is.sortPrice == '' &&
                    !is.statFilters.length &&
                    !is.catFilters.length
                    "
                    class="my-2 -ml-2 flex h-7 w-fit content-center items-center justify-start gap-3 justify-self-center rounded-btn p-0.5 px-3 text-mini font-bold hover:bg-base-200 disabled:opacity-40 disabled:hover:bg-transparent"
                    @click="filter()">
                    <icon icon="ph:eraser" class="size-3.5 opacity-80" />
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
