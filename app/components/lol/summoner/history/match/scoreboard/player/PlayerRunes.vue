<script lang="ts" setup>
import { runeIndex } from "#shared/constants/runes/runeIndex"

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes["class"]
}>()
const s = computed(() => player?.runes?.secondary.path)

const keystone = computed(() =>
  runeIndex.find((r) => r.id === player.runes?.keystone)
)
</script>

<template>
  <div
    :class="
      cn(
        'mx-2 flex size-full w-max shrink-0 flex-col items-center gap-0.75',
        className
      )
    ">
    <HoverIcon
      :id="keystone?.id ?? null"
      size="sm"
      type="keystone"
      :avatar="{
        ui: { image: 'size-9' }
      }" />

    <HoverIcon
      v-if="player?.runes?.secondary.path"
      :id="s"
      size="xs"
      :avatar="{
        ui: { root: 'translate-x-px ' }
      }"
      type="path" />
  </div>
</template>
