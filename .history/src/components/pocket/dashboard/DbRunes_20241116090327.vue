<script setup lang="ts">
import type { pocket } from 'types'
import {
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/base/resizable'
import { runeColors } from '@lib/functions/PocketUtilities'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = props.pocket
const set = ref(pocket.runes[0].runeSets[pocket.runes[0].starred]).value

const runes = [set.p1, set.p2, set.p3, set.s1, set.s2]
console.log(set)
</script>

<template>
    <div class="grid gap-4 px-3 py-2">
        <Button
            variant="outline"
            class="h-16 w-full overflow-hidden bg-gradient-to-r from-transparent !p-0 backdrop-saturate-200"
            :class="runeColors(set)">
            <div
                class="flex size-full items-center justify-start gap-3 bg-gradient-to-r from-base-100/90 to-base-100/70 px-2 backdrop-blur-md">
                <LoadRune
                    v-if="set.keystone.name != 'none'"
                    :url="set.keystone.img"
                    keystone />
                <PlCircle v-else :size="30" class="shrink-0" />
                <div class="grid text-left">
                    <p class="text-[11px] capitalize">{{ set.primary }}</p>
                    <h4 class="!font-semibold tracking-normal">
                        {{ set.keystone.name }}
                    </h4>
                </div>
            </div>
        </Button>

        <ResizablePanelGroup direction="horizontal" class="size-full">
            <ResizablePanel :default-size="100">
                <div class="mt-2 grid gap-y-7" v-if="set">
                    <template v-for="rune in runes">
                        <div
                            class="col-start-1 grid items-center justify-center">
                            <LoadRune
                                v-if="rune.name != 'none'"
                                :url="rune.img" />
                            <PlCircle v-else :size="45" />
                        </div>
                    </template>
                </div>
            </ResizablePanel>
            <ResizeHandle class="" with-handle />
            <ResizablePanel>
                <div class="size-full rounded-box bg-base-200/40"></div>
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
</template>

<style scoped></style>
