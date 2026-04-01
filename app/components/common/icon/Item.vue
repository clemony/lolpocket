<script setup lang="ts">
import type { AvatarProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    AvatarProps & {
      id: number | null
      pin?: boolean
      class?: HTMLAttributes["class"]
      loadingIcon?: LoadingStyle
      map?: number
      side?: Side
      disabled?: boolean
      ui?: AvatarProps["ui"]
      effects?: boolean
    }
  >(),
  {
    effects: true,
    pin: true,
    interactive: true
  }
)

const delegated = reactiveOmit(props, "class")
</script>

<template>
  <Avatar
    v-bind="delegated"
    :ui="{
      ...props.ui,
      image: 'shadow-sm drop-shadow-sm drop-shadow-black/10',
      root: cn(
        { 'hover-3d': props.effects !== false },
        props.ui?.root,
        props?.class
      )
    }"
    :src="id ? `/img/item/${id}.webp` : ''"
    :label="id ? itemNameById(id) : ''">
    <template v-if="props.effects !== false">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </template>
    <template #content>
      <LazyItemTooltip v-if="id" :id :map />
    </template>
  </Avatar>
</template>
