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
                <CardHeader class="relative flex px-3 pb-6">
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

                <div class="flex w-full">
                    <div class="w-1/2">
                        <div class="flex items-end justify-center gap-px">
                            <SpellDisplay :pocket="pocket" />
                        </div>
                        <div class="mt-4 flex flex-col items-end">
                            <div
                                class="flex flex-row flex-wrap justify-center even:mt-5">
                                <MiniItemGrid :pocket="pocket" />
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2 pl-3">
                        <div class="relative grid size-36 place-items-center">
                            <div class="z-20">
                                <Keystone :pocket="pocket" />
                            </div>

                            <div
                                :class="
                                    cn(
                                        'absolute left-10 top-0 z-10',

                                        '[&_:first-child]:-left-8 [&_:first-child]:top-0 [&_:first-child]:z-0',

                                        '[&_:nth-child(2)]:-left-14 [&_:nth-child(2)]:top-11 [&_:nth-child(2)]:z-20',

                                        '[&_:last-child]:top-22 [&_:last-child]:-left-8 [&_:last-child]:z-0'
                                    )
                                ">
                                <RuneSet :pocket="pocket" type="runes1" />
                            </div>
                            <div
                                :class="
                                    cn(
                                        'absolute left-10 top-0 z-0',
                                        '[&_:first-child]:left-14 [&_:first-child]:top-11 [&_:first-child]:z-0',
                                        '[&_:last-child]:top-22 [&_:last-child]:left-8 [&_:last-child]:z-0'
                                    )
                                ">
                                <RuneSet :pocket="pocket" type="runes2" />
                            </div>
                            <div
                                :class="
                                    cn(
                                        'absolute right-7 top-0',
                                        '[&_:first-child]:-right-4 [&_:first-child]:-top-6 [&_:first-child]:z-10',
                                        '[&_:nth-child(2)]:-top-3 [&_:nth-child(2)]:right-4 [&_:nth-child(2)]:z-20',
                                        '[&_:last-child]:-right-4 [&_:last-child]:top-2 [&_:last-child]:z-0'
                                    )
                                ">
                                <ShardSet :pocket="pocket" />
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
