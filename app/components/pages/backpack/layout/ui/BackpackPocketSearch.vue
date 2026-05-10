<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const props = defineProps<
  Omit<InputProps, "defaultValue"> & {
    collapsed: boolean
  }
>()

const search = defineModel<string>("search", { default: "" })

const delegated = reactiveOmit(props, "collapsed")
</script>

<template>
  <LazyUPopover
    v-if="props.collapsed"
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
    placeholder="Backpack"
    :ui="{
      base: 'w-full bg-p0 px-2 placeholder:font-semibold placeholder:text-pc',
      root: 'w-full',

      leadingIcon: 'text-pc opacity-100 **:stroke-[2.4]'
    }"
    icon="i-search">
    <template #trailing>
      <LazyInputClear v-if="search" @click="search = ''" />
      <span v-else />
    </template>
  </UInput>
</template>
