<script lang="ts" setup>
import type { AvatarProps, TooltipProps } from "@nuxt/ui"
import avatarTheme from "@theme/avatar"

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(
  defineProps<
    Omit<AvatarProps, "ui"> & {
      class?: HTMLAttributes["class"]
      side?: Side
      as?: string
      label?: string
      debugDelayMs?: number
      ui?: AvatarUi
      spinner?: boolean
    }
  >(),
  {
    side: "bottom",
    debugDelayMs: 0,
    icon: "i-question",
  },
)
type AvatarUi = AvatarProps["ui"] & {
  loadingIcon?: HTMLAttributes["class"]
  loading?: HTMLAttributes["class"]
}
const delegated = reactiveOmit(props, "class", "side", "ui", "icon")

const loaded = shallowRef<boolean>(false)

const resolvedSrc = computed(() => {
  if (
    !props.src ||
    !import.meta.dev ||
    !props.debugDelayMs ||
    props.debugDelayMs <= 0
  ) {
    return props.src
  }

  const params = new URLSearchParams({
    ms: String(props.debugDelayMs),
    to: props.src,
  })

  return `/api/dev/slow-image?${params.toString()}`
})

const size = computed(() => avatarTheme.variants.size[props.size || "md"])
</script>

<template>
  <Tooltip
    :as="props?.as"
    :side="props?.side"
    :class="
      cn(
        'relative grid place-items-center rounded-full shadow-sm drop-shadow-sm',
        props?.class,
        size,
      )
    "
    :label="props?.label">
    <UAvatar
      v-bind="delegated"
      :src="resolvedSrc"
      :icon
      loading="lazy"
      :ui="{
        image: cn('', props.ui?.image),
        fallback: props.ui?.fallback,
        root: cn({ 'bg-transparent ': !loaded }, props.ui?.root),
        icon: cn('scale-150 text-n5/50!', props.ui?.icon),
      }"
      @load="loaded = true">
    </UAvatar>

    <Icon
      v-if="!loaded && props.spinner"
      name="i-lucide-loader-circle"
      :class="
        cn(
          'absolute size-4 animate-spin place-self-center! text-nc',
          props?.ui?.loadingIcon,
        )
      " />
    <USkeleton
      v-else-if="!loaded"
      :class="cn('absolute size-full', props.ui?.loading)" />
  </Tooltip>
</template>
