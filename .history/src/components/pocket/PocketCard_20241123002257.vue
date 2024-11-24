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
    <label class="swap swap-flip relative h-[300px] w-[250px] backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative grid h-inherit w-inherit justify-center overflow-hidden rounded-box bg-transparent px-2">
            <div
                class="mask absolute top-0 h-[200px] w-full bg-[20%_40%] bg-no-repeat mask-b-52 [background-size:200%]"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="relative h-inherit w-inherit items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                <CardHeader class="relative flex px-3 pb-5">
                    <CardTitle class="z-10 pb-0 !text-[1.45rem] font-semibold">
                        {{ pocket.name }}
                    </CardTitle>
                    <CardDescription>
                        <!--                       <h4
                            class="font-cursive ml-3 scale-x-110 font-semibold lowercase !not-italic text-base-content/80">
                            @{{ pocket.champions[0].starred }}
                        </h4> -->
                        <h4
                            class="z-10 pt-0 !text-base font-semibold !not-italic">
                            #{{ pocket.tags[0] }}
                        </h4>
                    </CardDescription>
                </CardHeader>

                <div class="size-full px-3">
                    <div class="mt-1">
                        <div class="absolute flex gap-2">
                            <SpellDisplay :pocket="pocket" />
                            <!--                   <span
                                class="font-cursive flex grow items-end justify-end text-2xl">
                                {{ pocket.champions[0].starred }}
                            </span> -->
                        </div>
                        <div class="mt-4 flex h-fit items-end">
                            <div
                                class="relative z-20 mt-8 flex grow items-center justify-center first:absolute">
                                <Keystone :pocket="pocket" />
                            </div>
                            <div
                                class="flex w-full flex-row flex-wrap justify-end gap-1 justify-self-end pl-8">
                                <MiniItemGrid :pocket="pocket" />
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div
                            class="ml-px h-fit flex-col items-center justify-start gap-3 pl-2 pt-2">
                            <div
                                :class="
                                    cn(
                                        'z-10 flex w-fit gap-2',

                                        '[&_:first-child]:z-20',

                                        '[&_:nth-child(2)]:z-10',

                                        '[&_:last-child]:z-0'
                                    )
                                ">
                                <RuneSet :pocket="pocket" type="runes1" />
                            </div>
                            <div :class="cn('z-0 flex gap-2')">
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
                                <div :class="cn('flex gap-2.5 pl-3.5 pt-3')">
                                    <ShardSet :pocket="pocket" />
                                </div>
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
