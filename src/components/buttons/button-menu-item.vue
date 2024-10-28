<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();
const props = defineProps<{
    badge?: string
    array?: any
}>()
</script>

<template><button
    :class="{ 'm-0 flex size-[40px] place-items-center justify-center rounded-md p-0 hover:!border hover:!border-neutral/20 hover:bg-transparent [&_span]:hidden [&_svg]:opacity-100 [&_svg]:size-4 [&_div.badge]:hidden': gs.isMinimized }"
    class='group relative grow flex h-7 max-h-7  py-1 px-1.5 cursor-pointer items-center  flex-nowrap justify-start gap-3 [&_span]:font-medium rounded hover:!bg-neutral/5 shrink-0 [&_svg]:size-4 [&_svg]:shrink-0 [&_span]:truncate  [&_span]:grow [&_span]:text-left [&_span]:w-full '>
    <slot />
    <div v-if="props.badge && array.length > 0"
        class="justify-self-end badge  absolute right-2 pointer-events-none text-[11px] badge-sm opacity-80 group-hover:opacity-60"
        :class="{
            'badge-neutral': props.badge == 'neutral',
            'badge-ghost': props.badge == 'ghost',
        }">
        {{ array.length }}
    </div>
</button></template>

<style scoped></style>