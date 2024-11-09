<script setup lang="ts">
const props = defineProps<{
    nav?
}>()
</script>

<template>
<div
    class="w-full top-0 absolute bg-base-100/60 backdrop-blur-md backdrop-brightness-[98%]  items-center pt-3.5 z-50 pr-6 border-b border-base-200 grid grid-cols-[1fr_4fr_2fr] h-[65px]">
    <!--     <div class="ml-5 flex w-full gap-10 pb-0.5 pl-4 h-full ">
 -->
    <div class=' w-40 max-w-40 min-w-40 items-center px-8 flex'>
        <h1 class=" font-semibold tracking-tight self-end pt-2.5 pl-0.5 first:capitalize ">
            <slot name="header" />
        </h1>
    </div>
    <div class="grid self-end">
        <div class="flex w-full gap-10 pl-2 h-full items-end">
            <slot name="header-center" />
        </div>
        <div class='w-full h-3 flex mb-0.5 relative overflow-hidden'>
            <slot name="indicator" />
        </div>
    </div>
    <div class='flex  justify-end gap-8 w-full mr-2 h-full relative items-center'>
        <slot name="header-end" />
    </div>
    <!-- </div> -->
</div>

<div class='size-full flex justify-center'>
    <slot name="content" class='' />
</div>
</template>

<style scoped></style>