<script setup lang="ts">
import type { Item, ItemSet, pocket } from 'types';
import { PopoverPortal, PopoverClose } from 'radix-vue'


const props = defineProps<{
    pocket?: pocket
    sets: Array<ItemSet>
    model?: any
    limit?: number
    cardWidth?: number
    cardHeight?: number
}>()

const emit = defineEmits(['update'])

const model = ref(null)


const sets = ref(props.sets)
console.log('hihih', sets.value);


const filter = computed(() => {

    const allSets = sets.value
    const filter = allSets.filter((set) => set.key !== model.value.key)
    return filter
})

// Transition functions for dynamic height
const beforeEnter = (el) => {
    el.style.height = props.cardHeight
}

const enter = (el) => {
    el.style.transition = 'height 2s ease'
    el.style.height = el.scrollHeight + 'px'
}

const leave = (el) => {
    el.style.transition = 'height 2s ease'
    el.style.height = props.cardHeight
}


onMounted(() => {
    model.value = props.model
})

</script>

<template>
<PopoverPortal>
    <PopoverContent @openAutoFocus.prevent class='bg-transparent p-0 border-none shadow-none'>
        <PopoverClose class='absolute -top-96 -left-96 w-screen h-screen bg-black/20  scale-150  '>


            <PopoverContent class=' !rounded-box relative px-7 py-5 bg-transparent p-0 border-none shadow-none'
                align="start" :align-offset="-34" side="bottom" :side-offset="-145" @openAutoFocus.prevent :style="{
                    width: props.cardWidth + 'px',
                    'max-height': props.cardHeight + 'px'
                }">


                <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">

                    <InfoCard title=" Starter Items"
                        description="Your early game items. What are you starting with or buying first back?"
                        cardClass="relative overflow-hidden w-full max-h-[163px]" noPadding>

                        <div class='flex flex-col max-h-inherit overflow-y-auto  mt-2 gap-5 px-7'>
                            <ItemsetModel :pocket="props.pocket" :model="props.model" />


                            <TransitionGroup name="pop">
                                <label v-for="set in filter" v-close-popper
                                    class=" flex gap-3 items-center  overflow-hidden w-fit rounded-md " :key="set.key">
                                    <template v-if="set.items.length">
                                        <template v-for="(item, index) in set.items" :key="item.id">

                                            <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                                                class='size-[55px] border-1 border-transparent  rounded-md shadow-sm' />
                                        </template>

                                        <div
                                            class='size-6 ml-1 transition-all duration-300  group-hover:opacity-80 pointer-events-none grid justify-start items-center'>
                                            <input type="radio" v-model="model" @change="emit('update', model)"
                                                :value="set" class="hidden" />

                                            <icon v-if="model && model.key == set.key" icon="teenyicons:tick-outline"
                                                class="size-5" />
                                        </div>
                                    </template>
                                </label>
                            </TransitionGroup>
                        </div>
                    </InfoCard>

                </Transition>
            </PopoverContent>
        </PopoverClose>
    </PopoverContent>
</PopoverPortal>
</template>
<style>
@keyframes translate-height {
    0% {
        max-height: v-bind('props.height') + 'px';
    }

    100% {
        max-height: 2000px !important;
    }
}

ah-enter-from,
ah-leave-to {
    max-height: v-bind('props.height') + 'px';
}

ah-enter-to,
ah-leave-from enter-active {
    animation: translate-height 2s ease-in-out;
    animation-delay: 200ms;
}

leave-active {
    animation: translate-height 2s reverse ease-in-out;
}
</style>
