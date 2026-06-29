<script lang="ts" setup>
import { runeIndex } from "#shared/constants/runes/runeIndex"
import type { AvatarProps } from "@nuxt/ui"

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
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none z-auto flex size-full shrink-0 flex-col items-center gap-1.5 *:pointer-events-auto',
        props.class
      )
    ">
    <HoverAvatar
      size="md"
      :src="`/img/rune/${keystone?.id}.webp`"
      :avatar="{
        ui: {
          root: cn('z-2 bg-p3! shadow-sm ring! ring-p4/70', props.ui?.root),
          image: cn('', props.ui?.image),
          ...props.ui,
        },
      }" />

    <HoverAvatar
      v-if="props.player?.runes?.secondary.path"
      :src="`/img/path/${s}.webp`"
      size="xs"
      :avatar="{
        ui: {
          ...props.ui,
          root: cn(
            'z-2 bg-n2! p-0.75 ring ring-n5 drop-shadow-xs',
            props.ui?.root
          ),
          image: cn('object-contain', props.ui?.image),
        },
      }"
      type="path" />
  </div>
</template>
