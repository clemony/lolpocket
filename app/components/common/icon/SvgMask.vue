<script lang="ts" setup>
import type { CSSProperties } from "vue"
import map0Svg from "~/assets/icons/lp/0.svg?raw"
import map11Svg from "~/assets/icons/lp/11.svg?raw"
import map12Svg from "~/assets/icons/lp/12.svg?raw"
import map21Svg from "~/assets/icons/lp/21.svg?raw"
import map30Svg from "~/assets/icons/lp/30.svg?raw"
import allMaskSvg from "~/assets/icons/lp/all.svg?raw"
import assassinMaskSvg from "~/assets/icons/lp/assassin.svg?raw"
import botMaskSvg from "~/assets/icons/lp/bot.svg?raw"
import enchanterMaskSvg from "~/assets/icons/lp/enchanter.svg?raw"
import fighterMaskSvg from "~/assets/icons/lp/fighter.svg?raw"
import jungleMaskSvg from "~/assets/icons/lp/jungle.svg?raw"
import mageMaskSvg from "~/assets/icons/lp/mage.svg?raw"
import marksmanMaskSvg from "~/assets/icons/lp/marksman.svg?raw"
import midMaskSvg from "~/assets/icons/lp/mid.svg?raw"
import specialistMaskSvg from "~/assets/icons/lp/specialist.svg?raw"
import supportMaskSvg from "~/assets/icons/lp/support.svg?raw"
import tankMaskSvg from "~/assets/icons/lp/tank.svg?raw"
import topMaskSvg from "~/assets/icons/lp/top.svg?raw"

const {
  class: className,
  invert = false,
  maskKey,
  label,
  maskSize
} = defineProps<{
  class?: HTMLAttributes["class"]
  invert?: boolean
  maskKey?: string | number
  maskSize?: number //as percent
  label?: string
}>()

const maskSvg: Record<string, string> = {
  all: allMaskSvg,
  assassin: assassinMaskSvg,
  enchanter: enchanterMaskSvg,
  fighter: fighterMaskSvg,
  mage: mageMaskSvg,
  marksman: marksmanMaskSvg,
  specialist: specialistMaskSvg,
  tank: tankMaskSvg,
  bot: botMaskSvg,
  bottom: botMaskSvg,
  jungle: jungleMaskSvg,
  mid: midMaskSvg,
  middle: midMaskSvg,
  support: supportMaskSvg,
  top: topMaskSvg,
  0: map0Svg,
  11: map11Svg,
  12: map12Svg,
  21: map21Svg,
  30: map30Svg
}

function svgMaskStyle(svg: string, inverted = false): CSSProperties {
  const svgMask = `url("data:image/svg+xml,${encodeURIComponent(svg)}") center / ${
    maskSize ? `${maskSize}%` : "86%"
  } no-repeat`

  if (inverted) {
    return {
      mask: `linear-gradient(#fff 0 0), ${svgMask}`,
      maskComposite: "exclude",
      WebkitMask: `linear-gradient(#fff 0 0), ${svgMask}`,
      WebkitMaskComposite: "xor"
    }
  }

  return {
    mask: svgMask,
    WebkitMask: svgMask
  }
}

const maskStyle = computed(() => {
  if (!maskKey) return svgMaskStyle("i-question", invert)
  return svgMaskStyle(String(maskSvg[maskKey]), invert)
})
</script>

<template>
  <Tooltip
    as-child
    :ui="{
      content: 'inline-flex! h-auto! align-baseline capitalize'
    }"
    :disabled="!label || !maskKey"
    :icon="`i-lp-${maskKey}`"
    :label="label || '???'">
    <div
      :style="maskStyle"
      :class="
        cn(
          'size-4 bg-white/40 drop-shadow-sm drop-shadow-black/20 backdrop-blur-md',
          className
        )
      " />

    <template #content>
      <slot />
    </template>
  </Tooltip>
</template>
