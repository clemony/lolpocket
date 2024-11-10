<script setup lang="ts">

</script>

<template>
<ResizablePanelGroup direction="horizontal"
    class=" h-[calc(100%-30px)] max-h-[calc(100%-30px)] w-full px-6 overflow-hidden ">
    <ResizablePanel class="relative max-h-inherit ">
        <slot name="panel1" />
    </ResizablePanel>
    <ResizeHandle with-handle class='!w-4 mx-3' />

    <ResizablePanel :default-size="30" :min-size="10" class="relative max-h-inherit ">
        <slot name="panel2" />
    </ResizablePanel>
</ResizablePanelGroup>
</template>

<style scoped></style>