<script setup lang="ts">
import { Primitive } from "reka-ui"

const props = withDefaults(defineProps<TooltipPropsExt>(), {
  followCursor: true,
})

const open = ref(false)
const anchor = ref({ x: 0, y: 0 })

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      bottom: anchor.value.y,
      ...anchor.value,
    }) as DOMRect,
}))

function handleMove(ev: PointerEvent) {
  if (!props?.followCursor) return
  anchor.value.x = ev.clientX
  anchor.value.y = ev.clientY
}
const delegated = reactiveOmit(props, "class", "avatar", "icon", "trailingIcon")
</script>

<template>
  <UTooltip
    v-bind="delegated"
    :open="open"
    :reference="reference"
    :ui="{
      ...props.ui,
      arrow: cn(
        'group-top/tt:h-1 group-top/tt:w-2! group-bottom/tt:h-1 group-bottom/tt:w-2',
        props.ui?.arrow
      ),
    }"
    :content="{
      ...props.content,
      updatePositionStrategy: 'always',
      sideOffset: props.content?.sideOffset ?? 10,
    }">
    <Primitive
      :as="props?.as"
      as-child
      :class="props?.class"
      @pointerenter="open = true"
      @pointerleave="open = false"
      @pointermove="handleMove($event)">
      <slot />
    </Primitive>

    <template #content>
      <slot name="content">
        <div class="inline-flex items-center gap-2 align-baseline">
          <div
            v-if="props?.avatar"
            class="relative inline-grid size-3.5 place-items-center align-middle">
            <LazyUAvatar
              v-if="avatar"
              hydrate-on-visible
              icon="i-image-circle"
              spinner
              decoding="async"
              loading="lazy"
              :quality="30"
              v-bind="props?.avatar"
              :alt="`${text}-icon`"
              :ui="{
                root: cn(
                  'absolute -ml-1 overflow-hidden bg-transparent',
                  props.avatar?.ui?.root
                ),
              }" />
          </div>
          <Icon
            v-if="props?.icon"
            :name="props?.icon"
            :class="
              cn('inline size-3.5 align-icon text-nc', props.ui?.leadingIcon)
            " />
          {{ text }}

          <Icon
            v-if="props?.trailingIcon"
            :name="props?.trailingIcon"
            :class="
              cn(
                'ml-1 inline size-3.75 self-center align-middle text-nc',
                { 'scale-120': props?.trailingIcon === 'i' },
                props.ui?.trailingIcon
              )
            " />
        </div>
      </slot>
    </template>
  </UTooltip>
</template>
