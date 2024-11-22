<script setup lang="ts">
import type { pocket } from 'types'
import { usePocketStore } from '@/stores/pocketStore'
import { newItemSet } from '@lib/functions/PocketUtilities'
const ps = usePocketStore()

const props = defineProps<{
    data: Array<any>
    pocket: pocket
    type: string
}>()

function thisFunction() {
    props.type == 'item' ? newItemSet(props.pocket.key)
    : props.type == 'rune' ? 'hi'
    : 'no'
}
</script>

<template>
    <div
        class="max-w-48 [&_Button]:w-full [&_Button]:justify-start [&_Button]:gap-3 [&_span]:font-size-2! [&_svg]:shrink-0"
        :key="props.type">
        <Button
            v-if="props.type == 'item' || props.type == 'rune'"
            variant="ghost"
            size="xs"
            class="w-full justify-start gap-3"
            @click="thisFunction">
            <icon icon="streamline:add-square" class="size-3.5" />
            <span>
                New
                <span class="capitalize">{{ props.type }}</span>
                set
            </span>
        </Button>

        <VDropdown
            theme="hover-inner"
            placement="right-start"
            :disabled="!ps.pockets.length">
            <Button
                variant="ghost"
                size="xs"
                class="[.v-popper--shown]:bg-b2/60">
                <icon icon="radix-icons:copy" class="size-3.5" />
                <span class="-ml-[2px] capitalize">
                    Copy {{ props.type }}
                    <span class="lowercase">s to...</span>
                </span>
                <icon
                    icon="teenyicons:right-small-outline"
                    class="ml-2 size-3.5 justify-self-end" />
            </Button>
            <template #popper>
                <div
                    class="max-w-48 [&_Button]:w-full [&_Button]:justify-start [&_Button]:gap-3">
                    <ScrollArea
                        class="max-h-56 overflow-auto"
                        :style="{
                            height: ps.pockets.length * 28 + 10 + 'px',
                        }">
                        <VDropdown v-for="pocket in ps.pockets" theme="hidden">
                            <Button variant="ghost" size="xs">
                                <icon :icon="pocket.icon" class="" />
                                <span class="capitalize">
                                    {{ pocket.name }}
                                </span>
                            </Button>
                        </VDropdown>
                    </ScrollArea>
                </div>
            </template>
        </VDropdown>

        <Separator direction="vertical" class="mb-0.5" />

        <Button
            variant="ghost"
            size="xs"
            :disabled="data.length == 0"
            @click="data.length = 0">
            <icon icon="ph:eraser" class="size-3.5" />
            <span class="-ml-[2px] font-size-2!">
                Clear
                <span class="capitalize">{{ props.type }}</span>
                <span v-if="props.type != 'champion'">set</span>
                s
            </span>
        </Button>
    </div>
</template>

<style scoped></style>
