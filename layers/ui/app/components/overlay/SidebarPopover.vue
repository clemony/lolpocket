<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
defineOptions({
  inheritAttrs: false,
})

const {
  collapsed,
  label,
  active,
  legend,
  arrow,
  icon,
  value,
  align,
  ui,
  color = "p0",
  variant,
  side = "left",
} = defineProps<{
  collapsed?: boolean
  arrow?: boolean
  label?: string
  icon?: string
  legend?: string
  align?: Align
  active?: boolean
  ui?: ButtonProps["ui"]
  value?: number
  side?: Side
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
}>()

const popOpen = shallowRef<boolean>(false)
</script>

<template>
  <LazyUPopover
    v-model:open="popOpen"
    :class="ui?.base"
    as="div"
    :arrow
    :ui="{
      content: 'max-h-80 w-60 overflow-hidden border-y-transparent',
    }"
    :content="{
      side,
      align,
    }">
    <!--   <LazyTooltip :label="label" :disabled="popOpen" :side>
     <LazyUChip :text="value" :show="!!value" size="2xl" color="neutral"> -->
    <UButton
      square
      :icon
      :size
      :color
      :ui="{
        base: cn(!!value ? 'border border-p4 fx-0  ' : ''),
        leadingIcon: ui?.leadingIcon,
      }"
      :active="popOpen" />
    <!-- </LazyUChip>
    </LazyTooltip> -->

    <template #content>
      <LazyScrollAreaButtons
        class="z-auto w-full [&_.slot-fieldset]:gap-px"
        scroll-area-class="max-h-70"
        content-class="pb-2.5">
        <template #default>
          <div class="px-3 pt-2.5 pb-1">
            <h6 class="text-sm">
              {{ legend }}
            </h6>
          </div>
          <div class="w-full px-1.5">
            <slot name="content" />
          </div>
        </template>
      </LazyScrollAreaButtons>
    </template>
  </LazyUPopover>
</template>
