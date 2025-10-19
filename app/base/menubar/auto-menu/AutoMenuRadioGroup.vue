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
    <MenubarLabel>{{ item.name }}</MenubarLabel>

    <MenubarRadioItem
      v-for="option in item.options"
      :key="option"
      :value="option">
      <component
        :is="item.optionIcon(option)"
        v-if="item.optionIcon"
        class="size-6" />
      {{ item.optionName ? item.optionName(option) : option }}
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>