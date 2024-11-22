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

// class="flex w-full flex-wrap items-center justify-evenly gap-4"
</script>
<template>
    <div v-if="asyncStatus === 'loading'">
        <Skeleton class="size-16" />
    </div>

    <div v-else-if="state.status === 'error'" class="flex gap-2">
        <span class="">i'm broke</span>
        <icon icon="fluent:emoji-sad-slight-20-regular" class="size-8" />
    </div>

    <div v-else-if="state.data">
        <Popover>
            <PopoverTrigger
                class="grid items-center justify-items-end gap-3"></PopoverTrigger>
            <PopoverContent
                class="-ml-[28px] w-[300px] overflow-hidden !rounded-box bg-transparent p-0 backdrop-blur-none"
                :sideOffset="-80">
                <div class="h-28" />
                <div
                    class="gap flex flex-wrap justify-evenly gap-x-5 gap-y-4 bg-base-100 px-14 py-6 pb-8 backdrop-blur-md">
                    <VTooltip
                        theme="tt"
                        placement="bottom"
                        :distance="6"
                        v-for="spell in state.data"
                        :key="spell.name"
                        class="rounded-lg shadow-standard ring-neutral/40 ring-offset-2 hover:ring-1">
                        <label>
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
            </PopoverContent>
        </Popover>
    </div>
</template>
