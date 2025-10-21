<script setup lang="ts">
import type { MenubarRadioGroup } from '../menubar.types'

const { item } = defineProps<{ item: MenubarRadioGroup }>()

const modelProxy = computed({
  get: () => item.model?.valueOf(),
  set: v => item.model?.set(v),
})
</script>

<template>
  <MenubarRadioGroup v-model:model-value="modelProxy as string">
    <MenubarLabel class="pt-2 pb-1 sticky top-0 before:bg-b1/30 z-1 before:absolute before:top-0 before:left-0 before:mix-blend-lighten  before:z-1  -mx-1 px-3 -translate-y-1 backdrop-blur">
      <span class="z-2 isolate">
        {{ item.name }}
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="option in item.options"
      :key="option"
      class="[&_#indicator]:order-last z-0"
      :value="option">
      <Element size="icon">
        <component
          :is="item.optionIcon(option)"
          v-if="item.optionIcon"
          class="absolute" />
      </Element>
      <span class="grow">
        {{ item.optionName ? item.optionName(option) : option }}
      </span>
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>