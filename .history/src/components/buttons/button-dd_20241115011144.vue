<script setup lang="ts">
import { pocket } from 'types'

const props = defineProps<{
    pocket?: pocket
    left?: boolean
}>()
</script>

<template>
    <Button
        variant="ghost"
        size="sm"
        class="flex h-full w-full flex-nowrap items-center gap-2 !border-0 pr-1 !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200 data-[state=open]:shadow-sm data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40"
        :class="{ '!h-full': props.left, 'justify-end': !props.left }">
        <div
            class="mr-2 mt-1 flex grow flex-col items-center justify-end gap-1.5 text-right leading-tight"
            :class="{ '!mr-0 ml-2 w-full !text-left !text-base': props.left }">
            <slot name="text" />
        </div>
        <div :class="{ 'order-first': props.left }" class="content-end">
            <slot name="icon" />
        </div>

        <div class="relative h-full w-3 shrink-0 items-center justify-end">
            <icon
                icon="teenyicons:caret-vertical-small-outline"
                class="absolute right-0 top-[38.5%] size-5 opacity-60"
                :class="{ 'right-2': props.left }" />
        </div>
    </Button>
</template>

<style scoped></style>
