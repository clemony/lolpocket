<script lang="ts" setup>
import { runeIndex } from "#shared/constants/runes/runeIndex"
import type { AvatarProps } from "@nuxt/ui"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"

const props = defineProps<
  AvatarProps & {
    player: Player
    class?: HTMLAttributes["class"]
    ui?: AvatarProps["ui"]
  }
>()
const s = computed(() => props.player?.runes?.secondary.path)

const keystone = computed(() =>
  runeIndex.find((r) => r.id === props.player.runes?.keystone)
)

const bg: Record<string, string> = {
  Inspiration: "bg-[color-mix(in_oklab,white_40%,var(--color-insp)_60%)]",
  Sorcery: "bg-[color-mix(in_oklab,white_60%,var(--color-sorc)_40%)]",
  Precision: "bg-[color-mix(in_oklab,white_60%,var(--color-pre)_40%)]",
  Resolve: "bg-[color-mix(in_oklab,white_60%,var(--color-lime-500)_40%)]  ",
  Domination: "bg-[color-mix(in_oklab,white_60%,var(--color-dom)_40%)]",
}
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none relative flex shrink-0 flex-col items-center gap-1.5',
        props.class
      )
    ">
    <div
      class="pointer-events-none absolute z-0 flex size-full shrink-0 flex-col items-center gap-1.5 *:transition-transform *:duration-400 *:ease-spring *:group-hover/avatar-set:scale-108">
      <div class="size-8.25 rounded-full bg-p0 ring-3 ring-p0" />
      <div class="size-6 rounded-full bg-p0 ring-3 ring-p0" />
    </div>

    <HoverIcon
      :id="keystone?.id"
      type="keystone"
      size="md"
      :tooltip="{
        followCursor: false,
        arrow: true,
        content: {
          side: 'top',
          sideOffset: 6,
        },
      }"
      :ui="{
        root: cn(
          'group/avatar pointer-events-auto z-2 size-8.25 transition-all duration-400 ease-spring group-hover/avatar-set:scale-108 hover:z-3 hover:scale-119',
          props.ui?.root
        ),
        image: cn(
          'z-3 shadow-sm inset-ring! inset-ring-pc/8 drop-shadow-sm transition duration-400 ease-spring group-hover/avatar:brightness-108',
          keystone?.id &&
            bg[String(pathNameById(Number(runeToPath[keystone?.id])))],
          props.ui?.image
        ),
        ...props.ui,
      }" />

    <HoverIcon
      v-if="props.player?.runes?.secondary.path"
      :id="s"
      type="path"
      :tooltip="{
        followCursor: false,
        arrow: true,
        content: {
          side: 'bottom',
          sideOffset: 8,
        },
      }"
      size="xs"
      :ui="{
        ...props.ui,
        root: cn(
          'group/avatar pointer-events-auto z-2 transition-all duration-400 ease-spring group-hover/avatar-set:scale-108 hover:z-3 hover:scale-116',
          props.ui?.root
        ),
        image: cn(
          'z-3 bg-n2! object-contain p-0.75 ring ring-n5 drop-shadow-xs transition duration-400 ease-spring group-hover/avatar:brightness-128',
          props.ui?.image
        ),
      }" />
  </div>
</template>
