<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return `url(\'/img/champions/splash/${clean(pocket.value.champions[0].starred)}_0.webp\')`
})

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
const flip = ref(false)
</script>

<template>
    <label class="relativebackdrop-blur-md swap swap-flip">
        <input type="checkbox" />

        <Card
            class="swap-off relative grid h-[300px] max-h-[300px] w-[250px] justify-center overflow-hidden rounded-xl bg-transparent px-2">
            <div
                class="mask mask-b-52 absolute top-0 h-[200px] w-full [background-size:200%] bg-[20%_40%] bg-no-repeat"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="w-inherit from-b1/40 via-b1/70 to-b1/80 relative h-full items-center bg-linear-to-b from-0% via-15% to-30%">
                <CardHeader class="relative flex px-3 pb-5">
                    <CardTitle class="z-10 pb-0 text-[1.45rem]! font-semibold">
                        {{ pocket.name }}
                    </CardTitle>
                    <CardDescription>
                        <!--                       <h5
                            class="font-cursive ml-3 scale-x-110 font-semibold lowercase not-italic! text-4-content/80">
                            @{{ pocket.champions[0].starred }}
                        </h5> -->
                        <h5 class="text-4! z-10 pt-0 font-semibold not-italic!">
                            #{{ pocket.tags[0] }}
                        </h5>
                    </CardDescription>
                </CardHeader>

                <div class="grid h-[calc(100%-4.3rem)] w-full px-3">
                    <div class="h-fit">
                        <div class="absolute flex gap-2">
                            <SpellDisplay :pocket="pocket" />
                            <!--                   <span
                                class="font-cursive flex grow items-end justify-end text-2xl">
                                {{ pocket.champions[0].starred }}
                            </span> -->
                        </div>
                        <div class="relative flex items-end pt-4">
                            <div
                                class="flex w-full flex-row flex-wrap justify-end gap-1 justify-self-end pl-24 [&_first-child]:rounded-tl-full!">
                                <MiniItemGrid :pocket="pocket" />
                            </div>
                        </div>
                    </div>

                    <div class="relative flex h-1/2">
                        <div
                            class="z-20 ml-4 flex items-center justify-center [&_first-child]:rounded-tl-full!">
                            <Keystone :pocket="pocket" />
                        </div>
                        <div
                            class="ml-px h-fit flex-col items-center justify-start pl-8">
                            <div
                                :class="
                                    cn(
                                        'z-10 flex w-fit gap-3',

                                        '[&_:first-child]:z-20',

                                        '[&_:nth-child(2)]:z-10',

                                        '[&_:last-child]:z-0'
                                    )
                                ">
                                <RuneSet :pocket="pocket" type="runes1" />
                            </div>
                            <div :class="cn('z-0 mt-2 ml-7 flex gap-3')">
                                <!--    <div
                                    v-if="set.secondary != ''"
                                    :class="
                                        cn('z-20 size-12 rounded-full p-2')
                                    ">
                                           <img
                                        :src="`/img/runes/${set.secondary}.webp`"
                                        class="size-full drop-shadow-sm" /> 
                                </div>-->
                                <RuneSet :pocket="pocket" type="runes2" />
                                <!--   <div :class="cn('flex gap-3.5 pl-3.5 pt-3')">
                                    <ShardSet :pocket="pocket" />
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card class="swap-on h-[320px] w-[250px]"></Card>
    </label>
</template>

<style scoped>
.swap-flip {
    transform-style: none !important;
    perspective: none !important;
}
</style>
