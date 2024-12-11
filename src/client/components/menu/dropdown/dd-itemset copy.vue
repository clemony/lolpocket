<script setup lang="ts">
import { Item, ItemSet } from 'types'
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
console.log(filter)
</script>

<template>
    <Dialog>
        <Popover>
            <DialogTrigger>
                <PopoverTrigger>
                    <Button
                        variant="ghost"
                        class="relative -ml-3 h-fit justify-start ring-b2 hover:bg-transparent hover:ring-1">
                        <template
                            v-for="(item, index) in props.model.items"
                            :key="item.key">
                            <LoadImg
                                v-if="index < 6"
                                :url="`/img/items/${item.id}.webp`"
                                class="size-[55px] overflow-hidden rounded-md border border-b3 shadow-xs" />
                        </template>
                        <template
                            v-if="props.model.items.length < 6"></template>

                        <span class="h-full w-8"></span>
                        <icon
                            icon="fluent-mdl2:scroll-up-down"
                            class="absolute right-4 size-4" />
                    </Button>
                </PopoverTrigger>
            </DialogTrigger>

            <PopoverPortal>
                <PopoverContent @openAutoFocus.prevent>
                    <PopoverClose
                        class="absolute -left-96 -top-96 h-screen w-screen scale-150 bg-black/20">
                        <PopoverContent
                            class="relative w-(--popper-trigger-width) rounded-xl! px-7 py-5"
                            align="start"
                            :align-offset="-20"
                            side="bottom"
                            :side-offset="-0">
                            <InfoCard
                                title="Starter Items"
                                description="Your early game items. What are you starting with or buying first back?"
                                cardClass="max-h-inherit relative">
                                <div class="relative"></div>

                                <div
                                    class="max-h-inherit grid w-inherit auto-rows-min flex-col justify-center gap-2 overflow-y-auto">
                                    <div
                                        class="flex flex-row items-center pl-1.5">
                                        <Label
                                            variant="ghost"
                                            size="xs"
                                            disabled
                                            class="w-full grow truncate capitalize">
                                            <input
                                                type="radio"
                                                v-model="model"
                                                value=""
                                                class="peer hidden" />
                                        </Label>
                                    </div>

                                    <label
                                        v-for="set in sets"
                                        v-close-popper
                                        class="flex w-full items-center gap-3 overflow-hidden"
                                        :key="set.name">
                                        <template
                                            v-for="(item, index) in set.items"
                                            :key="item.id">
                                            <LoadImg
                                                v-if="index < 6"
                                                :url="`/img/items/${item.id}.webp`"
                                                class="border-1 size-[55px] rounded-md border-transparent shadow-xs" />
                                        </template>

                                        <!--           <Placeholder v-else class='size-14' /> -->

                                        <div
                                            class="pointer-events-none ml-1 grid size-6 items-center justify-start transition-all duration-300 group-hover:opacity-80">
                                            <input
                                                type="radio"
                                                v-model="model"
                                                @change="emit('update', model)"
                                                :value="set"
                                                class="radio radio-xs" />

                                            <icon
                                                v-if="
                                                    model &&
                                                    model.key == set.key
                                                "
                                                icon="teenyicons:tick-outline"
                                                class="size-3" />
                                        </div>
                                    </label>

                                    <!--   <template v-else>
                        <Placeholder v-for="index in 6" class='size-14' no-hover />
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
