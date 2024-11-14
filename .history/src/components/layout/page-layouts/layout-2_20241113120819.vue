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
            <ScrollArea
                :class="{
                    'overflow-y-auto overflow-x-hidden': props.scroll,
                    'overflow-hidden': !props.scroll,
                }"
                class="relative h-full max-h-full">
                <LayoutSpacer />
                <slot name="panel1" />
            </ScrollArea>
        </ResizablePanel>
        <ResizeHandle with-handle class="mt-36" />

        <ResizablePanel
            :default-size="panel2Size"
            :min-size="panel2MinSize"
            class="max-h-inherit relative px-3">
            <LayoutSpacer class="!mx-0" />
            <slot name="panel2" class="max-h-inherit" />
        </ResizablePanel>
    </ResizablePanelGroup>
</template>

<style scoped></style>
