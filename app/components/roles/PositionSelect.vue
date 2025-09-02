<script lang="ts" setup>
import { championPositions } from 'appdata'

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const emit = defineEmits(['update:select'])
const pocket = computed (() => p)
const select = ref('All')

const color = computed (() => championPositions.find(p => p.name == pocket.value.main.role).color)
</script>

<template>
  <Select
    v-model:model-value="pocket.main.role"
    class="p-0">
    <BaseSelectTrigger class="w-full hover:ring flex-nowrap pl-2 !flex items-center relative ring-offset-b1 ring-bc/60 ">
      <label
        class="group/btn h-9 flex rounded-lg badge badge-lg !h-6.5 px-2.5  gap-3   font-medium items-center w-min cursor-pointer"
        :style=" {
          backgroundColor: color,
          borderColor: color }">
        <component
          :is="`i-roles-${pocket.main.role}`"
          :class="cn('size-3.5  dst text-white shrink-0')" />

        <SelectValue
          placeholder="Select position"
          class="text-left text-white  capitalize" />

      </label>
    </BaseSelectTrigger>
    <LazySelectContent
      position="popper"
      class="!w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
          <span class="flex gap-3 items-center">
            <component
              :is="`i-roles-${position.name}`"
              class="h-4 w-auto dst shrink-0" />
            {{ position.name }}
          </span>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>