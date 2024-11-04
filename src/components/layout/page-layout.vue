<script setup lang="ts">
const props = defineProps<{
    nav?
}>()
</script>

<template>
<div class="w-full   items-center pt-3.5  pr-6 border-b border-base-200 h-[70px]">
    <div class="ml-5 flex w-full gap-10 pb-0.5 pl-2 h-full">

        <div class=' w-28 max-w-28 min-w-28 items-center flex'>
            <h2 class="!text-xl font-semibold tracking-tight first:capitalize ">
                <slot name="header" />
            </h2>
        </div>
        <div class="grid self-end">
            <div class="flex w-full gap-10 pl-2 h-full items-end">
                <slot name="header-center" />
            </div>
            <div class='w-full h-3 flex mb-0.5 relative overflow-hidden'>
                <slot name="indicator" />
            </div>
        </div>
        <div class='flex  gap-8 w-full mr-2 h-full relative items-center'>
            <slot name="header-end" />
        </div>
    </div>
</div>

<div class='size-full'>
    <slot name="content" />
</div>
</template>

<style scoped></style>