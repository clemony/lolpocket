<script lang="ts" setup>
import { tv } from "tailwind-variants"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  id?: string
  color?: "res" | "dom" | "neutral" | "base"
  modelValue?: boolean | "indeterminate"
  defaultValue?: boolean
  disabled?: boolean
  variant?: "solid" | "ghost" | "outline"
  size?: "lg" | "md" | "sm" | "xs" | "xl"
  invalid?: boolean
}>()

const emit = defineEmits<{
  "update:modelValue": [value: boolean]
}>()

function updateValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked)
}

const checkboxVariants = tv({
  base: "checkbox",
  variants: {
    color: {
      res: "",
      dom: "",
      base: "",
      neutral: ""
    },
    size: {
      lg: "checkbox-lg",
      xl: "checkbox-xl",
      md: "checkbox-md",
      sm: "checkbox-sm",
      xs: "checkbox-xs"
    },
    variant: {
      solid: "checked:shadow-sm checked:drop-shadow-sm",
      ghost:
        "border-0 bg-transparent shadow-none ring-0 inset-shadow-none fx-0",
      outline: ""
    }
  },
  compoundVariants: [
    {
      color: "base",
      variant: "solid",
      class: "bg-p0 text-pc"
    },
    {
      color: "base",
      variant: "ghost",
      class: "text-pc"
    },

    {
      color: "base",
      variant: "outline",
      class: "text-pc ring ring-pc/60"
    },
    {
      color: "neutral",
      variant: "solid",
      class: "checkbox-neutral"
    },
    {
      color: "neutral",
      variant: "ghost",
      class: "text-nc"
    },
    {
      color: "neutral",
      variant: "outline",
      class: "text-nc ring ring-nc"
    },
    {
      color: "res",
      variant: "solid",
      class: "bg-res text-white/70"
    },
    {
      color: "dom",
      variant: "solid",
      class: "bg-dom text-white/70"
    }
  ],
  defaultVariants: {
    colors: "base",
    size: "md",
    variant: "solid"
  }
})

type CheckboxVariants = ReturnType<typeof checkboxVariants>
</script>

<template>
  <input
    :id="props.id"
    type="checkbox"
    :checked="props.modelValue === true"
    :class="
      cn(
        '',
        checkboxVariants({
          size: props.size,
          variant: props.variant,
          color: props.color
        }),
        props.class,
        props.invalid && 'checkbox-invalid'
      )
    "
    :disabled="props.disabled"
    :indeterminate="props.modelValue === 'indeterminate'"
    @change="updateValue" />
</template>

<style scoped>
.checkbox-invalid {
}
.checkbox-invalid::before {
  clip-path: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3.5' d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  opacity: 0.85;
  transform: rotate(-45deg);
}
</style>
