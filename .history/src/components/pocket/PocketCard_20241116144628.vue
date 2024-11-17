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

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})

const flip = ref(false)
</script>

<template>
    <label class="swap swap-flip relative h-[350px] w-[250px] overflow-hidden">
        <input type="checkbox" />

        <Card
            class="swap-off absolute h-[350px] w-[250px] rounded-box bg-[20%_-45%] bg-no-repeat [background-size:200%]"
            :style="{
                backgroundImage: champImage,
            }">
            <CardContent
                class="h-200% duration-400 absolute left-0 z-10 h-[200%] w-full bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100 to-30% transition-all delay-200 animate-in slide-in-from-top-10">
                <CardHeader
                    class="duration-400 delay-400 mt-6 animate-in fade-in-0 slide-in-from-bottom-3">
                    <h2>
                        {{ pocket.name }}
                    </h2>
                </CardHeader>
                <CardDescription>
                    <p
                        v-for="tag in pocket.tags"
                        class="tex10-base font-medium duration-500 animate-in fade-in-0 slide-in-from-bottom-3">
                        {{ tag }}
                    </p>
                </CardDescription>

                <div class="flex w-full flex-wrap justify-center gap-1">
                    <template v-for="(item, index) in items" :key="item.id">
                        <Item
                            v-if="index < 6"
                            :item="item"
                            :pocket="pocket"
                            class="size-14" />
                    </template>
                </div>
            </CardContent>
        </Card>

        <Card class="swap-on absolute h-[350px] w-[250px]"></Card>
    </label>
</template>

<style scoped></style>
