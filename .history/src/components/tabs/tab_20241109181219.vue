<script setup lang="ts">
import { inject, defineProps } from 'vue';

const props = defineProps<{
    value: any;
}>();

const tabValue = inject('tabValue');
const updateTab = inject('updateTab') as (value: number) => void;

if (!tabValue || !updateTab) {
    console.warn('Failed to inject tabValue or updateTab');
}
</script>

<template><label role="tab" :class="{ 'tab-active': tabValue === props.value }"
    class="tab !z-20 text-base absolute max-w-24 order-last:left-24  top-0 left-0  [--tab-border-color:oklch(var(--b2))]"
    @click="updateTab(props.value)" v-bind="$attrs">
    <slot name="header" />
</label>

<div v-if="tabValue === props.value" role="tabpanel" :class="{ 'rounded-tl-none !max-w-full': props.value === 1 }"
    class="shadow-sm mb-1 absolute top-7  left-0 flex tab-content !w-inherit min-w-[298px] rounded-box border-base-200 bg-base-100/90 py-4 px-5">
    <slot name="content" />
</div>
</template>

<style scoped>
:root {}

.tab-active {
    @apply !z-30 shadow-[6px_4px_5px_1px_oklch(var(--b1))] border-base-200;
}

.tab-active:is(:nth-child(2)) {
    @apply !z-30 !shadow-[0px_6px_3px_4px_oklch(var(--b1))] brightness-[99%];
}

.first.tab:is(.tab-active):before {
    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

/*
.last.tab:is(.tab-active):before {
    background-image: var(--radius-start) !important;
    background-position: top left !important;
}*/
</style>
