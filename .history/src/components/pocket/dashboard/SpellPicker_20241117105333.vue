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
    query: () => fetch('@/data/spells').then((res) => res.json()),
})

console.log('state', state.value.data)
</script>
<template>
    <div v-if="asyncStatus === 'loading'">Loading...</div>
    <div v-else-if="state.status === 'error'">Oops, an error happened...</div>
    <div v-else-if="state.data">
        <p v-for="spell in state.data" :key="spell.id" :todo="spell">
            {{ spell.name }}
        </p>
    </div>
</template>
