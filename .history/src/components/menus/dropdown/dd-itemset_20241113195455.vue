<script setup lang="ts">
import type { Item, ItemSet, pocket } from 'types'
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
//console.log('hihih', sets.value);

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
        <PopoverContent
            aschild
            @openAutoFocus.prevent
            class="border-none bg-transparent p-0 shadow-none">
            <PopoverClose
                class="absolute -left-96 -top-96 h-screen w-screen scale-150 bg-black/20">
                <PopoverContent
                    class="relative h-fit max-h-fit !rounded-box border-none bg-transparent p-0 px-7 py-5 shadow-sm"
                    align="start"
                    :align-offset="-34"
                    side="bottom"
                    :side-offset="-146"
                    @openAutoFocus.prevent>
                    <Transition name="ah" appear>
                        <InfoCard
                            title=" Starter Items"
                            :key="props.pocket.key"
                            description="Your early game items. What are you starting with or buying first back?"
                            cardClass="relative overflow-hidden w-full !h-full"
                            class=""
                            noPadding
                            :style="{
                                width: props.cardWidth + 'px',
                            }">
                            <div
                                class="max-h-inherit mt-0 flex flex-col gap-5 overflow-y-auto px-7">
                                <ItemsetModel
                                    :pocket="props.pocket"
                                    :model="props.model"
                                    class="-ml-2.5 w-fit rounded-box border border-base-200 p-2 shadow-sm">
                                    <input
                                        type="checkbox"
                                        :checked="true"
                                        class="checkbox checkbox-md pointer-events-none mr-1 place-self-center" />
                                </ItemsetModel>

                                <TransitionGroup name="fade">
                                    <label
                                        v-for="set in filter"
                                        v-close-popper
                                        class="sets -ml-2.5 flex w-fit cursor-pointer items-center gap-4 overflow-hidden rounded-box border border-transparent p-2 hover:border-base-300 hover:shadow-sm"
                                        :key="set.key">
                                        <template v-if="set.items.length">
                                            <template
                                                v-for="(
                                                    item, index
                                                ) in set.items"
                                                :key="item.id">
                                                <LoadImg
                                                    v-if="index < 6"
                                                    :url="`/img/items/${item.id}.webp`"
                                                    class="border-1 size-[55px] rounded-md border-transparent shadow-sm" />
                                            </template>

                                            <PlaceholderSquare
                                                v-for="index in makeBox(
                                                    set.items.length
                                                )"
                                                :key="set.key"
                                                class="size-[55px]"
                                                no-hover />

                                            <input
                                                type="radio"
                                                v-model="model"
                                                @change="
                                                    emit('update:model', set)
                                                "
                                                :value="set"
                                                class="hidden" />
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
    transition: max-height 2s cubic-bezier(0.71, 0.42, 0.09, 1.03);
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
