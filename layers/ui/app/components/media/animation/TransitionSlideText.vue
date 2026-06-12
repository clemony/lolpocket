<script lang="ts" setup>
interface Ui {
  values?: string
  valueTrue?: string
  valueFalse?: string
}
defineOptions({
  inheritAttrs: false
})

const { modelValue, valueTrue, valueFalse } = defineProps<{
  modelValue: boolean
  valueTrue?: string
  valueFalse?: string
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
    <p v-show="modelValue" :class="cn(base, ui?.values, ui?.valueTrue)">
      {{ valueTrue }}
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
    <p v-show="!modelValue" :class="cn(base, ui?.values, ui?.valueFalse)">
      {{ valueFalse }}
    </p>
  </Transition>
</template>
