<script setup lang="ts">
const { class: className, tag: t } = defineProps<{
  tag: string
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['focus:return', 'update:tag'])
const tag = ref('')

onMounted(() => (tag.value = t))
watch(
  () => t,
  newVal => (tag.value = newVal)
)
</script>

<template>
  <div
    :class="
      cn(
        'flex min-w-1/3 shrink items-center gap-1.5 transition-all duration-200 not-focus-within:opacity-0',
        { 'opacity-100!': tag.length },
        className,
      )
    "
  >
    <span class="relative -mr-1 grid place-items-center">
      <icon class="size-3.5 opacity-60" name="hash" />
    </span>

    <input
      v-model="tag"
      class="field-sizing-content shrink"
      type="text"
      placeholder="tag"
      :maxlength="5"
      @input="emit('update:tag', tag)"
      @keydown.delete="!tag.length ? emit('focus:return') : null"
    >
  </div>
</template>
