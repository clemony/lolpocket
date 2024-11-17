<script setup lang="ts">
import { useQuery } from '@pinia/colada'

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
        <template v-for="spell in state.data" :key="spell.name">
            {{ spell.name }}
            <Button
                variant="outline"
                size="icon"
                class="aspect-square size-fit">
                <img
                    :src="`/img/spells/Summmoner${spell.name}.webp`"
                    class="size-14" />
            </Button>
        </template>
    </div>
</template>
