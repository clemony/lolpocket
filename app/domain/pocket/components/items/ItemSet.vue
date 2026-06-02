<script setup lang="ts">
import { SparkleIcon } from "#components"
import { vDraggable } from "vue-draggable-plus"
import { removeItemFromSet } from "~/domain/pocket/utils/manage/handleItems"

const { pocket, set: itemSet } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const isDragging = ref<boolean>(false)
const count = ref<number>(0)

const set = computed(() => itemSet)

function onEnd() {
  return count.value + 1
}
const open = ref<boolean>(false)
const name = ref<string>("")
onMounted(() => {
  name.value = itemSet.name || ""
})

function onOpen() {
  open.value ? (name.value = set.value.name) : (set.value.name = name.value)
}
</script>

<template>
  <UCard
    :key="set.name"
    :ui="{
      root: 'overflow-visible',
      header: 'absolute translate-x-4 -translate-y-5 p-0!',
      body: 'px-2! pt-4! pb-3!'
    }">
    <!-- <input v-model="is().selectedItemSet" type="radio" name="selected-set" class="!hidden z-0" /> -->
    <template #header>
      <UPopover
        v-model:open="open"
        :content="{
          align: 'start',
          onInteractOutside() {
            set.name = name
          }
        }"
        :ui="{
          content:
            'w-[calc(var(--reka-popover-trigger-width)+3.5rem)] -translate-x-0 -translate-y-[calc(var(--reka-popover-trigger-height)+8px)] p-0'
        }"
        @update:open="onOpen()">
        <UButton
          variant="ghost"
          :ui="{
            base: 'bg-p0! hover:bg-p0! hover:inset-ring hover:inset-ring-p3',
            label: 'text-sm tracking-tight'
          }"
          size="sm"
          color="base"
          :label="set.name || 'Set name...'" />

        <template #content>
          <UInput
            v-model:model-value="name"
            size="sm"
            :ui="{
              root: 'w-full',
              base: 'grow pr-16',
              trailing: 'right-0 flex translate-x-1 items-center gap-0'
            }"
            placeholder="Set name..."
            @clear-input="name = ''"
            @keydown.enter="set.name = name"
            @blur="set.name = name"
            @focusout="set.name = name">
            <template #trailing>
              <LazyInputClear
                :ui="{
                  base: 'relative -mr-1 grid size-6! max-h-6! max-w-6! place-items-center rounded-md',
                  leadingIcon: 'absolute size-3.5'
                }"
                @clear-input="is().filters.query = ''" />
              <UTooltip :content="{ side: 'top' }" text="Magic Name">
                <UButton
                  size="xs"
                  color="neutral"
                  :icon="h(SparkleIcon, { class: 'size-3.5 absolute' })"
                  :ui="{
                    base: 'relative grid size-6! max-h-6! max-w-6! min-w-6! place-items-center rounded-md'
                  }" />
              </UTooltip>
            </template>
          </UInput>
        </template>
      </UPopover>
      <UPopover
        :content="{
          align: 'end',
          sideOffset: 1
        }"
        :ui="{ content: 'w-64' }">
        <UButton
          icon="more"
          class="group/pop group/trig absolute -top-2 -right-1 z-2 grid size-6.5 scale-0 place-items-center overflow-hidden rounded-full opacity-0 transition-all duration-200 ease-spring-bouncy group-open/pop:scale-100 group-open/pop:opacity-100 group-hover/set:scale-100 group-hover/set:opacity-100"
          color="neutral"
          square />
        <template #content>
          <LazyItemSetMenu :pocket="pocket" :set="itemSet" />
        </template>
      </UPopover>
    </template>
    <div
      class="flex h-fit min-h-23 w-full flex-wrap justify-start gap-3 px-4 py-2 select-none **:select-none">
      <DraggableIcon
        v-for="(item, i) in set.items"
        :id="item"
        :key="item"
        group="item-list"
        type="item"
        :data="computed(() => ({ id: item }))"
        list="item"
        drag="clone"
        :index="i"
        :icon="{ avatar: { size: '8xl' }, id: item, type: 'item' }">
        <UButton
          class="group/x hover-ring absolute -top-2 -right-2.5 z-2 grid size-6.5! scale-0 place-items-center overflow-hidden rounded-full opacity-0 transition-all duration-200 ease-spring-bouncy group-open/x:scale-100 group-open/x:opacity-100 group-hover/x:scale-100 group-hover/x:opacity-100"
          color="neutral"
          shape="square"
          @click="removeItemFromSet(pocket, itemSet, item)">
          <icon class="absolute size-3.5 shrink-0 text-nc!" name="x" />
        </UButton>
      </DraggableIcon>
    </div>

    <div
      v-show="!set.items.length"
      class="animate-in zoom-in no-drag size-20 rounded-lg border-0 bg-p3/40 shadow-sm shadow-black/7" />
  </UCard>
</template>
