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
        'mx-2 -mt-0.75 flex size-full w-max shrink-0 flex-col place-items-center gap-0.75',
        className
      )
    ">
    <HoverIcon :id="keystone?.id ?? null" size="md" type="keystone" />

    <HoverIcon
      v-if="player?.runes?.secondary.path"
      :id="s"
      size="xs"
      type="path" />
  </div>
</template>
