<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useItemStore } from '@stores/itemStore'
import { useDataStore } from '@stores/dataStore'
import { useRuneStore } from '@stores/runeStore'

const ds = useDataStore()
const is = useItemStore()
const rs = useRuneStore()
const runes = ds.runes

onMounted(() => {
    const ds = useDataStore()
    const is = useItemStore()
    const fs = ds.getShards()
})
</script>

<template>
<div class="flex justify-center">
    <div class="grid max-w-64 grid-cols-3 place-items-center gap-x-12 gap-y-7">
        <label v-for="shard in ds.shards" :class="shard.name" v-tooltip="{
            content: shard.stats,
            theme: 'tt',
            placement: 'bottom-start',
            distance: 8,
            skidding: 40,
        }" class="group/shard shard rounded-full transition-all duration-300" :alt="shard.stats"
            :data-tag="shard.color">
            <input type="radio" :name="shard.slotName" :value="shard.name" v-model="rs.shardModels['v' + rs.selectedSetKey + shard.slotName]
                " class="peer hidden" @change="rs.updateShards" />
            <div
                class="shard-color shadow-standard flex size-14 items-center justify-center rounded-full border border-base-300 bg-gradient-to-br from-base-200/20 to-base-200/30 bg-clip-padding p-2.5 ring-1 ring-transparent ring-offset-2 ring-offset-transparent transition-all duration-300">
                <Icon :icon="shard.img" class="transition-all duration-300 size-10" />
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

    @apply shadow-[inset_1px_2px_1px_2px_#00000010,_inset_-1px_-1px_2px_1px_#00000009] border-neutral/15 ring-1 ring-offset-1 ring-offset-base-200 ring-neutral/15;
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
}</style>
