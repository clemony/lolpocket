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
console.log(set)
const flip = ref(false)
</script>

<template>
    <label class="swap swap-flip relative backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative grid h-[270px] w-[210px] justify-center overflow-hidden rounded-xl bg-transparent px-2">
            <div
                class="mask absolute top-0 h-[200px] w-full bg-[20%_40%] bg-no-repeat mask-b-52 [background-size:200%]"
                :style="{
                    backgroundImage: champImage,
                }"></div>
            <CardContent
                class="relative h-full w-inherit items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                <CardHeader class="relative flex px-3 pb-4">
                    <CardTitle class="z-10 pb-0 !text-xl font-semibold">
                        {{ pocket.name }}
                    </CardTitle>
                    <CardDescription class="h-7 py-2">
                        <h5
                            class="z-10 pt-0 !text-base font-semibold !not-italic">
                            <span v-if="pocket.tags">#</span>
                            {{ pocket.tags[0] }}
                        </h5>
                    </CardDescription>
                </CardHeader>

                <div class="grid w-full px-3">
                    <div class="flex h-fit justify-center gap-1 py-3">
                        <div class="relative flex items-end">
                            <div
                                class="flex w-full flex-row flex-wrap justify-center">
                                <MiniItemGrid :pocket="pocket" />
                            </div>
                        </div>

                        <SpellDisplay :pocket="pocket" class="" />
                    </div>

                    <div class="relative flex pb-3">
                        <div class="z-20 flex-col items-center justify-center">
                            <img
                                v-if="
                                    set.keystone && set.keystone.name != 'none'
                                "
                                :src="set.keystone.img"
                                class="size-16 self-center drop-shadow-md" />
                            <ShadowedPlaceholder
                                v-else
                                class="size-16 rounded-full" />

                            <div :class="cn('flex gap-2.5 pt-3')">
                                <ShardSet :pocket="pocket" />
                            </div>
                        </div>

                        <div
                            class="-ml-3 h-fit flex-col items-center justify-start">
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
                            <div :class="cn('z-0 ml-7 mt-2 flex gap-2')">
                                <RuneSet :pocket="pocket" type="runes2" />
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
