<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { useRuneStore } from '@/stores/runeStore'
const rs = useRuneStore()

const props = defineProps<{
    model: any
}>()

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

const emit = defineEmits(['update:model'])
const model = ref(props.model)
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
                class="grid items-center justify-items-end gap-3"
                as-child>
                <Target v-if="!model" class="size-[50px]" />
                <Button
                    variant="outline"
                    size="icon"
                    v-else-if="model"
                    class="size-[50px] overflow-hidden rounded-lg p-0 shadow-standard ring-1 ring-transparent ring-offset-2 transition-all duration-300 hover:ring-neutral/60 data-[state=open]:ring-neutral/60">
                    <img
                        :src="`/img/spells/Summoner${model.name}.webp`"
                        class="size-full" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                class="-ml-[26px] w-[300px] overflow-hidden !rounded-box bg-transparent p-0 backdrop-blur-none"
                :sideOffset="-80">
                <div class="h-28" />
                <div
                    class="gap flex flex-wrap justify-end gap-x-5 gap-y-4 bg-base-100 px-10 py-6 pb-8 backdrop-blur-md">
                    <label
                        v-for="spell in state.data"
                        :key="spell.name"
                        class="rounded-lg shadow-standard ring-neutral/40 ring-offset-2 hover:ring-1">
                        <input
                            type="radio"
                            :value="spell"
                            v-model="model"
                            @change="emit('update:model', spell)"
                            class="hidden" />
                        <div
                            class="size-16 overflow-hidden rounded-lg border border-neutral/10">
                            <img
                                :src="`/img/spells/Summoner${spell.name}.webp`"
                                class="size-full" />
                        </div>
                    </label>
                </div>
            </PopoverContent>
        </Popover>
    </div>
</template>
