<script setup lang="ts">
import type { ModalEmits, ModalProps, ModalSlots } from "@nuxt/ui"

type ModalSize = "md" | "full" | "xl"

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    Omit<ModalProps, "fullscreen"> & {
      size?: ModalSize
    }
  >(),
  {
    size: "md",
  }
)

const emit = defineEmits<ModalEmits>()
defineSlots<ModalSlots>()

const sizeContentClass = computed(() => {
  switch (props.size) {
    case "md":
      return "ring-p3"
    case "xl":
      return [
        "!top-16",
        "!right-16",
        "!bottom-16",
        "!left-16",
        "!w-auto",
        "!max-w-none",
        "!max-h-none",
        "sm:!max-h-none",
        "!translate-x-0",
        "!translate-y-0",
        "!rounded-3xl",
        "ring-p3",
      ]
    default:
      return undefined
  }
})

const forwardedUi = computed(() => ({
  title: cn("text-pc", props.ui?.title),
  body: cn("bg-p1", props.ui?.body),
  content: cn("divide-p3", props.ui?.content),
  description: cn("text-n4", props.ui?.description),
  header: cn("min-h-16", props.ui?.header),
  overlay: cn("bg-n2/76", props.ui?.overlay),
  wrapper: props.ui?.wrapper,
  footer: props.ui?.footer,
  close: props.ui?.close,
}))

const forwardedContent = computed(() => ({
  ...props.content,
  class: [sizeContentClass.value],
}))

const forwardedProps = computed(() => ({
  ...props,
  content: forwardedContent.value,
  ui: forwardedUi.value,
  fullscreen: props.size === "full",
}))

const forwardedEvents = {
  "update:open": (value: boolean) => emit("update:open", value),
  "after:leave": () => emit("after:leave"),
  "after:enter": () => emit("after:enter"),
  "close:prevent": () => emit("close:prevent"),
}
</script>

<template>
  <UModal v-bind="{ ...forwardedProps, ...$attrs }" v-on="forwardedEvents">
    <template v-if="$slots.default" #default="slotProps">
      <slot v-bind="slotProps" />
    </template>

    <template v-if="$slots.content" #content="slotProps">
      <slot name="content" v-bind="slotProps" />
    </template>

    <template v-if="$slots.header" #header="slotProps">
      <slot name="header" v-bind="slotProps" />
    </template>

    <template v-if="$slots.title" #title="slotProps">
      <slot name="title" v-bind="slotProps" />
    </template>

    <template v-if="$slots.description" #description="slotProps">
      <slot name="description" v-bind="slotProps" />
    </template>

    <template v-if="$slots.actions" #actions="slotProps">
      <slot name="actions" v-bind="slotProps" />
    </template>

    <template v-if="$slots.close" #close="slotProps">
      <slot name="close" v-bind="slotProps" />
    </template>

    <template v-if="$slots.body" #body="slotProps">
      <slot name="body" v-bind="slotProps" />
    </template>

    <template v-if="$slots.footer" #footer="slotProps">
      <slot name="footer" v-bind="slotProps" />
    </template>
  </UModal>
</template>
