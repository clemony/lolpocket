<script lang="ts" setup>
import { usePortal } from "@nuxt/ui/composables/usePortal"
import { defu } from "defu"
import type {
  ReferenceElement,
  TooltipArrowProps,
  TooltipContentProps,
  TooltipRootEmits,
  TooltipRootProps,
} from "reka-ui"
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
  injectTooltipProviderContext,
  useForwardPropsEmits,
} from "reka-ui"

interface GlassTooltipUi {
  arrow?: HTMLAttributes["class"]
  content?: HTMLAttributes["class"]
  surface?: HTMLAttributes["class"]
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    TooltipRootProps & {
      arrow?: boolean | TooltipArrowProps
      class?: HTMLAttributes["class"]
      content?: TooltipContentProps
      portal?: boolean | string | HTMLElement
      reference?: ReferenceElement
      size?: "sm" | "md"
      text?: string
      ui?: GlassTooltipUi
    }
  >(),
  {
    portal: true,
    size: "sm",
    hideOnClick: false,
  }
)
const emit = defineEmits<TooltipRootEmits>()
const slots = defineSlots<{
  default?: (props: { open: boolean }) => unknown
  content?: () => unknown
}>()

const delegated = reactiveOmit(
  props,
  "arrow",
  "class",
  "content",
  "portal",
  "reference",
  "size",
  "text",
  "ui"
)
const forwarded = useForwardPropsEmits(delegated, emit)
const providerContext = injectTooltipProviderContext()
const portalProps = usePortal(toRef(() => props.portal))

const contentProps = computed<TooltipContentProps>(
  () =>
    defu(props.content, providerContext.content.value, {
      collisionPadding: 8,
      side: "bottom",
      sideOffset: 8,
    }) as TooltipContentProps
)

const arrowProps = computed(() =>
  typeof props.arrow === "object" ? props.arrow : {}
)

const disabled = computed(
  () => !(props.text || !!slots.content) || props.disabled
)

const open = shallowRef<boolean>(false)
</script>

<template>
  <TooltipRoot
    v-bind="forwarded"
    v-model:open="open"
    :disable-closing-trigger
    :disabled>
    <TooltipTrigger
      v-if="!!slots.default || !!props.reference"
      v-bind="$attrs"
      as-child
      :reference="props.reference"
      :class="props.class">
      <slot :open />
    </TooltipTrigger>

    <TooltipPortal v-bind="portalProps">
      <TooltipContent
        v-bind="contentProps"
        data-slot="content"
        :class="
          cn(
            'group/tt pointer-events-auto isolate z-[677] inline-flex min-h-7.5 origin-(--reka-tooltip-content-transform-origin) cursor-default items-center gap-1 rounded-lg bg-p0/30 p-0 align-baseline text-sm font-medium text-p0 shadow-none ring ring-p5/30 backdrop-saturate-150 select-none before:backdrop-blur-[18px]',
            'motion-reduce:animate-none motion-reduce:transition-none',
            props.ui?.content
          )
        ">
        <div
          :class="
            cn(
              'relative z-1 inline-flex h-7.5 min-h-7.5 origin-(--reka-tooltip-content-transform-origin) items-center gap-1 rounded-lg px-3 py-1.5',
              props.ui?.surface
            )
          ">
          <slot name="content">
            {{ props.text }}
          </slot>
        </div>

        <TooltipArrow
          v-if="!!props.arrow"
          rounded
          v-bind="arrowProps"
          :class="
            cn(
              'stroke-p5/60 **:fill-p0/40 **:stroke-1 group-data-[side=bottom]/tt:mask-t-from-80% group-data-[side=bottom]/tt:mask-t-to-81%',
              props.ui?.arrow
            )
          "
          data-slot="arrow">
          <!--           <div class="size-5 bg-p0/70" /> -->
        </TooltipArrow>
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>

<style scoped>
.caret-mask {
  clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
}
</style>
