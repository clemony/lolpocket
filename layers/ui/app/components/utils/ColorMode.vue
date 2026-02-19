<script lang="ts" setup>
import {
  colorModeIconClass,
  colorModes,
} from "~~/layers/ui/app/config/colorMode"

const emit = defineEmits(["updateMode"])

const m = useColorMode()

const mode = computed(() => {
  return colorModes.map((c) => ({
    value: c,
    icon: `i-${c}`,
    label: c,
    ui: {
      item: cn(
        "group/mode btn relative h-11 bg-p0 noise py-3 pl-3 text-pc **:text-pc",
        m.preference === "system" ? m.value : c
      ),
    },
  }))
})
</script>

<template>
  <URadioGroup
    v-model:model-value="m.preference"
    :ui="{
      label: 'capitalize flex gap-2',
    }"
    indicator="end"
    variant="card"
    default-value="system"
    :items="mode"
    @update:model-value="user().settings?.theme === m.preference">
    <template #label="{ item }">
      <Icon
        :name="item.icon"
        :class="cn('size-4', colorModeIconClass[item.label])" />
      {{ item.label }}
    </template>
  </URadioGroup>
</template>
