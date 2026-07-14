<script setup lang="ts">
import type { AvatarProps } from "@nuxt/ui"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

const props = withDefaults(
  defineProps<
    AvatarProps & {
      pocket: Pocket
    }
  >(),
  {
    size: "lg"
  }
)

/*
    v-model:open="isOpen"
    @update:splash="(e) => handleSplash(e)" */

// todo uimodal
const delegated = reactiveOmit(props, "class", "pocket")
const src = computed(() =>
  props.pocket.splash
    ? getSplashFromSkinKey(props.pocket.splash, "tile")
    : props.pocket._champion
      ? getSplash(props.pocket._champion, "tile")
      : ""
)
</script>

<template>
  <div>
    <UAvatar
      v-bind="delegated"
      :ui="{
        root: cn('relative', props.ui?.root),
        image: cn(
          'pointer-events-none z-1 rounded-full transition-all duration-500 ease-in-out group-hover/icon:brightness-50 group-data-[state=open]/icon:brightness-50',
          props.ui?.image
        ),
        icon: cn(
          'pointer-events-none absolute z-2 size-6 text-nc! opacity-0 transition-all duration-500 ease-in-out group-hover/icon:opacity-80 group-data-[state=open]/icon:opacity-100'
        )
      }"
      :src="src"
      icon="i-images"
      alt="pocket icon" />
  </div>
</template>
