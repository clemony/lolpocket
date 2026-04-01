<script setup lang="ts">
import type { AvatarProps, TooltipProps } from "@nuxt/ui"

type UiProps = AvatarProps["ui"] &
  TooltipProps["ui"] & {
    wrapper?: string
    base?: string
  }
interface Props
  extends Omit<AvatarProps, "ui" | "icon">, Omit<TooltipProps, "ui"> {
  ui?: UiProps
}

const props = withDefaults(
  defineProps<
    Props & {
      class?: HTMLAttributes["class"]
      src?: string
      icon?: AvatarProps["icon"]
      label?: string
      side?: Side
      ui?: Props["ui"]
      spinner?: boolean
      effects?: boolean
      interactive?: boolean
      pin?: boolean
    }
  >(),
  {
    spinner: false,
    icon: "i-question",
    effects: false,
    pin: true,
    interactive: false
  }
)
//i-eos-icons-hourglass
const emit = defineEmits(["loaded"])

const loaded = ref(false)
const resolvedSrc = shallowRef<string | undefined>(undefined)
let preloadToken = 0

const tooltip = useTemplateRef<TooltipExpose>("tooltip")

const delegated = reactiveOmit(props, "class", "spinner")
const hasSrc = computed(() => Boolean(props.src?.trim()))

watch(
  () => props.src,
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
</script>

<template>
  <Tooltip
    ref="tooltip"
    as-child
    :interactive
    :label
    :align="tooltip?.pinned ? 'center' : 'end'"
    :align-offset="tooltip?.pinned ? 0 : undefined"
    :avatar="hasSrc ? resolvedSrc || '' : undefined"
    :ui="{
      content: cn('group/avatar h-fit! max-h-110! w-full max-w-100', {
        ' px-2 rounded-[0.7rem]': tooltip?.pinned
      })
    }"
    :side="props.side || tooltip?.pinned ? 'top' : 'bottom'">
    <UAvatar
      role="button"
      v-bind="delegated"
      :quality="100"
      :src="hasSrc ? resolvedSrc || '' : undefined"
      :ui="{
        root: cn('relative rounded-lg', { '': loaded }, props.ui?.root),
        image: cn(
          'z-1',
          {
            'scale-105  outline outline-n0/70  ring ring-offset-3 ring-n0/90 ring-offset-p2':
              tooltip?.pinned && props.effects !== false
          },
          props.ui?.image
        ),
        icon: cn(
          'size-5 opacity-60',
          {
            'pointer-events-none absolute size-4 animate-spin place-self-center! text-nc':
              props.spinner
          },
          props.ui?.icon
        ),
        fallback: props.ui?.fallback
      }"
      icon="i-ui-none"
      :alt="props?.label ? `${props?.label} icon` : 'an icon'">
      <USkeleton
        v-if="hasSrc && !props.spinner && !loaded"
        class="pointer-events-none block size-full rounded-[inherit]" />
    </UAvatar>
    <template v-if="tooltip?.pinned && !props.disabled" #content>
      <slot name="content" />
    </template>
  </Tooltip>
</template>
