<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'

const props = defineProps<{
    params?: {
        data: {
            key: string
            bgColor: string
            iconColor: string
            icon: string
            name: string
            items: {}
            pinned: boolean
        }
        api: any
        node: any
    }
    ring?: boolean
    pocketKey?: string
    size?: number
    padding?: number
    square?: boolean
}>()


const pocket = computed(() => {
    const ps = usePocketStore();
    let lp = ''
    if (props.params) {
        lp = props.params.data.key;
    } else if (props.pocketKey) {
        lp = props.pocketKey;
    }
    return ps.getPocket(lp)
});



</script>

<template><button v-if="pocket"
    class="pointer-events-none apsect-square hover:shadow-warm group relative grid size-12 place-items-center rounded-full p-3.5 shadow-sm transition-all duration-300 hover:ring-1 hover:ring-[currentColor/60]"
    :class="{
        '!ring-4 ring-offset-0 ring-neutral-content/60': props.ring,
        '!rounded': props.square

    }" :style="{
        backgroundColor: pocket.bgColor,
        color: pocket.iconColor,
        width: props.size + 'px',
        height: props.size + 'px',
        padding: props.padding + 'px'
    }" @click.stop>
    <icon :style="{ color: pocket.iconColor }" :icon="`${pocket.icon}`" class="size-full" />

    <!--     <div :style="{
        backgroundColor: pocket.iconColor,
        color: pocket.bgColor,
        borderColor: pocket.bgColor,
    }"
        class="absolute right-0 top-0 grid size-4.5 place-items-center rounded-full border p-[2px] opacity-0 shadow-sm transition-all duration-300 *:size-full group-hover:opacity-80">
        <icon icon="ri:edit-fill" />
    </div> -->
</button></template>

<style scoped></style>
