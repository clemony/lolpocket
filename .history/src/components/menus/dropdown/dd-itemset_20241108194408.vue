<script setup lang="ts">
import type { Item, ItemSet, pocket } from 'types';
import { PopoverPortal, PopoverClose } from 'radix-vue'


const props = defineProps<{
    pocket?: pocket
    sets: Array<ItemSet>
    model?: any
    limit?: number
    cardWidth?: number
    height?: number
}>()

const emit = defineEmits(['update'])

const model = ref(props.model)


const sets = ref(props.sets)
console.log('hihih', sets.value);


const countIndex = ['1', '2', '3', '4', '5', '6']

const filter = computed(() => {

    let filter = sets.value
    filter.filter((set) => model.value.key == set.key)
    return filter
})


onMounted(() => {
    model.value = props.model


})


</script>

<template>
<PopoverPortal>
    <PopoverContent @openAutoFocus.prevent class='bg-transparent p-0 border-none'>
        <PopoverClose class='absolute -top-96 -left-96 w-screen h-screen bg-black/20  scale-150  '>


            <PopoverContent class=' !rounded-box relative px-7 py-5 bg-transparent p-0 border-none ' align="start"
                :align-offset="-35" side="bottom" :side-offset="-147" @openAutoFocus.prevent>

                <Transition name="ah" :duration="2000">

                    <InfoCard title=" Starter Items"
                        description="Your early game items. What are you starting with or buying first back?"
                        cardClass="relative overflow-hidden " noPadding :style="{

                            width: props.cardWidth + 'px'
                        }">

                        <div class='flex flex-col max-h-inherit overflow-y-auto    gap-5 px-2'>
                            <ItemsetModel :pocket="props.pocket" :model="props.model" />


                            <TransitionGroup name="pop">
                                <label v-for="set in sets" v-close-popper class=" flex gap-3 items-center  overflow-hidden w-fit rounded-md first:bg-base-200/70 first:border-base-200 first:border first:py-2 first:px-3 first:shadow-sm
                             [&:not(:first-child)]:px-4 [&:not(:first-child)]:opacity-0" :class="{
                                'order-first ': set == model
                            }" :key="set.name">
                                    <template v-if="set.items.length">
                                        <template v-for="(item, index) in set.items" :key="item.id">

                                            <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                                                class='size-[55px] border-1 border-transparent  rounded-md shadow-sm' />
                                        </template>


                                        <!--           <PlaceholderSquare v-else class='size-14' /> -->



                                        <div
                                            class='size-6 ml-1 transition-all duration-300  group-hover:opacity-80 pointer-events-none grid justify-start items-center'>
                                            <input type="radio" v-model="model" @change="emit('update', model)"
                                                :value="set" class="hidden" />

                                            <icon v-if="model && model.key == set.key" icon="teenyicons:tick-outline"
                                                class="size-5" />
                                        </div>
                                    </template>
                                </label>

                                <!--   <template v-else>
                        <PlaceholderSquare v-for="index in 6" class='size-14' no-hover />
                    </template>

-->
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
.animate-card {

    animation: translate-height 2s ease-in-out;
    animation-delay: 200ms;

}

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
