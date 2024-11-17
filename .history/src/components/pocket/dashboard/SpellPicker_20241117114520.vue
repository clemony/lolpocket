<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { useRuneStore } from '@/stores/runeStore'
const rs = useRuneStore()

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
    <div v-else-if="state.status === 'error'">Error</div>
    <div v-else-if="state.data">
        <VTooltip
            theme="tt"
            placement="bottom"
            :skidding="30"
            :distance="0"
            v-for="spell in state.data"
            :key="spell.name"
            class="w-fit">
            <Label
                variant="outline"
                size="icon"
                class="aspect-square size-fit overflow-hidden rounded-box border border-base-300 shadow-standard ring-neutral/40 ring-offset-2 hover:ring-1">
                <input
                    type="radio"
                    :value="spell.name"
                    v-model="rs.selectedSpell" />

                <img
                    :src="`/img/spells/Summoner${spell.name}.webp`"
                    class="size-14" />
            </Label>
            <template #popper>
                {{ spell.name }}
            </template>
        </VTooltip>
    </div>
</template>
