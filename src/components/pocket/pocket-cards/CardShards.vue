<script setup lang="ts">
import type { pocket } from 'types'
import { getShardIcon, getShardClass } from '@utils/GetColor'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <div
        class="absolute -right-12 top-0 z-0 flex aspect-square h-full flex-col items-end gap-0.5 rounded-r-full bg-base-300/60 p-1 [&_:nth-child(2)]:absolute [&_:nth-child(2)]:right-5.5 [&_:nth-child(2)]:top-3.5">
        <template v-for="shard in set.shards" :key="shard.name">
            <div
                class="grid flex-nowrap place-items-center"
                :class="
                    cn(
                        shard.name != 'empty' ?
                            getShardClass(shard)
                                .toString()
                                .replace(/border.*/, '')
                        :   ''
                    )
                ">
                <icon
                    :icon="getShardIcon(shard)"
                    class="size-6 shrink-0 rounded-full drop-shadow-sm"
                    :class="
                        cn(getShardClass(shard), {
                            'opacity-40': shard.name == 'empty',
                        })
                    " />
            </div>
        </template>
    </div>
</template>
<style scoped></style>
