<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { vTooltip } from 'floating-vue'

const {
    // main query properties
    state,
    asyncStatus,

    refresh,
    refetch,
    // convenient aliases
    error,
    data,
    status,
    isLoading,
    isPending,
    isPlaceholderData,
} = useQuery({
    key: ['spells'],
    query: () => fetch('/api/spells.json').then((res) => res.json()),
})
console.log('status', asyncStatus.value)
console.log('data', state.value)
console.log('data', state.value.data)
</script>
<template>
    <div v-if="asyncStatus === 'loading'">
        <icon icon="svg-spinners:bouncing-ball" class="size-7" />
    </div>
    <div v-else-if="state.status === 'error'">Oops, an error happened...</div>
    <div v-else-if="state.data">
        <VTooltip
            theme="tt"
            placement="bottom-start"
            v-for="spell in state.data"
            :key="spell.name"
            class="w-fit">
            <Button
                variant="outline"
                size="icon"
                class="aspect-square size-fit overflow-hidden">
                <img
                    :src="`/img/spells/Summoner${spell.name}.webp`"
                    class="size-14" />
            </Button>
            <template #popper>
                {{ spell.name }}
            </template>
        </VTooltip>
    </div>
</template>
