<script lang="ts" setup>
import { regionIndex } from "#shared/constants/misc/region-index"

defineOptions({
  inheritAttrs: false
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits(["update:model-value"])
const modelValue = ref(user().account?.region)
const regions = Object.keys(regionIndex) as Array<keyof typeof regionIndex>
</script>

<template>
  <LazyPopoverContent
    align="end"
    :class="
      cn(
        'h-100 w-86 -translate-x-34 -translate-y-10.25 rounded-lg p-0',
        className
      )
    ">
    <!--  <PopoverArrow /> -->
    <div class="grid size-full gap-px overflow-y-auto px-1 pb-2">
      <div
        class="sticky top-0 z-1 mb-2 flex h-11 w-full items-center border-b bg-p0">
        <Label class="px-4 text-pc/50">Select Region...</Label>
      </div>

      <UButton
        v-for="region in regions"
        :key="region"
        size="sm"
        variant="ghost"
        :value="region"
        :class="
          cn(
            'flex items-center justify-start gap-3 rounded-md py-1.5 text-sm text-nowrap',
            { 'btn-active bg-p2/30!': region === modelValue }
          )
        ">
        <span class="">
          {{ regionIndex[region] }}
        </span>
        <span class="grow uppercase opacity-50">
          ({{ capitalize(region) }})
        </span>

        <input
          v-model="modelValue"
          class="hidden"
          v-bind="$attrs"
          type="radio"
          :value="region"
          @change="emit('update:model-value', modelValue)" />
        <icon v-if="region === modelValue" name="tick-sm" />
      </UButton>
    </div>
  </LazyPopoverContent>
</template>
