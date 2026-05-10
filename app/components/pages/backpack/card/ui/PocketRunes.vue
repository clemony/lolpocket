<script lang="ts" setup>
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
  <UAvatarGroup
    :max="6"
    size="lg"
    :ui="{
      root: 'gap-0.5 overflow-visible p-0.5',
      base: 'pointer-events-auto! relative z-2 overflow-visible'
    }">
    <Tooltip
      :disabled="!runes?.keystone"
      :label="runes?.keystone ? runeNameById(runes?.keystone) : undefined"
      :avatar="runes?.keystone ? `/img/rune/${runes.keystone}.webp` : ''"
      as-child>
      <FoilLayer
        :disabled="!runes?.keystone"
        mask-size="75%"
        class="rounded-full"
        :mask="
          runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined
        ">
        <UAvatar
          :src="
            runes?.keystone ? `/img/rune/${runes.keystone}.webp` : undefined
          "
          :ui="{
            image: 'drop-shadow-xs',
            root: cn(
              'border border-p2',
              runes?.secondary
                ? 'bg-neutral/90 p-1'
                : ' border border-p2 bg-p2 transition-colors duration-200 group-hover/card:bg-p1/90'
            )
          }"
          size="lg" />
      </FoilLayer>
    </Tooltip>
    <Tooltip
      :disabled="!runes?.secondary"
      :label="runes?.secondary ? pathNameById(runes?.secondary) : undefined"
      :avatar="runes?.secondary ? `/img/path/${runes.secondary}.webp` : ''"
      as-child>
      <UAvatar
        :src="
          runes?.secondary
            ? `/img/path/${runes.secondary.toString()}.webp`
            : undefined
        "
        :ui="{
          root: cn(
            'shrink-0 border border-p2 p-2',
            runes?.secondary
              ? 'bg-neutral/90'
              : ' border border-p2 bg-p2 transition-colors duration-200 group-hover/card:bg-p1/90',
            runes?.secondary === 8100 ? ' ' : '[&>img]:brightness-120 '
          ),
          image: 'group-hover/card:brightness-150'
        }"
        icon=" i-lp-rune"
        size="lg" />
    </Tooltip>
  </UAvatarGroup>
</template>
