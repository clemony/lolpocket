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
        class="size-8 rounded-full border border-base-200/95 p-1 shadow-sm"
        :class="
            cn(getShardClass(shard), {
                'bg-base-200/20': shard.name == 'none',
            })
        ">
        <icon
            :icon="getShardIcon(shard)"
            class="size-full shadow-standard"
            :class="
                cn(getShardClass(shard), {
                    'opacity-40': shard.name == 'none',
                })
            " />
    </div>
</template>
<style scoped></style>
