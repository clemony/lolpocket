<script lang="ts" setup>
import allMaskSvg from "~/assets/icons/lp/all.svg"
import botMaskSvg from "~/assets/icons/lp/bot.svg"
import jungleMaskSvg from "~/assets/icons/lp/jungle.svg"
import midMaskSvg from "~/assets/icons/lp/mid.svg"
import supportMaskSvg from "~/assets/icons/lp/support.svg"
import topMaskSvg from "~/assets/icons/lp/top.svg"
const {
  class: className,
  invert = false,
  maskKey,
  label,
  maskSize = 86
} = defineProps<{
  class?: HTMLAttributes["class"]
  invert?: boolean
  maskKey?: string | number
  maskSize?: number //as percent
  label?: string
}>()
const maskSvg: Record<string, string> = {
  all: allMaskSvg,
  bot: botMaskSvg,
  bottom: botMaskSvg,
  jungle: jungleMaskSvg,
  mid: midMaskSvg,
  middle: midMaskSvg,
  support: supportMaskSvg,
  top: topMaskSvg
}

const maskStyle = computed(() => {
  if (!maskKey)
    return svgMaskStyle("i-question", { inverted: invert, maskSize })
  return svgMaskStyle(String(maskSvg[maskKey]), { inverted: invert, maskSize })
})
</script>

<template>
  <FoilLayer
    :disabled="!maskKey"
    :class="cn('', className)"
    :mask="maskKey ? `/img/role/${maskSvg}.svg` : undefined">
    <SvgMask v-if="maskKey" class="size-full" :mask-key="maskKey" />
  </FoilLayer>
</template>
