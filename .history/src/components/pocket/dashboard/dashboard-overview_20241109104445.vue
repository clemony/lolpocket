<script setup lang="ts">
import type { pocket } from 'types';
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();
const props = defineProps<{
    pocket: pocket
}>()
const pocket = props.pocket
const start = ref(pocket.items[0].start[0])
const core = ref(pocket.items[0].core[0])
const final = ref(pocket.items[0].final[0])

const DdItemset = defineAsyncComponent({
    loader: () => import('@/components/menus/dropdown/dd-itemset.vue'),
    delay: 200,
})
console.log(pocket);

const startIsOpen = ref(false)

const boxes = ref()
function makeBox() {
    const length = pocket.items[0].start[0].items.length
    boxes.value = 6 - length
}



const cardWidth = ref()
const cardHeight = ref()

const card = ref(null)

onMounted(async () => {
    await card.value
    const { width } = useElementSize(card)
    cardWidth.value = width.value;

    const { height } = useElementSize(card)
    cardHeight.value = height.value;

})

</script>

<template>
<div class='flex flex-col max-h-inherit gap-10 w-full' ref="card">


    <InfoCard title="Starter Items"
        description="Your early game items. What are you starting with or buying first back?"
        cardClass="max-h-inherit relative has-[aria-expanded=true]:invisible has-[aria-expanded=true]:opacity-0 transition-all duration-500"
        v-model:cardWidth="cardWidth" v-model:cardHeight="cardHeight">

        <Dialog>
            <Popover>
                <DialogTrigger aschild>
                    <PopoverTrigger aschild>
                        <Button variant="ghost"
                            class="h-fit justify-start relative hover:bg-transparent hover:ring-1 ring-base-200 -ml-2.5">

                            <ItemsetModel :pocket="props.pocket" :model="start" @update:model="(set) => start = set" />

                            <span class='w-8 h-full'></span>
                            <icon icon="fluent-mdl2:scroll-up-down" class='absolute size-4 right-4' />
                        </Button>

                    </PopoverTrigger>
                </DialogTrigger>

                <DdItemset @update="(model) => pocket.items[0].start[0] = model" v-model:model="start"
                    :sets="pocket.items[0].itemSets" :cardWidth="cardWidth" :cardHeight="cardHeight" :pocket="pocket" />

            </Popover>

        </Dialog>
    </InfoCard>



    <InfoCard title="Core Items" description="Your champion's core. What should you work towards first? "
        v-model:cardWidth="cardWidth" v-model:cardHeight="cardHeight">
        <Dialog>
            <Popover>
                <DialogTrigger>
                    <PopoverTrigger>
                        <Button variant="ghost"
                            class="h-fit justify-core relative hover:bg-transparent hover:ring-1 ring-base-200 -ml-2.5">

                            <ItemsetModel :pocket="props.pocket" :model="core" />

                            <span class='w-8 h-full'></span>
                            <icon icon="fluent-mdl2:scroll-up-down" class='absolute size-4 right-4' />
                        </Button>

                    </PopoverTrigger>
                </DialogTrigger>

                <DdItemset @update="(model) => pocket.items[0].core[0] = model" v-model:model="core"
                    :sets="pocket.items[0].itemSets" :cardWidth="cardWidth" :cardHeight="cardHeight" :pocket="pocket" />

            </Popover>

        </Dialog>
    </InfoCard>

    <InfoCard title="Final Build"
        description="The pinnacle. What's your game plan if you don't stomp the enemy team TOO quickly?  The first six items in a set are considered your final build. Other items can be used as alternates."
        v-model:cardWidth="cardWidth" v-model:cardHeight="cardHeight">

        <Dialog>
            <Popover>
                <DialogTrigger>
                    <PopoverTrigger>
                        <Button variant="ghost"
                            class="h-fit justify-final relative hover:bg-transparent hover:ring-1 ring-base-200 -ml-2.5">

                            <ItemsetModel :pocket="props.pocket" :model="final" />

                            <span class='w-8 h-full'></span>
                            <icon icon="fluent-mdl2:scroll-up-down" class='absolute size-4 right-4' />
                        </Button>

                    </PopoverTrigger>
                </DialogTrigger>

                <DdItemset @update="(model) => pocket.items[0].final[0] = model" v-model:model="final"
                    :sets="pocket.items[0].itemSets" :cardWidth="cardWidth" :cardHeight="cardHeight" :pocket="pocket" />
            </Popover>

        </Dialog>

    </InfoCard>
</div>
</template>

<style scoped></style>