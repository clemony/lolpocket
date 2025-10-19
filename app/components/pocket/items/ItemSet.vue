<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const { pocket, set: itemSet } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const isDragging = ref<boolean>(false)
const count = ref<number>(0)

const set = computed(() => itemSet)

function onEnd() {
  count.value + 1
}
const open = ref<boolean>(false)
const name = ref<string>('')
onMounted(() => {
  name.value = itemSet.name || ''
})

function onOpen() {
  open.value ? name.value = set.value.name : set.value.name = name.value
}
</script>

<template>
  <div
    :key="set.name"
    class="pb-3 pt-4 px-2 field-box group/set">
    <!-- <input v-model="is().selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" /> -->

    <Popover
      v-model:open="open"
      @update:open="onOpen()">
      <PopoverTrigger
        class="open:opacity-0 *:font-semibold min-w-54 *:tracking-tight  z-0  hover:border-bc/60 max-w-90 h-10 cursor-text transition-colors duration-300  field-legend ">
        {{ set.name || 'Set name...' }}
      </PopoverTrigger>
      <PopoverContent
        as-child
        align="start"
        class="bg-transparent backdrop-blur-none p-0 w-[var(--reka-popover-trigger-width)] -translate-x-3 -translate-y-[calc(var(--reka-popover-trigger-height)+4px)]"
        @interact-outside="set.name = name">
        <InputGroup class=" field-sizing-content h-7 border-b4 pr-1 bg-transparent">
          <InputGroupInput
            v-model:model-value="name"
            placeholder="Set name..."
            class="peer bg-transparent w-max font-semibold tracking-tight shadow-none inset-shadow-none field-sizing-content"
            @clear:input="name = ''"
            @keydown.enter="set.name = name"
            @blur="set.name = name"
            @focusout="set.name = name" />
          <InputGroupButton
            size="icon-xs"
            :class="cn('', { 'opacity-0 pointer-events-none': !name, 'opacity-100 pointer-events-auto': name })"
            class="rounded-full"
            variant="ghost"
            hover="neutral">
            <icon
              name="x"
              class="size-3" />
          </InputGroupButton>
          <InputGroupButton
            size="icon-xs"
            class="rounded-full"
            variant="ghost"
            hover="neutral">
            <icon
              name="shuffle"
              class="size-3.5" />
          </InputGroupButton>
        </InputGroup>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger
        class="size-6.5 grid group/pop place-items-center -top-2 absolute -right-1">
        <Button
          variant="neutral"
          shape="square"
          class="group/trig ease-spring-bouncy overflow-hidden scale-0 group-hover/set:scale-100 group-open/pop:scale-100 group-open/pop:opacity-100 transition-all duration-200 opacity-0 group-hover/set:opacity-100 !size-6.5 z-2 rounded-full">
          <icon
            name="more"
            class="size-4 shrink-0 !text-nc/70 absolute" />
        </Button>
      </PopoverTrigger>

      <LazyPopoverContent
        align="end"
        :side-offset="1"
        class="w-64">
        <LazyItemSetMenu
          :pocket="pocket"
          :set="itemSet" />
      </LazyPopoverContent>
    </Popover>

    <div
      :key="`${set.name}-${count}`"
      v-draggable="[
        set,
        {
          group: {
            name: 'items',
            pull: true,
            put: true,
            revertClone: false,
          },
          delay: 0,
          animation: 100,
          forceFallback: false,
          removeOnSpill: true,
          emptyInsertThreshold: 24,
          swapThreshold: 24,
          filter: 'no-drag',
        },
      ]"
      class="flex px-4  pt-2 pb-2 **:select-none h-fit min-h-23 flex-wrap justify-start gap-3 group"
      @end="onEnd"
      @start="isDragging = true">
      <LazyItemPopover
        v-for="item in set.items"
        :id="item"
        :key="item.toString()"
        class="size-20 aspect-square  group/x">
        <div
          class="size-full">
          <Button
            variant="neutral"
            shape="square"
            class="ease-spring-bouncy size-6.5 grid group/x place-items-center -top-2 absolute hover-ring -right-2.5 overflow-hidden scale-0 group-hover/x:scale-100 group-open/x:scale-100 group-open/x:opacity-100 transition-all duration-200 opacity-0 group-hover/x:opacity-100 !size-6.5 z-2 rounded-full"
            @click="removeItemFromSet(pocket, itemSet, item)">
            <icon
              name="x"
              class="size-3.5 shrink-0 !text-nc/70 absolute" />
          </Button>
        </div>
      </LazyItemPopover>

      <transition-slide>
        <div
          v-show="!set.items.length"
          class="rounded-lg border-0 size-20 shadow-sm shadow-black/7 bg-b3/40 animate-in zoom-in no-drag" />
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
