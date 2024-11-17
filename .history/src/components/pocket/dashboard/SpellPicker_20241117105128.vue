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
<template>hi</template>
