<script setup lang="ts">
import { pocket } from 'types';

const props = defineProps<{
    pocket?: pocket
    left?: boolean
}>()
</script>

<template><Button variant="ghost" size="lg"
    class="!border-0 flex gap-2 pr-4 items-center  h-full data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40 data-[state=open]:shadow-sm !ring-0 focus:!ring-1 focus:!outline-0 focus:!ring-base-200 focus:!border-0 flex-nowrap"
    :class="{ '!h-full': props.left }">


    <div class="flex flex-col leading-tight grow  text-right mr-2 items-center justify-end mt-1 gap-1.5"
        :class="{ '!text-left !mr-0 ml-2': props.left }">
        <slot name="text" />

    </div>
    <div :class="{ 'order-first': props.left }" class='content-end'>
        <slot name="icon" />
    </div>

    <div class='h-full  w-4 items-center justify-end shrink-0 relative'>
        <icon icon="ph:caret-up-down" class="size-5 absolute right-0 top-[40%]" :class="{ 'right-2': props.left }" />
    </div>
</Button></template>






<style scoped></style>