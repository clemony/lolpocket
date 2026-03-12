<script setup lang="ts">
import type { AvatarProps, TooltipProps } from "@nuxt/ui"

type UiProps = AvatarProps["ui"] &
  TooltipProps["ui"] & {
    wrapper?: string
    base?: string
  }
interface Props extends Omit<AvatarProps, "ui">, Omit<TooltipProps, "ui"> {
  ui?: UiProps
}

const props = withDefaults(
  defineProps<
    Props & {
      class?: HTMLAttributes["class"]
      src?: string
      label?: string
      side?: Side
      ui?: Props["ui"]
      loadingIcon?: LoadingStyle
    }
  >(),
  {},
)

const emit = defineEmits(["loaded"])

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit("loaded")
}

const tooltip = useTemplateRef<TooltipExpose>("tooltip")
</script>

<template>
  <Tooltip
    ref="tooltip"
    interactive
    :label
    :align="tooltip?.pinned ? 'center' : 'end'"
    :align-offset="tooltip?.pinned ? 0 : undefined"
    :class="cn('size-max', props?.ui)"
    :avatar="src || undefined"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        ' px-1': tooltip?.pinned,
      }),
    }"
    :side="side || tooltip?.pinned ? 'top' : 'bottom'">
    <button class="hover-3d size-max rounded-lg hover-3d-shine">
      <div
        :class="
          cn(
            'size-14 overflow-hidden rounded-lg shadow-sm drop-shadow-sm',
            props?.class,
            props?.ui?.wrapper,
          )
        ">
        <UAvatar
          icon="i-question"
          role="button"
          :quality="100"
          :src="src || undefined"
          :ui="{
            root: cn('relative size-full rounded-lg', ui?.root),
            image: 'z-1',
            icon: 'size-5 opacity-60',
          }"
          :alt="props?.label ? `${props?.label} icon` : 'an icon'"
          @loaded="onLoad" />

        <Icon
          v-if="!loaded && loadingIcon === 'spinner'"
          name="i-lucide-loader-circle"
          class="pointer-events-none absolute size-4 animate-spin place-self-center!" />
        <USkeleton
          v-if="!loaded"
          :class="cn('pointer-events-none absolute size-full', loading)" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </button>
    <template v-if="tooltip?.pinned" #content>
      <slot name="content" />
    </template>
  </Tooltip>
</template>
