<script lang="ts" setup>
import { pathIndex } from "~~/shared/constants/runes/pathIndex"

const { pocket } = defineProps<{
  pocket: Pocket
}>()

const runes = computed(() => {
  if (!pocket.runes?.length) return
  if (pocket._runes) {
    const a = pocket.runes.find((set) => set.id === pocket._runes)
    return {
      keystone: a?.keystone,
      secondary: a?.secondary.path
    }
  } else if (pocket.runes[0]?.keystone)
    return {
      keystone: pocket.runes[0]?.keystone,
      secondary: pocket.runes[0]?.secondary.path
    }
  else return null
})
</script>

<template>
  <div v-if="runes?.keystone || runes?.secondary" class="flex gap-1">
    <FoilLayer
      :mask="runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined">
      <UAvatar
        :src="runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined"
        :ui="{
          root: 'card-scale overflow-visible border-none bg-transparent shadow-none',
          image: 'overflow-visible'
        }"
        size="lg" />
    </FoilLayer>
    <FoilLayer
      :mask="
        runes?.secondary ? `/img/path/${runes.secondary}.webp` : undefined
      ">
      <UAvatar
        :ui="{
          root: 'card-scale overflow-visible border-none bg-transparent p-1 shadow-none',
          image: 'overflow-visible'
        }"
        :icon="
          runes?.secondary
            ? pathIndex[Number(parseInt(runes.secondary))]?.icon
            : 'i-lp-rune'
        "
        size="lg" />
    </FoilLayer>
  </div>
</template>
