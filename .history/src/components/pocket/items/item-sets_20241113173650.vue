<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from '@stores/itemStore'
import { usePocketStore } from '@stores/pocketStore'
import { deleteItemSet, newItemSet } from '@lib/functions/PocketUtilities'
import ItemSetItems from './item-set-items.vue'
import { generateRandomName } from '@lib/functions/Keygen'

const is = useItemStore()

const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocketKey = props.pocketKey

const pocket = ps.getPocket(pocketKey)

const items = ref<any[]>([])

if (pocket) {
    watch(
        pocket.items[0],
        (newPocket) => {
            pocket.items[0].itemSets = newPocket.itemSets || []
        },
        { immediate: true }
    )

    watch(items, (newItemSets) => {
        if (pocket) {
            pocket.items[0].itemSets = newItemSets
        }
    })
}

function updateStarredIndex(evt) {
    const { oldIndex, newIndex } = evt

    if (!pocket) {
        return
    }

    if (pocket.items[0].starred === oldIndex) {
        pocket.items[0].starred = newIndex
    } else if (
        pocket.items[0].starred > oldIndex &&
        pocket.items[0].starred <= newIndex
    ) {
        pocket.items[0].starred--
    } else if (
        pocket.items[0].starred < oldIndex &&
        pocket.items[0].starred >= newIndex
    ) {
        pocket.items[0].starred++
    }
}

const prevIndex = 0
</script>

<template>
    <VueDraggable
        v-if="pocket"
        tag="div"
        v-model="pocket.items[0].itemSets"
        :delay="0"
        :animation="300"
        :group="{ name: 'sets' }"
        :prevent-on-filter="true"
        ghostClass="ghost"
        :force-fallback="true"
        @end="updateStarredIndex"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        class="z-0 flex h-full w-full flex-col items-center gap-8">
        <TransitionGroup name="pop">
            <DisplayCard
                v-for="(set, index) in pocket.items[0].itemSets"
                dragClass="setDrag"
                :key="set.key"
                headerClass="pb-1"
                :cardClass="{
                    '@container/set relative w-[calc(100%-48px)]  inset-0 before:absolute before:bg-transparent before:border  before:w-full before:h-full  before:pointer-events-none before:border-transparent before:z-50  mx-[24px] before:rounded-box':
                        set,
                    ' before:border-neutral/70 before:shadow-inner':
                        set == is.selectedSet,
                }">
                <template #header>
                    <!--                 <label class="group/star items-center cursor-pointer  *:transition-all *:duration-300  size-3 relative">
                    <input type="radio" name="starSet" :value="index" class="peer hidden"
                        v-model="pocket.items[0].starred" @change="prevIndex = pocket.items[0].starred"
                        :checked="pocket.items[0].starred == index" />
                    <icon icon="iconoir:star-dashed" class="absolute z-10 opacity-30 group-hover/star:opacity-15 " />
                    <icon v-if="pocket.items[0].starred == index" icon="iconoir:star-solid"
                        class="absolute   text-yellow-300 group-hover/star:opacity-70  animate-in zoom-in-0 spin-in-90  duration-300"
                        :class="{
                            'slide-in-from-bottom-60': prevIndex > index,
                            'slide-in-from-top-60': prevIndex < index
                        }" />
                </label> -->

                    <div
                        class="-mt-1 flex w-fit items-center gap-1 overflow-hidden">
                        <InputEditable
                            v-model:modelValue="set.name"
                            :defaultValue="set.name"
                            class="w-fit items-center truncate border-transparent text-start align-baseline !text-base font-medium capitalize transition-all duration-300 focus-within:border-base-200 hover:border-base-200 @[230px]/set:hidden">
                            <Button
                                variant="simple"
                                size="xs"
                                class="h-full rounded-l-none px-0">
                                <icon
                                    icon="qlementine-icons:close-16"
                                    class="size-5.5 shrink-0" />
                            </Button>
                            <Button
                                variant="simple"
                                class="mr-1 h-full px-0"
                                size="xs"
                                @click.stop="
                                    set.name = generateRandomName() + ' Set'
                                ">
                                <icon
                                    icon="qlementine-icons:shuffle-16"
                                    class="size-4 shrink-0" />
                            </Button>
                        </InputEditable>
                    </div>

                    <span class="grow self-center"></span>

                    <VDropdown
                        theme="default"
                        placement="left-start"
                        class="arrow p-0">
                        <Button
                            variant="ghost"
                            class="!m-0 !aspect-square size-6 px-1">
                            <icon
                                icon="qlementine-icons:settings-16"
                                class="size-4.5 shrink-0 opacity-50" />
                        </Button>

                        <template #popper>
                            <VDropdown theme="hoverdd-inner">
                                <MenuButton text="Set Type" indent open />

                                <template #popper>
                                    <DdSetType :pocket="pocket" :set="set" />
                                </template>
                            </VDropdown>

                            <MenuButton
                                text="Clear Items"
                                alt="Clear Items"
                                @click="is.resetItems(set.key)">
                                <icon
                                    icon="qlementine-icons:eraser-16"
                                    class="-ml-1 size-4" />
                            </MenuButton>

                            <Separator />

                            <MenuButton
                                text="Delete Set"
                                alt="Delete Set"
                                @click="deleteItemSet(pocket.key, set.key)"
                                :disabled="is.itemSets.length == 1">
                                <icon
                                    icon="ant-design:delete-outlined"
                                    class="-ml-1 size-[14px]" />
                            </MenuButton>
                        </template>
                    </VDropdown>

                    <label
                        class="ml-3 aspect-square size-5.5 shrink-0 rounded-full ring-base-300 hover:ring-1 focus:ring-1">
                        <input
                            type="radio"
                            name="itemset"
                            v-model="is.selectedSet"
                            :value="set"
                            class="hidden" />
                        <img
                            v-if="is.selectedSet == set"
                            src="/img/ui/check.png"
                            class="size-5.5 shrink-0" />

                        <img
                            v-if="is.selectedSet != set"
                            src="/img/ui/circle.png"
                            class="size-5.5 shrink-0 opacity-20" />
                    </label>
                </template>

                <ItemSetItems :pocketKey="pocketKey" :set="set" />
            </DisplayCard>
        </TransitionGroup>
        <Card
            class="grid h-[60px] cursor-pointer items-center justify-center bg-base-200/10 opacity-60 shadow-none transition-all duration-500 hover:bg-transparent hover:opacity-100 hover:!shadow-sm"
            @click="newItemSet(pocket.key)">
            <icon icon="teenyicons:add-outline" class="size-6 opacity-40" />
        </Card>
    </VueDraggable>
</template>

<style scoped>
.v-popper--shown {
    .i1 {
        @apply opacity-0;
    }

    .i2 {
        @apply opacity-80;
    }
}

.ghost {
    @apply m-4 w-[96%] rounded-box bg-base-200;
}
</style>
