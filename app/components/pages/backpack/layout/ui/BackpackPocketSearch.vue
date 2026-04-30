<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const props = defineProps<InputProps>()
const search = defineModel<string>("search", { default: "" })
</script>

<template>
  <UInput
    v-model:model-value="search"
    :ui="{ base: 'w-full', root: 'w-full' }"
    icon="i-search">
    <template #trailing>
      <InputClear v-if="search" @click="search = ''" />
      <span v-else />
    </template>
  </UInput>
</template>
