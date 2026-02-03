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
  open.value ? (name.value = set.value.name) : (set.value.name = name.value)
}
</script>

<template>
  <div :key="set.name" class="field-box group/set px-2 pt-4 pb-3">
    <!-- <input v-model="is().selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" /> -->

    <Popover v-model:open="open" @update:open="onOpen()">
      <PopoverTrigger
        class="field-legend hover:border-bc/60 z-0 h-10 max-w-90 min-w-54 cursor-text transition-colors duration-300 *:font-semibold *:tracking-tight open:opacity-0"
      >
        {{ set.name || "Set name..." }}
      </PopoverTrigger>
      <PopoverContent
        class="w-(--reka-popover-trigger-width) -translate-x-3 -translate-y-[calc(var(--reka-popover-trigger-height)+4px)] bg-transparent p-0 backdrop-blur-none"
        as-child
        align="start"
        @interact-outside="set.name = name"
      >
        <InputGroup
          class="border-b4 field-sizing-content h-7 bg-transparent pr-1"
        >
          <InputGroupInput
            v-model:model-value="name"
            class="peer field-sizing-content w-max bg-transparent font-semibold tracking-tight shadow-none inset-shadow-none"
            placeholder="Set name..."
            @clear-input="name = ''"
            @keydown.enter="set.name = name"
            @blur="set.name = name"
            @focusout="set.name = name"
          />
          <InputGroupButton
            class="rounded-full"
            size="icon-xs"
            :class="
              cn('', {
                'pointer-events-none opacity-0': !name,
                'pointer-events-auto opacity-100': name,
              })
            "
            variant="ghost"
            hover="neutral"
          >
            <icon class="size-3" name="x" />
          </InputGroupButton>
          <InputGroupButton
            class="rounded-full"
            size="icon-xs"
            variant="ghost"
            hover="neutral"
          >
            <icon class="size-3.5" name="shuffle" />
          </InputGroupButton>
        </InputGroup>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger
        class="group/pop absolute -top-2 -right-1 grid size-6.5 place-items-center"
      >
        <Button
          class="group/trig ease-spring-bouncy z-2 size-6.5! scale-0 overflow-hidden rounded-full opacity-0 transition-all duration-200 group-open/pop:scale-100 group-open/pop:opacity-100 group-hover/set:scale-100 group-hover/set:opacity-100"
          color="neutral"
          shape="square"
        >
          <icon class="text-nc! absolute size-4 shrink-0" name="more" />
        </Button>
      </PopoverTrigger>

      <LazyPopoverContent class="w-64" align="end" :side-offset="1">
        <LazyItemSetMenu :pocket="pocket" :set="itemSet" />
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
      class="group flex h-fit min-h-23 flex-wrap justify-start gap-3 px-4 py-2 **:select-none"
      @end="onEnd"
      @start="isDragging = true"
    >
      <LazyItemTooltip
        v-for="item in set.items"
        :id="item"
        :key="item.toString()"
        class="group/x aspect-square size-20"
      >
        <div class="size-full">
          <Button
            class="group/x hover-ring ease-spring-bouncy absolute -top-2 -right-2.5 z-2 grid size-6.5! scale-0 place-items-center overflow-hidden rounded-full opacity-0 transition-all duration-200 group-open/x:scale-100 group-open/x:opacity-100 group-hover/x:scale-100 group-hover/x:opacity-100"
            color="neutral"
            shape="square"
            @click="removeItemFromSet(pocket, itemSet, item)"
          >
            <icon class="text-nc! absolute size-3.5 shrink-0" name="x" />
          </Button>
        </div>
      </LazyItemTooltip>

      <transition-slide>
        <div
          v-show="!set.items.length"
          class="animate-in zoom-in no-drag bg-b3/40 size-20 rounded-lg border-0 shadow-sm shadow-black/7"
        />
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
