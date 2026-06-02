<script setup lang="ts">
import type { AvatarProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    AvatarProps & {
      id?: number | null
      k?: string
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
    pin: true,
    interactive: true
  }
)

const delegated = reactiveOmit(props, "k", "id")

const champId = computed(() => (props.k ? champIdByKey(props.k) : props.id))
const champName = computed(() =>
  champId.value ? champNameById(champId.value) : ""
)
</script>

<template>
  <Avatar
    v-if="champId"
    :id="champId"
    v-bind="delegated"
    :ui="{
      ...props.ui,
      image: 'shadow-sm drop-shadow-sm drop-shadow-black/10',
      root: cn('hover-3d', props.ui?.root, props?.class)
    }"
    :label="champName"
    :src="champId ? `/img/champion/${champId}.webp` : undefined">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <template #content>
      <slot name="content" />
    </template>
  </Avatar>
</template>
