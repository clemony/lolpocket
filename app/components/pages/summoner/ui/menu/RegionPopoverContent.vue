<script lang="ts" setup>
import { regionIndex } from '#shared/appdata/index/region-index'
import { PopoverArrow } from 'reka-ui'

defineOptions({
  inheritAttrs: false
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:model-value'])
const modelValue = ref(as().account.region)
</script>

<template>
  <LazyPopoverContent
    align="end"
    :class="
      cn(
        'w-86 rounded-lg -translate-x-34 -translate-y-10.25 p-0  h-100',
        className,
      )
    ">
    <!--  <PopoverArrow /> -->
    <div class="size-full overflow-y-auto grid gap-px pb-2 px-1">
      <div
        class="w-full flex items-center mb-2 h-11 sticky top-0 bg-b1 z-1 border-b">
        <Label class="px-4 text-bc/50">Select Region...</Label>
      </div>

      <Button
        v-for="region in Object.keys(regionIndex)"
        :key="region"
        size="sm"
        variant="ghost"
        :value="region"
        :class="
          cn(
            'flex rounded-md items-center gap-3 text-2 justify-start py-1.5 text-nowrap',
            { 'btn-active !bg-b2/30': region === modelValue },
          )
        ">
        <span class="">
          {{ regionIndex[region] }}
        </span>
        <span class="uppercase grow opacity-50">
          ({{ capitalize(region) }})
        </span>

        <input
          v-model="modelValue"
          type="radio"
          :value="region"
          v-bind="$attrs"
          class="hidden"
          @change="emit('update:model-value', modelValue)" />
        <icon
          v-if="region === modelValue"
          name="tick-sm" />
      </Button>
    </div>
  </LazyPopoverContent>
</template>
