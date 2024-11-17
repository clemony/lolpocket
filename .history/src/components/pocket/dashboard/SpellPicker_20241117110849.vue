<script setup lang="ts">
import Skeleton from '@components/base/skeleton/Skeleton.vue'
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
        <Skeleton
            v-for="spell in state.data"
            :key="spell.name + '-loading'"
            class="size-12" />
    </div>
    <div v-else-if="state.status === 'error'">Oops, an error happened...</div>
    <div v-else-if="state.data">
        <p v-for="spell in state.data" :key="spell.name">
            {{ spell.name }}
        </p>
    </div>
</template>
