<script setup lang="ts">
import { Item, ItemSet } from 'types';
import { PopoverPortal, PopoverClose } from 'radix-vue'


const props = defineProps<{
    sets: Array<ItemSet>
    model?: any
    limit?: number
}>()

const emit = defineEmits(['update'])

const model = ref(props.model)


const sets = ref(props.sets)


const countIndex = ['1', '2', '3', '4', '5', '6']

const filter = computed(() => {

    let filter = sets.value
    filter.filter((set) => model.value.key == set.key)
    return filter
})
console.log(filter);
</script>

<template>
<Dialog>
    <Popover>
        <DialogTrigger>
            <PopoverTrigger>
                <Button variant="ghost"
                    class="h-fit justify-start relative hover:bg-transparent hover:ring-1 ring-base-200 -ml-3">


                    <template v-for="(item, index) in props.model.items" :key="item.key">
                        <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                            class='size-[55px] rounded-md overflow-hidden border border-base-300 shadow-sm' />

                    </template>
                    <template v-if="props.model.items.length < 6">
                    </template>


                    <span class='w-8 h-full'></span>
                    <icon icon="fluent-mdl2:scroll-up-down" class='absolute size-4 right-4' />
                </Button>

            </PopoverTrigger>
        </DialogTrigger>

        <PopoverPortal>
            <PopoverContent @openAutoFocus.prevent>
                <PopoverClose class='absolute -top-96 -left-96 w-screen h-screen bg-black/20  scale-150  '>



                    <PopoverContent class=' w-[--popper-trigger-width] !rounded-box relative px-7 py-5 ' align="start"
                        :align-offset="-20" side="bottom" :side-offset="-0">
                        <InfoCard title="Starter Items"
                            description="Your early game items. What are you starting with or buying first back?"
                            cardClass="max-h-inherit relative">

                            <div class='relative '></div>

                            <div
                                class='grid w-inherit flex-col max-h-inherit overflow-y-auto  justify-center auto-rows-min gap-2'>
                                <div class='flex flex-row items-center pl-1.5 '>
                                    <Label variant="ghost" size="xs" disabled class='capitalize grow w-full truncate'>





                                        <input type="radio" v-model="model" value="" class="peer hidden" />
                                    </Label>


                                </div>

                                <label v-for="set in sets" v-close-popper
                                    class="w-full flex gap-3 items-center  overflow-hidden" :key="set.name">

                                    <template v-for="(item, index) in set.items" :key="item.id">
                                        <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                                            class='size-[55px] border-1 border-transparent  rounded-md shadow-sm' />
                                    </template>

                                    <!--           <PlaceholderSquare v-else class='size-14' /> -->



                                    <div
                                        class='size-6 ml-1 transition-all duration-300  group-hover:opacity-80 pointer-events-none grid justify-start items-center'>
                                        <input type="radio" v-model="model" @change="emit('update', model)" :value="set"
                                            class="radio radio-xs" />

                                        <icon v-if="model && model.key == set.key" icon="teenyicons:tick-outline"
                                            class="size-3" />
                                    </div>

                                </label>

                                <!--   <template v-else>
                        <PlaceholderSquare v-for="index in 6" class='size-14' no-hover />
                    </template>

-->

                            </div>
                        </InfoCard>
                    </PopoverContent>
                </PopoverClose>
            </PopoverContent>
        </PopoverPortal>
    </Popover>

</Dialog>
</template>
<style scoped></style>
