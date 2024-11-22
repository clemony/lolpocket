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
    <label class="swap swap-flip relative h-[320px] w-[250px] backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative h-[320px] w-[250px] max-w-[250px] overflow-hidden rounded-box bg-transparent">
            <div
                class="mask absolute top-0 h-[200px] w-full bg-[20%_40%] bg-no-repeat mask-b-52 [background-size:200%]"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="max-w-inherit relative size-full items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30% pt-2">
                <CardHeader class="relative flex px-4">
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

                <div
                    class="mt-2 grid w-full grid-cols-[2.5fr_1fr] items-center gap-x-3 gap-y-5 px-2 [&_>div]:justify-between">
                    <div class="grid w-fit grid-cols-3 gap-x-2 gap-y-0.5">
                        <MiniItemGrid :pocket="pocket" />
                    </div>
                    <div class="grid gap-2 pl-2">
                        <SpellDisplay :pocket="pocket" />
                    </div>
                    <div
                        class="col-span-full grid w-full grid-cols-[1fr_2.5fr] items-center gap-2 pr-2">
                        <div class="col-start-1 -mt-3 ml-4 grid justify-center">
                            <Keystone :pocket="pocket" />
                        </div>
                        <div class="flex justify-end gap-2.5">
                            <RuneSet1 :pocket="pocket" />
                        </div>
                        <div class="relative col-start-1 w-full">
                            <div
                                class="absolute flex h-fit w-28 items-end justify-between">
                                <ShardSet :pocket="pocket" />
                            </div>
                        </div>
                        <div class="col-start-2 flex justify-end gap-2.5">
                            <RuneSet2 :pocket="pocket" />
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
