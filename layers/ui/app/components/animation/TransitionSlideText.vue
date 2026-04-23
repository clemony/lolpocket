<script lang="ts" setup>
interface Ui {
  labels?: string
  labelTrue?: string
  labelFalse?: string
}
const { modelValue, labelTrue, labelFalse } = defineProps<{
  modelValue: boolean
  labelTrue?: string
  labelFalse?: string
  ui?: Ui
}>()

const base = "block w-full text-pretty whitespace-pre-wrap"
</script>

<template>
  <Transition
    appear
    enter-active-class="transition duration-150 ease-out"
    enter-from-class="-translate-x-1 opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="absolute inset-0 transition duration-100 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-1 opacity-0">
    <p v-show="modelValue" :class="cn(base, ui?.labels, ui?.labelTrue)">
      {{ labelTrue }}
    </p>
  </Transition>
  <Transition
    appear
    enter-active-class="transition duration-150 ease-out"
    enter-from-class="translate-x-1 opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="absolute inset-0 transition duration-100 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-1 opacity-0">
    <p v-show="!modelValue" :class="cn(base, ui?.labels, ui?.labelFalse)">
      {{ labelFalse }}
    </p>
  </Transition>
</template>
