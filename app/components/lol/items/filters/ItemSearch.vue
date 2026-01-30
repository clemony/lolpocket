<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    placeholder?: string
    inputClass?: HTMLAttributes['class']
    setFocus?: boolean
  }>(),
  {
    placeholder: 'Search Items...',
  }
)
const emit = defineEmits(['update:query'])

const searchQuery = ref('')
</script>

<template>
  <div
    :class="
      cn(
        'border-b3 bg-b1! text-md flex h-12 items-center gap-4 border px-3 py-2',
        props.class,
      )
    "
  >
    <icon class="pointer-events-none size-5 opacity-70" name="search" />

    <input
      v-model="searchQuery"
      :placeholder="props.placeholder"
      :class="
        cn(
          'text-md flex h-full grow border-0 text-start ring-0 outline-0 hover:border-0 hover:ring-0 hover:outline-0',
          props.inputClass,
        )
      "
    >

    <slot />

    <button
      class="btn btn-square btn-ghost btn-sm absolute right-2"
      @click="searchQuery = null"
    >
      <icon class="shrink-0" name="x-sm" />
    </button>
  </div>
</template>
