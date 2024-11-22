<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
    <div class="flex w-full gap-3">
        <div
            class="-mt-6 ml-96 w-[47%] max-w-[47%] items-center justify-center space-y-1">
            <div
                class="relative ml-3 flex w-fit items-center justify-center rounded-full border border-neutral">
                <Keystone :pocket="pocket" />
                <div
                    class="size-full [&_:first-child]:-left-14 [&_:first-child]:-top-[2rem] [&_:last-child]:-bottom-[3.6rem] [&_:last-child]:-left-[2rem] [&_:nth-child(2)]:-bottom-[1rem] [&_:nth-child(2)]:-left-[3.8rem]">
                    <RuneSet :pocket="pocket" type="runes1" />
                </div>
                <div
                    class="size-full [&_:first-child]:-right-[4.1rem] [&_:first-child]:-top-[0.5rem] [&_:last-child]:-bottom-[3.2rem] [&_:last-child]:-right-[2.8rem]">
                    <RuneSet :pocket="pocket" type="runes2" \ />
                </div>
            </div>
            <div class="flex w-full"></div>

            <!-- 
            <div class="ml-px flex h-fit w-full justify-center gap-2">
                <ShardSet :pocket="pocket" />
            </div> -->
        </div>
        <!--         <div class="flex w-[53%] max-w-[53%] flex-col justify-end gap-3">
            <div class="flex flex-wrap justify-evenly gap-y-0.5">
                <MiniItemGrid :pocket="pocket" />
            </div>
            <div class="flex items-end justify-evenly gap-px">
                <SpellDisplay :pocket="pocket" />
            </div>
        </div> -->
    </div>
</template>

<style scoped></style>
