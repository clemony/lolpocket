<script setup lang="ts">
import type { InputVariants } from "@variants";
import { useVModel } from "@vueuse/core";
import { useForwardPropsEmits } from "reka-ui";
import { inputVariants } from "~/assets/variants/components/input-variants";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    defaultValue?: string;
    focused?: boolean;
    modelValue?: string;
    id?: string;
    size?: InputVariants["size"];
    placeholder?: string;
  }>(),
  {
    placeholder: "",
    size: "default",
  },
);

const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
  (e: "clear:input", payload: string): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

const inputRef = shallowRef<HTMLElement>();
const { focused } = useFocus(inputRef, { initialValue: props.focused });

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);

function focusInput() {
  if (!focused.value) focused.value = true;
}
defineExpose({
  focusInput,
  inputRef,
});
</script>

<template>
  <label
    :id="props.id"
    for="input"
    v-bind="forwarded"
    :class="cn(inputVariants({ size: props.size }), props.class)"
  >
    <slot />
    <input
      ref="inputRef"
      v-model="modelValue"
      name="inputRef"
      :placeholder
      autocomplete="off"
      class="placeholder:text-2 placeholder:italic focus:placeholder:opacity-0"
      @keydown.stop
      @keydown.enter.prevent
    />
    <slot name="2" />

    <slot name="3" />
  </label>
</template>
