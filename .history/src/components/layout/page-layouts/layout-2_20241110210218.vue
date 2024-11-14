<script setup lang="ts">
import { ResizablePanel } from '@/components/base/resizable'

const props = defineProps<{
    panel1Size?: number
    panel1MinSize?: number
    panel2Size?: number
    panel2MinSize?: number
}>()
</script>

<template>
<ResizablePanelGroup direction="horizontal"
    class=" h-[calc(100%-30px)] max-h-[calc(100%-30px)] w-full px-8 pb-5 overflow-hidden ">
    <ResizablePanel :default-size="panel1Size" :min-size="panel1MinSize" class="relative max-h-inherit ">
        <slot name="panel1" />
    </ResizablePanel>
    <ResizeHandle with-handle class=' mx-6 mt-40 bg-base-200' />

    <ResizablePanel :default-size="panel2Size" :min-size="panel2MinSize" class="relative max-h-inherit ">
        <slot name="panel2" class='max-h-inherit' />
    </ResizablePanel>
</ResizablePanelGroup>
</template>

<style scoped></style>