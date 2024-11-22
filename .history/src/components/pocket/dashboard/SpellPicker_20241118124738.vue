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
    <div
        v-else-if="state.data"
        class="flex w-full flex-wrap items-center justify-evenly gap-4">
        <VTooltip
            theme="tt"
            placement="bottom"
            :skidding="30"
            :distance="0"
            v-for="spell in state.data"
            :key="spell.name"
            class="w-fit">
            <label
                class="rounded-lg shadow-standard ring-neutral/40 ring-offset-2 hover:ring-1">
                <input
                    type="radio"
                    :value="spell.name"
                    v-model="rs.selectedSpell"
                    class="hidden" />
                <div
                    class="size-16 overflow-hidden rounded-lg border border-neutral/10">
                    <img
                        :src="`/img/spells/Summoner${spell.name}.webp`"
                        class="size-full" />
                </div>
            </label>
            <template #popper>
                {{ spell.name }}
            </template>
        </VTooltip>
    </div>
</template>
