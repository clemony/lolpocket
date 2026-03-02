<script lang="ts" setup>
import { pathIndex } from "#shared/constants/runes/pathIndex"
import { runeIndex } from "#shared/constants/runes/runeIndex"
import Path from "~/components/common/icon/Path.vue"

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
const s = computed(() =>
  pathIndex.find(p => p.id === player?.runes?.secondary.path)
)

const keystone = computed(() =>
  runeIndex.find(r => r.id === player.runes?.keystone)
)
</script>

<template>
  <div
    :class="
      cn(
        'mx-2 -mt-px flex size-full w-max shrink-0 flex-col place-items-center gap-1',
        className,
      )
    ">
    <Keystone
      :id="keystone?.id ?? null"
      class="size-7.5 transition-all duration-300 hover:scale-120" />

    <Path
      class="size-6 transition-all duration-300 hover:scale-120"
      :name="s?.name" />
  </div>
</template>
