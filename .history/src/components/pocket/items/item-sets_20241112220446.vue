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

const start = ref(pocket.items[0].start[0])
const core = ref(pocket.items[0].core[0])

const final = ref(pocket.items[0].final[0])

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

const dropdownShown = reactive({})

const submitAndClose = (key) => {
    console.log('Form submitted for set key:', key)
    dropdownShown[key] = false
}

function clear(set) {
    if (set == core) {
        core.value = null
    } else if (set == start) {
        start.value = null
    } else if (set == final) {
        final.value = null
    }
}

function startChange(set, event) {
    event.target.value == true ?
        (pocket.items[0].final[0] = set)
    :   (pocket.items[0].start[0] = null)
}

function coreChange(set, event) {
    event.target.value == true ?
        (pocket.items[0].core[0] = set)
    :   (pocket.items[0].core[0] = null)
}

function finalChange(set, event) {
    event.target.value == true ?
        (pocket.items[0].final[0] = set)
    :   (pocket.items[0].final[0] = null)
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
        class="z-0 flex h-full flex-col gap-8">
        <TransitionGroup name="pop">
            <InfoCard
                v-for="(set, index) in pocket.items[0].itemSets"
                dragClass="setDrag"
                :key="set.key"
                headerClass="pb-2"
                :cardClass="{
                    'ring-1 ring-base-300 ring-offset-2': set == is.selectedSet,
                }"
                :open="false">
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

                    <div class="-ml-2.5 -mt-1 flex w-fit items-center gap-3">
                        <label @click.stop>
                            <input
                                type="radio"
                                name="itemset"
                                v-model="is.selectedSet"
                                :value="set" />
                            <img
                                v-if="is.selectedSet == set"
                                src="/img/ui/check.png"
                                class="size-5.5" />

                            <img
                                v-if="is.selectedSet != set"
                                src="/img/ui/circle.png"
                                class="size-5.5" />
                        </label>

                        <InputEditable
                            v-model:modelValue="set.name"
                            :defaultValue="set.name"
                            class="items-center border-transparent pr-10 text-start align-baseline !text-base font-medium capitalize transition-all duration-300 focus-within:border-base-200 hover:border-base-200">
                            <div class="mt-1 flex gap-1">
                                <button>
                                    <icon
                                        icon="teenyicons:x-outline"
                                        class="p-[1px]" />
                                </button>
                                <button
                                    @click.stop="
                                        set.name = generateRandomName() + ' Set'
                                    ">
                                    <icon
                                        icon="ant-design:question-outlined"
                                        class="-mt-1" />
                                </button>
                            </div>
                        </InputEditable>
                    </div>

                    <span class="h-1/2 grow self-center"></span>

                    <VDropdown
                        theme="default"
                        placement="left-start"
                        class="arrow">
                        <button
                            class="group/menu relative flex size-4 items-center justify-center">
                            <icon
                                icon="teenyicons:cog-outline"
                                class="i1 absolute size-3 opacity-50 group-hover/menu:opacity-0" />
                            <icon
                                icon="teenyicons:cog-solid"
                                class="i2 absolute size-3 opacity-0 group-hover/menu:opacity-80" />
                        </button>

                        <template #popper>
                            <div
                                class="text-baseline relative items-center rounded-lg p-1 shadow-[inset_1px_1px_10px_10px,_rgba(255,_255,_255,_0.9)]">
                                <div
                                    class="grid flex-nowrap items-center gap-1">
                                    <button
                                        class="btn btn-ghost btn-xs flex items-center !justify-start gap-3 px-3 hover:bg-base-200"
                                        alt="Clear Items"
                                        @click="is.resetItems(set.key)">
                                        <icon
                                            icon="ph:eraser"
                                            class="-ml-1 size-4" />
                                        <span>Clear Items</span>
                                    </button>
                                    <div class="border-b border-base-200"></div>
                                    <button
                                        class="group/trash btn btn-ghost btn-xs relative flex items-center !justify-start gap-3 px-3 hover:bg-base-200 disabled:cursor-not-allowed disabled:bg-transparent"
                                        alt="Delete Set"
                                        @click="
                                            deleteItemSet(pocket.key, set.key)
                                        "
                                        :disabled="is.itemSets.length == 1">
                                        <icon
                                            icon="iconoir:bin-full"
                                            class="-ml-1 size-4 object-center group-disabled/trash:opacity-0" />
                                        <icon
                                            icon="iconoir:bin"
                                            class="absolute -ml-1 size-4 opacity-0 group-disabled/trash:opacity-60" />
                                        <span>Delete Set</span>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </VDropdown>
                </template>

                <template #description>
                    <div class="mt-3 flex flex-wrap items-center gap-2.5"></div>

                    <div class="mt-3 flex items-center gap-2.5">
                        <p>Type:</p>
                        <label>
                            <Badge
                                :variant="
                                    set == pocket.items[0].start[0] ?
                                        'inspiration'
                                    :   'outline'
                                "
                                size="sm"
                                class="cursor-pointer font-semibold">
                                Start
                            </Badge>
                            <input
                                type="radio"
                                name="set-type"
                                @change="pocket.items[0].start[0] = set"
                                class="hidden"
                                :value="set" />
                        </label>
                        <label>
                            <Badge
                                :variant="
                                    set == pocket.items[0].core[0] ?
                                        'precision'
                                    :   'outline'
                                "
                                size="sm"
                                class="cursor-pointer font-semibold">
                                Core

                                <input
                                    type="radio"
                                    name="set-type"
                                    @change="coreChange(set, $event)"
                                    class="hidden"
                                    :value="set" />
                            </Badge>
                        </label>
                        <label>
                            <Badge
                                :variant="
                                    set == pocket.items[0].final[0] ?
                                        'resolve'
                                    :   'outline'
                                "
                                size="sm"
                                class="cursor-pointer font-semibold">
                                Complete
                            </Badge>
                            <input
                                type="checkbox"
                                :true-value="set"
                                @change="finalChange(set, $event)"
                                class="hidden"
                                :value="set" />
                        </label>

                        <Badge
                            size="sm"
                            :variant="
                                (
                                    set != pocket.items[0].final[0] &&
                                    set != pocket.items[0].core[0] &&
                                    set != pocket.items[0].start[0]
                                ) ?
                                    'default'
                                :   'outline'
                            "
                            class="cursor-pointer font-medium"
                            @click="clear(set)">
                            none
                        </Badge>
                    </div>
                </template>

                <ItemSetItems :pocketKey="pocketKey" :set="set" />
            </InfoCard>
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
