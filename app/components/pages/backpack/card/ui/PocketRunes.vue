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
  <div
    v-if="runes?.keystone || runes?.secondary"
    class="relative flex h-9 items-center gap-1 pr-1.5 pl-0.5">
    <FoilLayer
      mask-size="75%"
      :mask="runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined">
      <UAvatar
        :title="runeNameById(Number(runes?.keystone))"
        :src="runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined"
        :ui="{
          image: 'drop-shadow-xs',
          root: 'card-scale pointer-events-auto! overflow-visible border-none bg-transparent shadow-none'
        }"
        size="lg" />
    </FoilLayer>
    <div
      :class="
        cn(
          'absolute -right-1.5 -bottom-1.5 grid size-7 place-items-center rounded-full bg-radial from-p0 from-40% to-transparent to-70%'
        )
      ">
      <FoilLayer
        mask-size="52%"
        class="size-max shrink-0 rounded-full"
        :mask="
          runes?.secondary
            ? `/img/path/${runes.secondary.toString()}.webp`
            : undefined
        ">
        <UAvatar
          :title="pathIndex[runes?.secondary as number]?.name"
          :src="
            runes?.secondary
              ? `/img/path/${runes.secondary.toString()}.webp`
              : undefined
          "
          :ui="{
            root: cn('pointer-events-auto! overflow-hidden bg-transparent'),
            image: '',
            icon: cn(
              'size-full',
              runes?.secondary && pathIndex[runes.secondary]?.color
                ? twText[pathIndex[runes.secondary as number]?.color as string]
                : 'text-pc',
              {
                'scale-180 **:stroke-[2.4]': runes.secondary === 8200
              }
            )
          }"
          icon=" i-lp-rune"
          size="3xs" />
      </FoilLayer>
    </div>
  </div>
</template>
