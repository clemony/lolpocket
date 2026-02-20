<script setup lang="ts">
import type { ReportOption } from "~/components/user/utilities/report/reportOptions"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  option: ReportOption
  modelValue: string[]
  message: string
  error?: string
}>()

const emit = defineEmits<{
  (event: "update:modelValue", value: string[]): void
  (event: "update:message", value: string): void
}>()

const inputRef = useTemplateRef("inputRef")

const checked = computed(() => props.modelValue.includes(props.option.id))

function toggle(value: boolean | "indeterminate") {
  if (value === true) {
    emit("update:modelValue", [...props.modelValue, props.option.id])
    nextTick(() => inputRef.value?.focusInput?.())
    return
  }
  emit(
    "update:modelValue",
    props.modelValue.filter((id) => id !== props.option.id)
  )
  emit("update:message", "")
}
</script>

<template>
  <Element
    class="hover:fx-1 w-full border border-transparent py-2 hover:border-p3/50! hover:bg-p2/40"
    base="btn"
    hover="outline"
    variant="ghost">
    <div class="flex w-full items-center gap-2">
      <div class="flex items-center gap-3"></div>
    </div>
  </Element>
</template>
