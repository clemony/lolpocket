<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"]
  id?: string
  color?: "res" | "dom" | "neutral"
  modelValue?: boolean | "indeterminate"
  defaultValue?: boolean
  disabled?: boolean
  size?: "lg" | "md" | "sm" | "xs" | "xl"
  invalid?: boolean
}>()

const emit = defineEmits<{
  "update:modelValue": [value: boolean]
}>()

const size = {
  lg: "checkbox-lg",
  xl: "checkbox-xl",
  md: "checkbox-md",
  sm: "checkbox-sm",
  xs: "checkbox-xs"
}[props.size || "md"]

const color = {
  res: "bg-res text-white/70",
  dom: "bg-dom text-white/70",
  neutral: "checkbox-neutral"
}[props.color || "neutral"]

function updateValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <input
    :id="props.id"
    type="checkbox"
    :checked="props.modelValue === true"
    :class="
      cn(
        'checkbox-res checkbox checked:shadow-sm checked:drop-shadow-sm',
        size,
        color,
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
