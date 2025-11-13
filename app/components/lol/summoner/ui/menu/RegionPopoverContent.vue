<script lang="ts" setup>
import { regionIndex } from "~~/shared/references";

defineOptions({
  inheritAttrs: false,
});

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const emit = defineEmits(["update:model-value"]);
const modelValue = ref(as().account.region);
</script>

<template>
  <LazyPopoverContent
    align="end"
    :class="
      cn(
        'h-100 w-86 -translate-x-34 -translate-y-10.25 rounded-lg p-0',
        className,
      )
    "
  >
    <!--  <PopoverArrow /> -->
    <div class="grid size-full gap-px overflow-y-auto px-1 pb-2">
      <div
        class="sticky top-0 z-1 mb-2 flex h-11 w-full items-center border-b bg-b1"
      >
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
            `
              flex items-center justify-start gap-3 rounded-md py-1.5 text-2
              text-nowrap
            `,
            { 'btn-active !bg-b2/30': region === modelValue },
          )
        "
      >
        <span class="">
          {{ regionIndex[region] }}
        </span>
        <span class="grow uppercase opacity-50">
          ({{ capitalize(region) }})
        </span>

        <input
          v-model="modelValue"
          type="radio"
          :value="region"
          v-bind="$attrs"
          class="hidden"
          @change="emit('update:model-value', modelValue)"
        />
        <icon v-if="region === modelValue" name="tick-sm" />
      </Button>
    </div>
  </LazyPopoverContent>
</template>
