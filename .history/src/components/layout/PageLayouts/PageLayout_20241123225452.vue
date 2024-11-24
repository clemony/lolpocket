<script setup lang="ts">
const props = defineProps<{
    nav?
    noFade?: boolean
}>()
</script>

<template>
    <div
        class="backdrop-saturate-125 backdrop-contrast-5 pointer-events-none absolute z-50 mt-[35px] grid h-24 w-full grid-cols-[1fr_4fr_2fr] items-center bg-base-100/60 pl-3 pr-12 pt-3.5 backdrop-blur-md backdrop-brightness-[98%]"
        :class="{ 'mask grid-rows-[50px_25px] mask-b-10': !props.noFade }">
        <div
            class="pointer-events-auto flex w-40 min-w-40 max-w-40 items-center px-8">
            <h1
                class="self-end pl-0.5 pt-2.5 font-semibold tracking-tight first:capitalize">
                <slot name="header" />
            </h1>
        </div>
        <div class="pointer-events-auto grid self-end">
            <div class="flex h-full w-full items-end gap-10 pl-2">
                <slot name="header-center" />
            </div>
            <div class="relative mb-0.5 flex h-3 w-full overflow-hidden">
                <slot name="indicator" />
            </div>
        </div>
        <div
            class="pointer-events-auto relative mr-2 flex h-full w-full items-center justify-end gap-8">
            <slot name="header-end" />
        </div>
    </div>

    <div class="flex size-full justify-center">
        <slot name="content" class="" />
    </div>

    <div
        v-if="!props.noFade"
        class="pointer-events-none row-span-full w-full" />
</template>

<style scoped></style>
