<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
import type { pocket, RuneSet } from 'types'
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const ds = useDataStore()
const rs = useRuneStore()

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(ps.getPocket(props.pocket.key))

const pocketIndex = computed(() => {
    const index = ps.pockets.findIndex((p) => p.key == props.pocket.key)
    if (index && index != -1) {
        return index
    }
})
const runeIndex = ref(rs.selectedRuneSetIndex)

const set = computed(() => {
    return pocket.value.runes[0].runeSets[runeIndex.value]
})

onMounted(() => {
    rs.selectedRuneSetIndex = 0
})

console.log(pocketIndex.value)
console.log(
    'this',
    ps.pockets[pocketIndex.value].runes[0].runeSets[runeIndex.value].shards[0]
)
</script>

<template>
    <div class="flex justify-center" :key="set.key">
        <div
            class="grid max-w-64 grid-cols-3 place-items-center gap-x-12 gap-y-7">
            <label
                v-for="shard in ds.shards"
                :class="shard.name"
                v-tooltip="{
                    content: shard.stats,
                    theme: 'tt',
                    placement: 'bottom-start',
                    distance: 8,
                    skidding: 40,
                }"
                class="group/shard shard rounded-full transition-all duration-300"
                :alt="shard.stats"
                :data-tag="shard.color">
                <input
                    v-if="shard.slotID == 1"
                    type="radio"
                    :name="shard.slotName"
                    :value="shard"
                    v-model="set.shards[0]"
                    @change="console.log(set)"
                    class="peer hidden" />

                <input
                    v-if="shard.slotID == 2"
                    type="radio"
                    :name="shard.slotName"
                    :value="shard"
                    v-model="set.shards[1]"
                    class="peer hidden" />
                <input
                    v-if="shard.slotID == 3"
                    type="radio"
                    :name="shard.slotName"
                    :value="shard"
                    v-model="set.shards[2]"
                    class="peer hidden" />

                <div
                    class="shard-color flex size-12 items-center justify-center rounded-full border border-base-300 bg-gradient-to-br from-base-200/20 to-base-200/30 bg-clip-padding p-2.5 shadow-standard ring-1 ring-transparent ring-offset-2 ring-offset-transparent transition-all duration-300">
                    <Icon
                        :icon="shard.icon"
                        class="z-[500] size-6 text-base-content transition-all duration-300" />
                </div>
            </label>
        </div>
    </div>
</template>

<style scoped>
/* beautify ignore:start */
/* prettier ignore */
.offense:has(input:checked)label:not(:has(input:checked)) {
    @apply opacity-10;
}

.color-info:has(:checked) {
    @apply transition-all duration-500;
}

.shard:hover,
.shard:has(:checked) {
    @apply !opacity-100 *:!opacity-100;
}

.shard:has(:checked) .shard-color {
    background: radial-gradient(
        circle,
        oklch(var(--b2) / 20%) 90%,
        oklch(var(--b2) / 80%) 100%
    );

    @apply border-neutral/15 shadow-[inset_1px_2px_1px_2px_#00000010,_inset_-1px_-1px_2px_1px_#00000009] ring-1 ring-neutral/15 ring-offset-1 ring-offset-base-200;
    & svg {
        @apply !text-neutral-content/95;
    }
}

[data-tag='color-info']:hover,
[data-tag='color-info']:has(:checked) {
    svg {
        @apply text-sorcery drop-shadow-xs;
    }
}

[data-tag='color-info']:has(:checked) {
    @apply bg-sorcery/80;
}

[data-tag='color-success']:hover,
[data-tag='color-success']:has(:checked) {
    svg {
        @apply text-resolve drop-shadow-xs;
    }
}

[data-tag='color-success']:has(:checked) {
    @apply bg-resolve/90;
}

[data-tag='color-cyan']:hover,
[data-tag='color-cyan']:has(:checked) {
    svg {
        @apply text-inspiration drop-shadow-xs;
    }
}

[data-tag='color-cyan']:has(:checked) {
    @apply bg-inspiration;
}

[data-tag='color-warning']:hover,
[data-tag='color-warning']:has(:checked) {
    svg {
        @apply text-precision drop-shadow-xs;
    }
}

[data-tag='color-warning']:has(:checked) {
    @apply bg-precision;
}
</style>
