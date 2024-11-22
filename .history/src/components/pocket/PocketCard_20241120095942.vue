<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { getShardIcon, getShardClass } from '@lib/functions/GetColor'
import { makeBox } from '@lib/utils'

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
                <CardHeader class="relative flex pl-28 pr-4">
                    <template v-if="set">
                        <div
                            class="max-size-full absolute left-2 z-0 max-h-[35px] opacity-80">
                            <img
                                v-if="set.keystone.name != 'none'"
                                :src="set.keystone.img"
                                class="-mt-1.5 size-[60px] object-cover object-top" />
                            <Placeholder
                                v-else
                                :size="35"
                                class="border-base-300/80 shadow-inset-sm"
                                img="/img/runes/RunesIcon.svg"
                                iClass="p-2 opacity-15" />
                        </div>
                    </template>

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
                    class="max-w-inherit mt-2 grid w-full grid-cols-[1fr_2.5fr] gap-x-3 gap-y-5 px-2">
                    <div class="col-start-2">
                        <div class="grid grid-cols-[1fr_2fr]">
                            <div
                                class="relative flex h-full flex-col items-center justify-between gap-4 px-0 py-2"></div>
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
