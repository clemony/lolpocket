<script lang="ts" setup>
import { championPositions } from '#shared/appdata'

const {
  side,
  sideOffset,
  align,
  alignOffset,
  class: className,
  pocket: p,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const emit = defineEmits(['update:select'])
const pocket = computed(() => p)
const select = ref('All')

const color = computed(
  () => championPositions.find(p => p.name === pocket.value.main.role).color
)
</script>

<template>
  <Select
    v-model:model-value="pocket.main.role"
    class="p-0">
    <BaseSelectTrigger
      icon-class="opacity-10 group-hover/select:opacity-50"
      :class="
        cn(
          'w-full hover:ring hover:ring-b3/50 flex-nowrap pl-2 h-8 !flex items-center relative ',
          className,
        )
      ">
      <PositionBadge
        :position="pocket.main?.role"
        class="badge-sm text-xs">
        <SelectValue
          placeholder="Select position"
          class="text-left text-white capitalize" />
      </PositionBadge>
    </BaseSelectTrigger>
    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
          <PositionBadge :position="position.name" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
