<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { useRuneStore } from '@/stores/runeStore'
import { PopoverClose, PopoverPortal } from 'radix-vue'
import type { MaybeElementRef } from '@vueuse/core'
import type { spell } from 'types'

const rs = useRuneStore()

const props = defineProps<{
    model: any
    target: string | HTMLElement
    arr?: Array<spell>
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
const el = ref(props.target)
const arr = ref(props.arr)

function onChange(e) {
    model.value = e.target.value
    console.log('mode', model.value)
    console.log('eve', e.target as spell)
    emit('update:model', model.value)
}
watch(
    () => arr,
    (newVal) => {
        console.log(newVal)
    }
)
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
                <button>
                    <Target v-if="!model" class="size-[50px]" />
                    <Label
                        variant="outline"
                        size="icon"
                        v-else-if="model"
                        class="size-[50px] overflow-hidden rounded-lg p-0 shadow-standard ring-1 ring-transparent ring-offset-2 transition-all duration-300 hover:ring-neutral/60 data-[state=open]:ring-neutral/60">
                        <img
                            :src="`/img/spells/Summoner${model.name}.webp`"
                            class="size-full" />
                    </Label>
                </button>
            </PopoverTrigger>
            <PopoverPortal :to="props.target">
                <PopoverContent
                    class="-ml-[22px] w-[300px] overflow-hidden !rounded-box bg-transparent p-0 backdrop-blur-none"
                    :sideOffset="-80"
                    align="end"
                    :collisionBoundary="props.target"
                    avoidCollisions
                    hideWhenDetached
                    updatePositionStrategy="optimized"
                    sticky="always">
                    <div class="h-28" />

                    <div
                        class="gap flex flex-wrap justify-end gap-x-8 gap-y-4 bg-base-100 px-12 py-6 pb-8 backdrop-blur-md">
                        <PopoverClose
                            v-for="spell in state.data"
                            :key="spell.name"
                            :disabled="props.arr.includes(spell)">
                            <label
                                @click=""
                                class="rounded-lg shadow-standard ring-neutral/40 ring-offset-2 hover:ring-1">
                                <input
                                    type="radio"
                                    :value="spell"
                                    v-model="model"
                                    @change="onChange($event)"
                                    class="hidden"
                                    :disabled="props.arr.includes(spell)" />
                                <div
                                    class="size-[50px] overflow-hidden rounded-lg border border-neutral/10">
                                    <img
                                        :src="`/img/spells/Summoner${spell.name}.webp`"
                                        class="size-full" />
                                </div>
                            </label>
                        </PopoverClose>
                    </div>
                </PopoverContent>
            </PopoverPortal>
        </Popover>
    </div>
</template>
