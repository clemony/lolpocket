<script setup lang="ts">
const props = defineProps<{
    nav?
}>()
</script>

<template>
    <div
        class="absolute top-0 z-50 grid h-[65px] w-full grid-cols-[1fr_4fr_2fr] items-center border-b border-base-200 bg-base-100/60 pr-6 pt-3.5 backdrop-blur-md backdrop-brightness-[98%]">
        <!--     <div class="ml-5 flex w-full gap-10 pb-0.5 pl-4 h-full ">
 -->
        <div class="mt-10 flex w-40 min-w-40 max-w-40 items-center px-8">
            <h1
                class="self-end pl-0.5 pt-2.5 font-semibold tracking-tight first:capitalize">
                <slot name="header" />
            </h1>
        </div>
        <div class="grid self-end">
            <div class="flex h-full w-full items-end gap-10 pl-2">
                <slot name="header-center" />
            </div>
            <div class="relative mb-0.5 flex h-3 w-full overflow-hidden">
                <slot name="indicator" />
            </div>
        </div>
        <div
            class="relative mr-2 flex h-full w-full items-center justify-end gap-8">
            <slot name="header-end" />
        </div>
        <!-- </div> -->
    </div>

    <div class="flex size-full justify-center">
        <slot name="content" class="" />
    </div>
</template>

<style scoped></style>
