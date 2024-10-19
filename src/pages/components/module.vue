<script setup lang="ts">

const props = defineProps<{
    name: string;
}>();

</script>

<template>
    <vue-draggable-resizable :parent="true" :minWidth="60" :min-height="60"
        class='min-size-16 !border !border-solid !border-base-300 !rounded-md shadow-warm'>
        <template #tl>
            <icon icon="tabler:border-corner-rounded" class=' size-4 cursor-nwse-resize' />
        </template>

        <template #tm>
            <icon icon="pepicons-pop:line-x" class=' size-4 cursor-ns-resize' />
        </template>

        <template #tr>
            <icon icon="tabler:border-corner-rounded" class='rotate-90 size-4 cursor-nesw-resize' />
        </template>

        <template #bl>
            <icon icon="tabler:border-corner-rounded" class='-rotate-90 size-4 cursor-nesw-resize' />
        </template>

        <template #bm>
            <icon icon="pepicons-pop:line-x" class=' size-4 cursor-ns-resize' />
        </template>

        <template #br>
            <icon icon="tabler:border-corner-rounded" class='rotate-180 size-4 cursor-nwse-resize' />
        </template>

        <template #ml>
            <icon icon="pepicons-pop:line-x" class='-ml-1 rotate-90 size-4 cursor-ew-resize' />
        </template>

        <template #mr>
            <icon icon="pepicons-pop:line-x" class='ml-0.5 rotate-90 size-4 cursor-ew-resize' />
        </template>

        <div class="w-full h-6 px-2 py-0.5 border-b border-base-300 flex flex-nowrap">
            <h2 class='sub-text grow'>{{ props.name }}</h2>
            <icon icon="teenyicons:x-outline" class='size-3.5' />
        </div>

        <div class='p-2'>
            <slot name="content" />
        </div>
    </vue-draggable-resizable>

</template>

<style>
.handle {
    @apply !border-transparent !bg-transparent size-4 opacity-0 grid place-items-center;
}
</style>