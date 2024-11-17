<script setup lang="ts">
import type { pocket } from 'types';
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
console.log(set);

</script>

<template>
<div class='grid gap-4 px-3 py-2'>

    <Button variant="outline"
        class='w-full !p-0  h-16 bg-gradient-to-r from-transparent backdrop-saturate-200 overflow-hidden'
        :class="runeColors(set)">
        <div
            class='size-full justify-start flex gap-3 px-2 bg-gradient-to-r from-base-100/90 to-base-100/70 backdrop-blur-md items-center'>
            <LoadRune v-if="set.keystone.name != 'none'" :url="set.keystone.img" keystone />
            <PlCircle v-else :size="30" class='shrink-0' />
            <div class=' grid text-left'>
                <p class='capitalize text-[11px]'>{{ set.primary }}</p>
                <h4 class='!font-semibold tracking-normal '>{{ set.keystone.name }}</h4>
            </div>
        </div>
    </Button>

    <ResizablePanelGroup direction="horizontal" class='size-full'>


        <ResizablePanel :default-size='100'>



            <div class='grid gap-y-7 mt-2' v-if="set">
                <template v-for="rune in runes">
                    <div class='grid col-start-1 items-center justify-center'>

                        <LoadRune v-if="rune.name != 'none'" :url="rune.img" />
                        <PlCircle v-else :size="45" />


                    </div>

                </template>
            </div>

        </ResizablePanel>
        <ResizeHandle class='' with-handle />
        <ResizablePanel>

            <div class="rounded-box bg-base-200/40 size-full"> </div>
        </ResizablePanel>
    </ResizablePanelGroup>

</div>
</template>

<style scoped></style>