<script setup lang="ts">
import { makeBox } from '@utils/makeBox'
import type { pocket, RuneSet } from 'types'
import { getColor } from '@utils/GetColor'

const props = defineProps<{
    pocket: pocket
    set: RuneSet
}>()

const pocket = ref(props.pocket)

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})
</script>
<template>
    <div
        class="flex w-full shrink-0 justify-center gap-0.5 rounded-full p-1.5 shadow-inset"
        :style="{
            background: `linear-gradient(to right, var(--${set.secondary}), var(--${set.secondary}-light)`,
        }">
        <template v-for="(item, i) in items" :key="item.id">
            <div
                v-if="i < 6"
                :key="item.id"
                class="z-10 size-10 shrink-0 rounded-full p-0 shadow-warm"
                :style="{
                    zIndex: items.length + 1 - i,
                }">
                <Item
                    :item="item"
                    :pocket="pocket"
                    imgClass="rounded-full  !p-0 m-0 object-center  size-full "
                    class="z-0 !size-full rounded-full !p-0"
                    labelClass=" !p-0 !border-0  overflow-hidden rounded-full" />
            </div>
        </template>
        <ShadowedPlaceholder
            v-for="index in makeBox(items.length, 6)"
            class="size-10 rounded-full border-black/5"
            :style="{
                backgroundColor: `var(--${set.secondary}-light`,

                zIndex: 6 + 1 - index,
            }" />
    </div>
</template>

<style scoped></style>
