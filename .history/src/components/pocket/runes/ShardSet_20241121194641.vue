<script setup lang="ts">
import type { pocket } from 'types'
import { getShardIcon, getShardClass } from '@lib/functions/GetColor'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <div
        v-for="shard in set.shards"
        :key="shard.name + shard.slotID"
        class="grid size-9 shrink-0 place-items-center rounded-full border border-base-200 bg-base-100/70 p-1.5 shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008] backdrop-blur-sm"
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
</template>
<style scoped></style>
