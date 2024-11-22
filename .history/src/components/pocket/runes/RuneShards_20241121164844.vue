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
            <Tooltip
                dark
                v-for="shard in ds.shards"
                :key="shard.name + shard.slotID"
                :content="shard.stats">
                <label
                    :class="shard.name"
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
                        :class="
                            cn(
                                /* b4 */
                                'size-full backdrop-blur-sm',
                                /* border */
                                'border border-b-base-300 border-l-base-300/60 border-r-base-300 border-t-base-300/60',

                                /* shadow */
                                'shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008]',

                                /* struct  */
                                'grid size-14 shrink-0 place-items-center overflow-hidden rounded-full p-3.5',

                                getShardClass(shard)
                                    .toString()
                                    .replace(/border.*/, ''),
                                {
                                    'bg-base-200/20': shard.name == 'none',
                                }
                            )
                        "
                        :style="{
                            backgroundImage:
                                'url(/img/ui/asphalt-dark.png),linear-gradient(135deg,oklch(var(--b1) / 0.6) 50%, oklch(var(--b2)) 100%)',
                            backgroundSize: '130%',
                        }">
                        <icon
                            :icon="getShardIcon(shard)"
                            class="size-full rounded-full opacity-90 brightness-95 drop-shadow-xs"
                            :class="
                                cn(getShardClass(shard), {
                                    'opacity-40': shard.name == 'none',
                                })
                            " />
                    </div>
                </label>
            </Tooltip>
        </div>
    </div>
</template>

<style scoped></style>
