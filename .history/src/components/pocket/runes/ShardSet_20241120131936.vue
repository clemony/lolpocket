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
        class="hadow-pretty relative z-0 size-8 shrink-0 self-center rounded-full border border-base-200 bg-base-100/50 p-1.5 backdrop-blur-sm"
        :class="
            cn(getShardClass(shard), {
                'bg-base-200/20': shard.name == 'none',
            })
        ">
        <icon
            :icon="getShardIcon(shard)"
            class="size-full rounded-full"
            :class="
                cn(getShardClass(shard), {
                    'opacity-40': shard.name == 'none',
                })
            " />
    </div>
</template>
<style scoped></style>
