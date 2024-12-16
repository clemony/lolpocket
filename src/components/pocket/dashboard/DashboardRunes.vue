<script setup lang="ts">
import type { pocket } from 'types'
import { ResizablePanel, ResizablePanelGroup } from '@components/base/resizable'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { runeColors } from '@utils/getColor'
=======
import { runeColors } from '@/utils/GetColor'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { runeColors } from '@utils/getColor'
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
import { runeColors } from '@utils/getColor'
=======
import { runeColors } from '@/utils/GetColor'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)
const set = ref(
    pocket.value.runes[0].runeSets[pocket.value.runes[0].starred]
).value

const runes = [set.p1, set.p2, set.p3, set.s1, set.s2]
console.log(set)
</script>

<template>
    <div class="grid gap-4 px-3 py-2" :key="pocket.key">
        <Button
            variant="outline"
            class="h-16 w-full overflow-hidden bg-linear-to-r from-transparent p-0! backdrop-saturate-200"
            :class="runeColors(set)">
            <div
                class="from-b1/90 to-b1/70 flex size-full items-center justify-start gap-3 bg-linear-to-r px-2 backdrop-blur-md">
                <LoadRune
                    v-if="set.keystone.name != 'empty'"
                    :url="set.keystone.img"
                    keystone />
                <Placeholder v-else :size="30" class="shrink-0" />
                <div class="grid text-left">
                    <p class="text-[11px] capitalize">{{ set.primary }}</p>
                    <h5 class="font-semibold! tracking-normal">
                        {{ set.keystone.name }}
                    </h5>
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
                                v-if="rune.name != 'empty'"
                                :url="rune.img" />
                            <Placeholder v-else :size="45" />
                        </div>
                    </template>
                </div>
            </ResizablePanel>
            <ResizeHandle class="" with-handle />
            <ResizablePanel>
                <div class="bg-b2/40 size-full rounded-xl"></div>
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
</template>

<style scoped></style>
