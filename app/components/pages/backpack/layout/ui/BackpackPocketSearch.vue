<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"

const props = defineProps<
  Omit<InputProps, "defaultValue"> & {
    sidebarCollapsed: boolean
  }
>()

const delegated = reactiveOmit(props, "sidebarCollapsed")

const { search } = useBackpack()
</script>

<template>
  <LazyUPopover
    v-if="props.sidebarCollapsed"
    mode="hover"
    :content="{ side: 'right' }">
    <template #default="{ open }">
      <UButton
        :variant="open ? 'solid' : 'ghost'"
        :color="open ? 'neutral' : 'primary'"
        :active="open"
        icon="i-search"
        square />
    </template>
    <template #content>
      <UInput
        v-bind="delegated"
        v-model:model-value="search"
        variant="none"
        size="lg"
        placeholder="Search Backpack..."
        :ui="{
          base: 'w-full bg-p0 px-2',
          root: 'w-full',

          leadingIcon: '**:stroke-[2.3]'
        }"
        icon="i-search">
        <template #trailing>
          <LazyInputClear v-if="search" @click="search = ''" />
          <span v-else />
        </template>
      </UInput>
    </template>
  </LazyUPopover>

  <UInput
    v-else
    v-bind="delegated"
    v-model:model-value="search"
    placeholder="Search Backpack..."
    :ui="{
      base: 'grow rounded-3xl bg-p0 px-3 text-sm inset-shadow-none ring-p3/60',
      root: 'grow',

      leadingIcon: ''
    }"
    icon="i-search">
    <template #trailing>
      <LazyInputClear v-if="search" @click="search = ''" />
      <span v-else />
    </template>
  </UInput>
</template>
