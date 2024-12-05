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
    <template v-for="(shard, i) in set.shards" :key="i">
        <template v-if="i < 4">
            <div
                class="grid size-7 shrink-0 place-items-center rounded-full"
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
                    class="size-full rounded-full drop-shadow-md"
                    :class="
                        cn(getShardClass(shard), {
                            'opacity-40': shard.name == 'none',
                        })
                    " />
            </div>
        </template>
    </template>
    <style scoped></style>
</template>
