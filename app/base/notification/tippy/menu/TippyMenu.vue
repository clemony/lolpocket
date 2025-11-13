<script setup lang="ts">
import type { TippyOptions } from "vue-tippy";
import { provide, ref, watch } from "vue";
import { useTippyComponent } from "vue-tippy";
import type { TippyContext } from "./tippy-context";
import { tippyContextKey } from "./tippy-context";

const props = withDefaults(defineProps<TippyOptions>(), {
  animation: "shift-toward",
  duration: 150,
  interactive: true,
  offset: [0, 14] as any,
  placement: "bottom",
});

const triggerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const { instance, TippyComponent } = useTippyComponent(props);

provide<TippyContext>(tippyContextKey, {
  setContent: (el: HTMLElement) => (contentRef.value = el),
  setTrigger: (el: HTMLElement) => (triggerRef.value = el),
});

watch([triggerRef, contentRef], ([trigger, content]) => {
  if (trigger && content) (instance.value as any)?.setContent(trigger, content);
});
</script>

<template>
  <component :is="TippyComponent">
    <slot />
  </component>
</template>
