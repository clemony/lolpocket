<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const props = defineProps<Omit<InputProps, "defaultValue">>()
const search = defineModel<string>("search", { default: "" })
</script>

<template>
  <UInput
    v-bind="props"
    v-model:model-value="search"
    placeholder="Search backpack..."
    :ui="{ base: 'w-full bg-p0', root: 'w-full' }"
    icon="i-search">
    <template #trailing>
      <LazyInputClear v-if="search" @click="search = ''" />
      <span v-else />
    </template>
  </UInput>
</template>
