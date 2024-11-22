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
    <label class="swap swap-flip relative h-[20rem] w-[20rem] backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative grid h-inherit w-inherit justify-center overflow-hidden rounded-box bg-transparent px-2">
            <div
                class="mask absolute top-0 h-[200px] w-full bg-[20%_40%] bg-no-repeat mask-b-52 [background-size:200%]"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="relative grid h-inherit w-inherit items-center justify-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                <CardHeader class="flex px-3 pb-1">
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

                <div class="flex w-full gap-3">
                    <div
                        class="-mt-6 w-[47%] max-w-[47%] items-center justify-center space-y-1">
                        <div class="ml-3 flex w-full items-center">
                            <Keystone :pocket="pocket" />
                        </div>

                        <div class="flex w-full">
                            <div
                                class="flex w-1/2 flex-col items-center gap-1.5">
                                <RuneSet :pocket="pocket" type="runes1" />
                            </div>

                            <div
                                class="flex w-1/2 flex-col items-center gap-2.5">
                                <RuneSet :pocket="pocket" type="runes2" />
                            </div>
                        </div>
                        <div
                            class="ml-px flex h-fit w-full justify-center gap-2">
                            <ShardSet :pocket="pocket" />
                        </div>
                    </div>
                    <div
                        class="flex w-[53%] max-w-[53%] flex-col justify-end gap-3">
                        <div class="flex flex-wrap justify-evenly gap-y-0.5">
                            <MiniItemGrid :pocket="pocket" />
                        </div>
                        <div class="flex items-end justify-evenly gap-px">
                            <SpellDisplay :pocket="pocket" />
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
