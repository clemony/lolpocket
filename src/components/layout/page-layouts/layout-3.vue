<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'


const props = defineProps<{
    pocketKey?: string
    col2Class?: HTMLAttributes['class']

}>()
</script>

<template>
<div class="grid grid-cols-[120px_auto_300px]  gap-10 h-[calc(100%-30px)] max-h-[calc(100%-30px)] w-full pr-8 pl-4 relative"
    :key="props.pocketKey">

    <div class="h-fit w-full items-start gap-3">
        <div class="flex flex-col h-auto gap-4 font-medium tracking-tight ">
            <LayoutSpacer />
            <slot name="col1" />
        </div>
    </div>

    <div
        :class="cn('carousel carousel-vertical w-full h-full max-h-inherit overflow-x-hidden overflow-y-scroll ', props.col2Class)">


        <slot name="col2" />
    </div>





    <div class="relative h-full max-h-full">
        <LayoutSpacer />

        <slot name="col3" />
    </div>
</div>
</template>

<style scoped></style>