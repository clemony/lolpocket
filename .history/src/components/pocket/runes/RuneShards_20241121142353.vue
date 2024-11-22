<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
import type { pocket } from 'types'
import { getShardIcon, getShardClass } from '@lib/functions/GetColor'

import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const ds = useDataStore()
const rs = useRuneStore()

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(ps.getPocket(props.pocket.key))

const runeIndex = ref(rs.selectedRuneSetIndex)

const set = computed(() => {
    return pocket.value.runes[0].runeSets[runeIndex.value]
})

onMounted(() => {
    rs.selectedRuneSetIndex = 0
})
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
                class="group/shard shard shine rounded-full transition-all duration-300"
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
                    class="grid size-14 shrink-0 place-items-center rounded-full border border-base-200 bg-base-100/70 p-1.5 shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008] backdrop-blur-sm"
                    :class="
                        cn(
                            getShardClass(shard)
                                .toString()
                                .replace(/border.*/, ''),
                            {
                                'bg-base-200/20': shard.name == 'none',
                            }
                        )
                    ">
                    <icon
                        :icon="getShardIcon(shard)"
                        class="size-full rounded-full drop-shadow-sm"
                        :class="
                            cn(getShardClass(shard), {
                                'opacity-40': shard.name == 'none',
                            })
                        " />
                </div>
            </label>
        </div>
    </div>
</template>

<style scoped>
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
        @apply !text-neutral-content/90;
    }
}
</style>
