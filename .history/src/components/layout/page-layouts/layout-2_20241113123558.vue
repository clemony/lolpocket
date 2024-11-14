<script setup lang="ts">
import { ResizablePanel } from '@/components/base/resizable'

const props = defineProps<{
    panel1Size?: number
    panel1MinSize?: number
    panel2Size?: number
    panel2MinSize?: number
    scroll?: boolean
}>()
</script>

<template>
    <ResizablePanelGroup
        direction="horizontal"
        class="h-[calc(100%-10px)] max-h-[calc(100%-10px)] w-full overflow-hidden px-5 pb-5">
        <ResizablePanel
            :default-size="panel1Size"
            :min-size="panel1MinSize"
            class="max-h-inherit relative h-inherit px-3">
            <LayoutSpacer v-if="!props.scroll" />
            <slot name="panel1" />
        </ResizablePanel>
        <ResizeHandle with-handle class="mt-36" />

        <ResizablePanel
            :default-size="panel2Size"
            :min-size="panel2MinSize"
            class="max-h-inherit relative">
            <LayoutSpacer class="" />
            <slot name="panel2" class="max-h-inherit" />
        </ResizablePanel>
    </ResizablePanelGroup>
</template>

<style scoped></style>
