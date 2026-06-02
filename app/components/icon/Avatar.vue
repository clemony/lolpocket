<script setup lang="ts">
import type { Align, Side, TooltipPropsExt } from "#shared/types"
import type { AvatarProps } from "@nuxt/ui"

interface AvatarWrapperProps {
  effects?: boolean
  spinner?: boolean
  round?: boolean
  class?: HTMLAttributes["class"]
  tooltip?: TooltipPropsExt
}

const props = withDefaults(defineProps<AvatarProps & AvatarWrapperProps>(), {
  effects: true,
  spinner: false,
  tooltip: () => ({
    pin: true,
    interactive: true,
    effects: true,
    map: 0
  })
})
//i-eos-icons-hourglass
const emit = defineEmits(["loaded"])
const tt = computed(() => safeObject(props.tooltip))
const ava = computed(() => props)

const loaded = ref(false)
const resolvedSrc = shallowRef<string | undefined>(undefined)
let preloadToken = 0

const delegated = reactiveOmit(props, "class", "tooltip", "effects", "spinner")
const hasSrc = computed(() => Boolean(ava.value.src?.trim()))

watch(
  () => ava.value.src,
  (src) => {
    preloadToken += 1
    const currentToken = preloadToken

    loaded.value = false
    resolvedSrc.value = undefined

    if (!src?.trim()) return
    if (!import.meta.client) return

    const image = new window.Image()
    image.decoding = "async"
    image.src = src

    image.onload = () => {
      if (currentToken !== preloadToken) return
      resolvedSrc.value = src
      loaded.value = true
      emit("loaded")
    }

    image.onerror = () => {
      if (currentToken !== preloadToken) return
      resolvedSrc.value = ""
      loaded.value = false
    }
  },
  { immediate: true }
)

const isPinned = shallowRef(false)

const tooltipAlign = computed<Align>(() => (isPinned.value ? "center" : "end"))
const tooltipAlignOffset = computed(() => (isPinned.value ? 0 : undefined))
const tooltipSide = computed<Side>(
  () => tt.value.side ?? (isPinned.value ? "top" : "bottom")
)

function handlePinClick() {
  if (!tt.value.pin || !tt.value.interactive) return
  isPinned.value = true
}

onBeforeUnmount(() => {
  isPinned.value = false
})

const ui = computed<NonNullable<AvatarProps["ui"]>>(
  () =>
    mergeUi<NonNullable<AvatarProps["ui"]>>(
      {
        root: cn(
          "group/icon relative",
          ava.value.round ? "rounded-full" : "rounded-lg",
          ava.value.ui?.root,
          { "z-5! hover:z-5!": isPinned.value }
        ),

        image: cn(
          "z-1 size-[inherit] rounded-[inherit] shadow-sm drop-shadow-sm drop-shadow-black/10",
          {
            "scale-105 ring ring-n0/60! ring-offset-p1":
              isPinned.value && ava.value.effects !== false,
            "ring-offset-3!":
              isPinned.value &&
              ava.value.effects !== false &&
              ["md", "lg", "xl"].includes(String(ava.value.size)),
            "hover:scale-115": ["xs", "sm", "2xs"].includes(
              String(ava.value.size)
            ),
            "repeat-1 scale-115 animate-heartbeat-sm ring-offset-2! not-hover:duration-500!":
              ["xs", "sm", "2xs"].includes(String(ava.value.size)) &&
              isPinned.value &&
              ava.value.effects !== false
          }
        ),
        icon: cn("size-5 opacity-60", {
          "pointer-events-none absolute size-4 animate-spin place-self-center! text-nc":
            ava.value.spinner
        })
      },
      ava.value?.ui
    ) as NonNullable<AvatarProps["ui"]>
)
</script>

<template>
  <Tooltip
    as-child
    :interactive="isPinned && tt.interactive ? true : false"
    :pin="tt.pin"
    :pinned="isPinned"
    :label="tt.label"
    :align="tooltipAlign"
    :align-offset="tooltipAlignOffset"
    :avatar="hasSrc ? resolvedSrc || '' : undefined"
    :ui="{
      content: cn('group/avatar h-fit! max-h-110! w-full max-w-100', {
        ' px-2 rounded-[0.7rem]': isPinned
      })
    }"
    :side="tooltipSide"
    @pinned="tt.pin ? (isPinned = true) : undefined"
    @unpinned="isPinned = false">
    <div class="relative">
      <UAvatar
        role="button"
        v-bind="delegated"
        :quality="100"
        :src="hasSrc ? resolvedSrc || '' : undefined"
        icon="i-ui-none"
        :ui
        :alt="tt.label ?? props.alt ?? 'an icon'"
        @click="handlePinClick" />
      <LazyUSkeleton
        v-if="hasSrc && !ava.spinner && !loaded"
        class="pointer-events-none block size-full rounded-[inherit]" />
      <slot />
    </div>
    <template v-if="isPinned" #content>
      <slot name="content" />
    </template>
  </Tooltip>
</template>
