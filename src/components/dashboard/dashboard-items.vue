<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import type { ItemSet } from 'types'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))



const starredSet = computed(() => {
    if (pocket.value && pocket.value.items.length > 0) {
        return pocket.value.items[0].itemSets[
            pocket.value.items[0].starred
        ] as ItemSet
    }
    return null
})
</script>

<template>
<div class="max-w-[550px]">
    <div class="flex gap-1">
        <h2 v-if="starredSet" class="grow font-semibold capitalize tracking-tight">
            {{ starredSet.name }}
        </h2>

        <VTooltip theme="tt" class="flex items-center px-3" placement="bottom-start">
            <div class="flex cursor-help items-center gap-1 opacity-40">
                <icon icon="rivet-icons:info-circle" class="size-3.5" />
            </div>

            <template #popper>
                <div class="grid max-w-32 gap-1">
                    <span class="text-mini font-medium">Final Build</span>
                    <ul class="prose list-disc space-y-1 text-pretty py-1 pl-3 text-mini">
                        <li>
                            The first 6 items in a set will be declared your
                            <b>final build</b>.
                        </li>
                        <li>
                            Swap items & order to create your ideal set.
                        </li>
                    </ul>
                </div>
            </template>
        </VTooltip>
    </div>

    <div class="grid grid-cols-[40px_auto] items-center gap-4">
        <button class="btn btn-square btn-sm">
            <icon icon="iconamoon:swap-thin" class="size-5 rotate-90" />
        </button>

        <ItemsetItems v-if="starredSet" :set="starredSet" :pocketKey="pocket.key" :limit="6" />
    </div>

    <div class="grid grid-cols-[40px_auto] items-center gap-3">
        <VTooltip theme="tt" class="grid place-items-center" placement="right">
            <button
                class="!btn-square btn-ghost btn-sm mt-2.5 grid items-center overflow-hidden !bg-transparent hover:!bg-transparent">
                <icon icon="ph:tree-view-thin" class="size-6 cursor-help" />
            </button>
            <template #popper>
                <div class="max-w-36">
                    <p class="prose text-pretty">Planning situationally?</p>
                    <p class="prose text-pretty">
                        Add alternate items for each item slot.
                    </p>
                </div>
            </template>
        </VTooltip>

        <div
            class="grid grid-cols-6 content-center gap-2 [&_>div]:relative [&_>div]:mt-2.5 [&_>div]:items-center [&_>div]:before:absolute [&_>div]:before:-top-4 [&_>div]:before:right-0 [&_>div]:before:z-0 [&_>div]:before:h-5 [&_>div]:before:w-1/2 [&_>div]:before:border-l [&_>div]:before:border-l-neutral/20">
            <div v-for="(item, index) in pocket.items[0].alts.alt1" class="col-start-1">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt1" type="alt" :set="starredSet"
                    :index="index" />
            </div>

            <div v-for="(item, index) in pocket.items[0].alts.alt2" class="col-start-2">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt2" type="alt" :set="starredSet"
                    :index="index" />
            </div>

            <div v-for="(item, index) in pocket.items[0].alts.alt3" class="col-start-3">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt3" type="alt" :set="starredSet"
                    :index="index" />
            </div>

            <div v-for="(item, index) in pocket.items[0].alts.alt4" class="col-start-4">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt4" type="alt" :set="starredSet"
                    :index="index" />
            </div>

            <div v-for="(item, index) in pocket.items[0].alts.alt5" class="col-start-5">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt5" type="alt" :set="starredSet"
                    :index="index" />
            </div>

            <div v-for="(item, index) in pocket.items[0].alts.alt6" class="col-start-6">
                <ItemSlot v-if="starredSet" :pocketKey="pocket.key" alt="alt6" type="alt" :set="starredSet"
                    :index="index" />
            </div>
        </div>
    </div>
</div>

<button v-if="pocket.items[0].alts[0]" class="btn btn-sm">btn</button>
</template>

<style scoped></style>
