<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    AvatarProps & {
      id: number | null
      name?: string
      interactive?: boolean
      class?: HTMLAttributes["class"]
      loadingIcon?: LoadingStyle
      map?: number
      side?: Side
      disabled?: boolean
      pin?: boolean
      ui?: AvatarProps["ui"]
      effects?: boolean
    }
  >(),
  {
    effects: true,
    pin: false,
    interactive: true
  }
)

const delegated = reactiveOmit(props, "class")

const path = computed(
  () => props.name || (props.id ? pathNameById(props.id) : undefined)
)
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
    :src="id ? `/img/path/${path}.webp` : ''"
    :label="id ? path : ''">
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
  </Avatar>
</template>
