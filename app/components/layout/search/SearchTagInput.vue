<script setup lang="ts">
const { class: className, tag: t } = defineProps<{
  tag: string
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['focus:return', 'update:tag'])
const tag = ref('')

onMounted(() => tag.value = t)
watch(() => t, newVal => tag.value = newVal)
</script>

<template>
  <div
    :class="cn('flex shrink items-center gap-1.5 min-w-1/3 not-focus-within:opacity-0 transition-all duration-200', { '!opacity-100': tag.length }, className)">
    <span class="place-items-center grid relative -mr-1">
      <icon
        name="hash"
        class="size-3.5 opacity-60" />
    </span>

    <input
      v-model="tag"
      type="text"
      placeholder="tag"
      :maxlength="5"
      class="shrink field-sizing-content"
      @input="emit('update:tag', tag)"
      @keydown.delete="!tag.length ? emit('focus:return') : null" />
  </div>
</template>