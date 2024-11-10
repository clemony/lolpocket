<script setup lang="ts">
import type { Item, ItemSet, pocket } from 'types';
import { PopoverPortal, PopoverClose } from 'radix-vue'
import { makeBox } from '@lib/utils'


const props = defineProps<{
    pocket?: pocket
    sets: Array<ItemSet>
    model?: any
    limit?: number
    cardWidth?: number
    cardHeight?: number
}>()

const emit = defineEmits(['update:model'])

const model = ref(null)


const sets = ref(props.sets)
console.log('hihih', sets.value);


const filter = computed(() => {

    const allSets = sets.value
    const filter = allSets.filter((set) => set.key !== model.value.key)
    return filter
})



onMounted(() => {
    model.value = props.model
})





</script>

<template>
<PopoverPortal>
    <PopoverContent aschild @openAutoFocus.prevent class='bg-transparent p-0 border-none shadow-none'>
        <PopoverClose class='absolute -top-96 -left-96 w-screen h-screen bg-black/20  scale-150  '>


            <PopoverContent
                class=' !rounded-box relative px-7 py-5 bg-transparent p-0 border-none shadow-sm h-fit max-h-fit'
                align="start" :align-offset="-34" side="bottom" :side-offset="-146" @openAutoFocus.prevent>


                <Transition name="ah" appear>

                    <InfoCard title=" Starter Items" :key="props.pocket.key"
                        description="Your early game items. What are you starting with or buying first back?"
                        cardClass="relative overflow-hidden w-full !h-full !-mb-1" noPadding :style="{
                            width: props.cardWidth + 'px'
                        }">

                        <div class='flex flex-col max-h-inherit overflow-y-auto  mt-2 gap-5 px-7'>
                            <ItemsetModel :pocket="props.pocket" :model="props.model"
                                class='rounded-box bg-base-200/60 p-2 -ml-2.5  shadow-sm w-fit border-base-200'>
                                <input type="checkbox" :checked="true"
                                    class='pointer-events-none checkbox checkbox-md place-self-center mr-1' />
                            </ItemsetModel>


                            <TransitionGroup name="pop">
                                <label v-for="set in filter" v-close-popper
                                    class="sets flex gap-4 items-center  overflow-hidden w-fit rounded-lg cursor-pointer"
                                    :key="set.key" for="set">
                                    <template v-if="set.items.length">
                                        <template v-for="(item, index) in set.items" :key="item.id">

                                            <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                                                class='size-[55px] border-1 border-transparent  rounded-md shadow-sm' />



                                        </template>

                                        <PlaceholderSquare v-for="index in makeBox(set.items.length)" :key="set.key"
                                            class='size-[55px]' no-hover />

                                        <div
                                            class='size-6 ml-1 transition-all duration-300  group-hover:opacity-80 pointer-events-none grid justify-start items-center'>

                                            <icon v-if="model && model.key == set.key" icon="teenyicons:tick-outline"
                                                class="size-5" />
                                        </div>
                                        <input type="radio" v-model="model" @change="emit('update:model', set)"
                                            :value="set" class="hidden" />


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
        max-height: 163px;
    }

    100% {
        max-height: 2000px !important;
    }
}

.ah-enter-from,
.ah-leave-to {
    max-height: 163px !important;
    overflow: hidden;

    .sets {
        transform: translateY(30px);
        opacity: 0;
    }
}

.ah-enter-to,
.ah-leave-from {
    max-height: 2000px;

    .sets {
        transform: translateY(0px);
        opacity: 1;
    }
}


.ah-enter-active {
    transition: max-height 2s cubic-bezier(.71, .42, .09, 1.03);
    transition-delay: 500ms;

    .sets {
        transition: opacity 1s ease-in-out;
        transition-delay: 1s;
    }
}

.ah-leave-active {
    transition: max-height 1s ease-in-out;

    .sets {
        transition: opacity 1s ease-in-out;

    }
}
</style>
